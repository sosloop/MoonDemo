namespace Hotfix
{
    public interface IDispatchMessage
    {
        void Dispatch(ushort cmd, IMessage msg);
    }
}