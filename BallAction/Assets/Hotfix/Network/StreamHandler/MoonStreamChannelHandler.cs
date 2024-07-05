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
    public class MoonStreamChannelHandler : ChannelHandlerAdapter
    {
        
        private IChannelHandlerContext mChannel;
        private C2SPing c2SPing;
        
        private readonly IDispatchMessage mDispatchMessage;
        static readonly IInternalLogger mLog = InternalLoggerFactory.GetInstance(typeof(MoonStreamChannelHandler));
        private WritableByteBufferStream mWritableByteBufferStream;
        private ReadByteBufferStream mReadByteBufferStream;

        public MoonStreamChannelHandler(IDispatchMessage dispatchMessage)
        {
            // UnityEngine.Debug.Log($"MoonChannelHandler ManagedThreadId = {System.Threading.Thread.CurrentThread.ManagedThreadId}");
            mDispatchMessage = dispatchMessage;
            
        }
        
        public override void ChannelRegistered(IChannelHandlerContext context)
        {
            mChannel = context;

            // 待测试使用 池化 和 自定义 Stream
            mWritableByteBufferStream = new WritableByteBufferStream();
            mReadByteBufferStream = new ReadByteBufferStream();
            
            c2SPing = new C2SPing();
            base.ChannelRegistered(context);
        }

        public override void ChannelUnregistered(IChannelHandlerContext context)
        {
            mChannel = null;
            c2SPing = null;
            
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
            
            mReadByteBufferStream.Reset(byteBuffer);
            object deserialize = ProtoBuf.Serializer.Deserialize(type,mReadByteBufferStream);
            
            // UnityEngine.Debug.Log($"ChannelRead {type} | {Newtonsoft.Json.JsonConvert.SerializeObject(deserialize)} ManagedThreadId={Thread.CurrentThread.ManagedThreadId}");
            
            mDispatchMessage.Dispatch(cmd,(IMessage)deserialize);

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
            
            IByteBuffer byteBuffer = mChannel.Allocator.Buffer(ushort.MaxValue);
            
            byteBuffer.WriteUnsignedShortLE(message.OpCode());
            
            mWritableByteBufferStream.Reset(byteBuffer);
            
            ProtoBuf.Serializer.Serialize(mWritableByteBufferStream, message);
            
            // mLog.Log(InternalLogLevel.DEBUG,$"messageSize = {messageSize}");
            
            this.mChannel.WriteAndFlushAsync(byteBuffer);
        }

        #endregion
        
    }
}