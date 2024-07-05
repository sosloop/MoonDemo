using System;
using System.IO;
using DotNetty.Buffers;

namespace Hotfix
{
    public class WritableByteBufferStream:Stream
    {
        public IByteBuffer mBuffer;

        public WritableByteBufferStream()
        {
        }

        public WritableByteBufferStream(IByteBuffer b)
        {
            Reset(b);
        }

        public void Reset(IByteBuffer b)
        {
            this.mBuffer = b;
        }

        public override bool CanRead => false;
        public override bool CanSeek => true;
        public override bool CanWrite => true;
        public override long Length => mBuffer.WriterIndex;

        public override long Position
        {
            get => mBuffer.WriterIndex;
            set => mBuffer.SetWriterIndex((int)value);
        }

        public override void Flush()
        {
            
        }

        public override int Read(byte[] buffer, int offset, int count)
        {
            throw new System.NotImplementedException();
        }

        public override long Seek(long offset, SeekOrigin origin)
        {
            if (origin == SeekOrigin.Current)
            {
                offset += this.Position;
            }
            else if (origin == SeekOrigin.End)
            {
                offset += this.Length;
            }

            this.Position = offset;
            return this.Position;
        }

        public override void SetLength(long value)
        {
            throw new System.NotImplementedException();
        }

        public override void Write(byte[] b, int offset, int count)
        {
            this.mBuffer.WriteBytes(b, offset, count);
        }

        
    }
}