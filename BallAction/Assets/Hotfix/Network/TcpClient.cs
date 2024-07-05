using System;
using System.Collections.Generic;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Cysharp.Threading.Tasks;
using DotNetty.Codecs;
using DotNetty.Handlers.Logging;
using DotNetty.Handlers.Timeout;
using DotNetty.Handlers.Tls;
using DotNetty.Transport.Bootstrapping;
using DotNetty.Transport.Channels;
using DotNetty.Transport.Channels.Sockets;
using UnityEngine;

namespace Hotfix
{
    public class TcpClient:IDispatchMessage, IDisposable
    {
        private readonly bool isSsl = false;
        private IChannel channel;
        public bool Connected { get; private set; }
        
        private readonly Dictionary<ushort, Action<IMessage>> actions;
        private readonly Dictionary<ushort, AutoResetUniTaskCompletionSource<IMessage>> tasks;
        private MoonStreamChannelHandler mMoonStreamChannelHandler;

        public TcpClient()
        {
            actions = new Dictionary<ushort, Action<IMessage>>(50);
            tasks = new Dictionary<ushort, AutoResetUniTaskCompletionSource<IMessage>>(50);
            
            // Debug.Log($"TcpClient ManagedThreadId = {Thread.CurrentThread.ManagedThreadId}");
        }

        public async Task<IChannel> ConnectAsync(string host, int port)
        {
            actions.Clear();
            tasks.Clear();
            
            var pkgSize = sizeof(ushort);
            var group = new MultithreadEventLoopGroup(1);
            X509Certificate2 cert = null;
            string targetHost = null;
            if (isSsl)
            {
                //cert = new X509Certificate2(Path.Combine(ExampleHelper.ProcessDirectory, "dotnetty.com.pfx"), "password");
                //targetHost = cert.GetNameInfo(X509NameType.DnsName, false);
            }

            try
            {
                var bootstrap = new Bootstrap();
                // mMoonChannelHandler = new MoonChannelHandler(this);
                mMoonStreamChannelHandler = new MoonStreamChannelHandler(this);
                bootstrap
                    .Group(group)
                    .Channel<TcpSocketChannel>()
                    .Option(ChannelOption.TcpNodelay, true)
                    .Handler(new ActionChannelInitializer<ISocketChannel>(c =>
                    {
                        IChannelPipeline pipeline = c.Pipeline;

                        if (cert != null)
                        {
                            pipeline.AddLast("tls",
                                new TlsHandler(stream => new SslStream(stream, true, (sender, certificate, chain, errors) => true),
                                    new ClientTlsSettings(targetHost)));
                        }

                        pipeline.AddLast(new LoggingHandler("CLIENT-CONN"));
                        pipeline.AddLast("framing-enc", new LengthFieldPrepender(pkgSize));
                        pipeline.AddLast("framing-dec", new LengthFieldBasedFrameDecoder(ushort.MaxValue, 0, pkgSize, 0, pkgSize));
                        pipeline.AddLast("idle-state", new IdleStateHandler(4, 0, 0));
                        pipeline.AddLast("moon-handler", mMoonStreamChannelHandler);
                    }));

                channel = await bootstrap.ConnectAsync(host, port);
                this.Connected = true;
                _ = channel.CloseCompletion.ContinueWith(async (t) =>
                {
                    if (group != null)
                        await group.ShutdownGracefullyAsync(TimeSpan.FromMilliseconds(100), TimeSpan.FromSeconds(1));
                });
                return channel;
            }
            catch (Exception e1)
            {
                Debug.LogError(e1);
                try
                {
                    if (channel != null)
                        await channel.CloseAsync();
                }
                catch (Exception e2)
                {
                    Debug.LogError(e2);
                }

                if (group != null)
                    await group.ShutdownGracefullyAsync(TimeSpan.FromMilliseconds(100), TimeSpan.FromSeconds(1));

                this.Connected = false;
                throw;
            }
        }

        public async Task DisconnectAsync()
        {
            if (this.channel != null)
                await channel.DisconnectAsync();
            this.Connected = false;
        }

        public void Send(IMessage message)
        {
            if (!Connected)
            {
                Debug.LogError("Connected false!");
                return;
            }
            mMoonStreamChannelHandler.Send(message);
        }
        
        public async Task<TResponse> Call<TResponse>(IMessage msg) where TResponse : IMessage
        {
            // Debug.Log($"TcpClient Call 1 ManagedThreadId = {Thread.CurrentThread.ManagedThreadId}");
            bool isExit = CmdCode.TypeOpCode.TryGetValue(typeof(TResponse), out var responseId);
            if (!isExit)
            {
                Debug.LogError($"type = {typeof(TResponse)} not cmdcode!!!");
            }
            
            if (actions.ContainsKey(responseId))
            {
                Debug.LogError($"Call Msg = {nameof(msg)} responseId={responseId} is Register!!!");
            }
            var task = AutoResetUniTaskCompletionSource<IMessage>.Create();
            tasks[responseId] = task;
            
            Send(msg);
            
            var res = await task.Task;
            
            // Debug.Log($"TcpClient Call 2 ManagedThreadId = {Thread.CurrentThread.ManagedThreadId}");
            return (TResponse)res;
        }
        
        public void Register<TResponse>(Action<TResponse> callback) where TResponse : IMessage
        {
            // Debug.Log($"TcpClient Register ManagedThreadId = {Thread.CurrentThread.ManagedThreadId}");
            bool isExit = CmdCode.TypeOpCode.TryGetValue(typeof(TResponse), out var responseId);
            if (!isExit)
            {
               Debug.LogError($"type = {typeof(TResponse)} not cmdcode!!!");
            }

            actions[responseId] = msg =>
            {
                callback((TResponse)msg);
            };
        }

        public async void Dispatch(ushort opCode, IMessage msg)
        {
            await UniTask.SwitchToMainThread();
            // Debug.Log($"TcpClient Dispatch ManagedThreadId = {Thread.CurrentThread.ManagedThreadId}");
            bool isHandler = false;
            if (tasks.TryGetValue(opCode,out var tcs))
            {
                isHandler = true;
                tcs.TrySetResult(msg);
                tasks.Remove(opCode);
            }

            if (actions.TryGetValue(opCode,out var action))
            {
                isHandler = true;
                action(msg);
            }

            if (!isHandler)
            {
                Debug.LogError($"Msg = {opCode} is not handler !!!");
            }
        }

        public void Dispose()
        {
            DisconnectAsync();
        }
    }
}