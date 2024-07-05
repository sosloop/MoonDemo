namespace Moon
{
    public static class BytesHelp
    {
        public static void WriteBigTo(this byte[] bytes, int offset, short num)
        {
            bytes[offset] = (byte)(num & 0xff);
            bytes[offset + 1] = (byte)((num >> 8) & 0xff);
        }
		
        public static void WriteBigTo(this byte[] bytes, int offset, ushort num)
        {
            WriteBigTo(bytes,offset,(short)num);
        }
    }
}