using System;
using System.IO;
using DotNetty.Buffers;
using DotNetty.Common.Internal.Logging;
using DotNetty.Handlers.Timeout;
using DotNetty.Transport.Channels;
using DotNetty.Unity;
using NetMessage;

namespace Hotfix
{
    public class MoonChannelHandler : ChannelHandlerAdapter
    {
        private MemoryStream mReceiveStream;
        private MemoryStream mSendStream;
        private IChannelHandlerContext mChannel;
        private C2SPing c2SPing;
        
        private readonly IDispatchMessage mDispatchMessage;
        static readonly IInternalLogger mLog = InternalLoggerFactory.GetInstance(typeof(MoonChannelHandler));
        public MoonChannelHandler(IDispatchMessage dispatchMessage)
        {
            // UnityEngine.Debug.Log($"MoonChannelHandler ManagedThreadId = {System.Threading.Thread.CurrentThread.ManagedThreadId}");
            mDispatchMessage = dispatchMessage;
            
        }
        
        public override void ChannelRegistered(IChannelHandlerContext context)
        {
            mChannel = context;
            mReceiveStream = new MemoryStream(ushort.MaxValue);
            mSendStream = new MemoryStream(ushort.MaxValue);
            c2SPing = new C2SPing();
            base.ChannelRegistered(context);
        }

        public override void ChannelUnregistered(IChannelHandlerContext context)
        {
            mChannel = null;
            c2SPing = null;
            
            mReceiveStream?.Dispose();
            mReceiveStream = null;   
            
            mSendStream?.Dispose();
            mSendStream = null;   
            
            base.ChannelUnregistered(context);
        }

        public override void UserEventTriggered(IChannelHandlerContext context, object evt)
        {
            // Debug.Log($"UserEventTriggered={evt}");
            if (evt is IdleStateEvent idleStateEvent)
            {
                // Debug.Log($"UserEventTriggered IdleStateEvent={idleStateEvent.State}");
                if (idleStateEvent.State == IdleState.ReaderIdle)
                {
                    Send(c2SPing);
                }
            }
        }

        public override void ChannelRead(IChannelHandlerContext context, object message)
        {
            var byteBuffer = message as IByteBuffer;

            if (byteBuffer == null)
            {
                ExceptionCaught(context,new Exception("message not IByteBuffer!"));
                return;
            }
            // int total1 = byteBuffer.ReadableBytes;
        
            ushort cmd = byteBuffer.ReadUnsignedShortLE();
            bool isExit= CmdCode.OpCodeType.TryGetValue(cmd, out var type);
            if (!isExit)
            {
                ExceptionCaught(context,new Exception($"cmd={cmd} message not exist!"));
                return;
            }
            
            int total2 = byteBuffer.ReadableBytes;
            
            mReceiveStream.Position = 0L;
            mReceiveStream.SetLength(total2);
            
            byteBuffer.ReadBytes(mReceiveStream,total2);
            mReceiveStream.Seek(0, SeekOrigin.Begin);
            object deserialize = ProtoBuf.Serializer.Deserialize(type,mReceiveStream);
            
            // UnityEngine.Debug.Log($"ChannelRead {type} | {Newtonsoft.Json.JsonConvert.SerializeObject(deserialize)} ManagedThreadId={Thread.CurrentThread.ManagedThreadId}");
            
            // mDispatchMessage.Dispatch(cmd,(IMessage)deserialize);
            Mono.Init.Inst.ThreadSynchronizationContext.Post(() =>
            {
                mDispatchMessage.Dispatch(cmd,(IMessage)deserialize);
            });

            byteBuffer.Release();
        }

        public override void ChannelReadComplete(IChannelHandlerContext context) => context.Flush();

        public override void ExceptionCaught(IChannelHandlerContext context, Exception exception)
        {
            mLog.Error("ExceptionCaught", exception);
            context.CloseAsync();
        }

        #region 消息发送

        public void Send(IMessage message)
        {
            if (mChannel == null)
            {
                mLog.Error("mChannel == null");
                return;
            }
            // mLog.Log(InternalLogLevel.DEBUG,$"MoonChannelHandler Send ManagedThreadId = {System.Threading.Thread.CurrentThread.ManagedThreadId}");

            IByteBuffer byteBuffer = Unpooled.Buffer(ushort.MaxValue);
            // byteBuffer.WriteShortLE(message.OpCode());
            byteBuffer.WriteUnsignedShortLE(message.OpCode());
            
            mSendStream.Position = 0L;
            mSendStream.SetLength(0L);
            
            ProtoBuf.Serializer.Serialize(mSendStream, message);
            mSendStream.Seek(0, SeekOrigin.Begin);
            
            short messageSize =  (short)(mSendStream.Length - mSendStream.Position);
            byteBuffer.WriteBytes(mSendStream.GetBuffer(),(int)mSendStream.Position,messageSize);
            
            // mLog.Log(InternalLogLevel.DEBUG,$"messageSize = {messageSize}");
            
            this.mChannel.WriteAndFlushAsync(byteBuffer);
        }

        #endregion
        
    }
}