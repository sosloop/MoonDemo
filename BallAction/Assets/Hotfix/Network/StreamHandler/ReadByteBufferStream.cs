using System.IO;
using DotNetty.Buffers;
using UnityEngine;

namespace Hotfix
{
    public class ReadByteBufferStream : Stream
    {
        public IByteBuffer mBuffer;

        public ReadByteBufferStream()
        {
        }

        public ReadByteBufferStream(IByteBuffer b)
        {
            Reset(b);
        }

        public void Reset(IByteBuffer b)
        {
            this.mBuffer = b;
        }

        public override bool CanRead => true;
        public override bool CanSeek => true;
        public override bool CanWrite => false;
        public override long Length => mBuffer.ReadableBytes;

        public override long Position
        {
            get => mBuffer.ReaderIndex;
            set => mBuffer.SetReaderIndex((int) value);
        }

        public override void Flush()
        {
        }

        public override int Read(byte[] buffer, int offset, int count)
        {
            int readableBytes = mBuffer.ReadableBytes;
            int length = System.Math.Min(count, readableBytes);

            mBuffer.ReadBytes(buffer, offset, length);
            return length;
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
            throw new System.NotImplementedException();
        }
    }
}