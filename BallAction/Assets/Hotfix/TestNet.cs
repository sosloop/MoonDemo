using System;
using NetMessage;
using Newtonsoft.Json;
using UnityEngine;

namespace Hotfix
{
    public class TestNet:IDisposable
    {
        private TcpClient tcpClient1;

        public async void Run()
        {
            NetMgr.inst.SetConfig();
            tcpClient1?.Dispose();

            tcpClient1 = new TcpClient();
            Debug.Log("new tcpClient");
            await tcpClient1.ConnectAsync("127.0.0.1", 12345);
            Debug.Log($"ConnectAsync {tcpClient1.Connected}");
            var s2CLogin = await tcpClient1.Call<S2CLogin>(new C2SLogin(){Openid = "test1"});
            tcpClient1.Register<S2CPing>(x =>
            {
                Debug.Log($"S2CPing ManagedThreadId = {System.Threading.Thread.CurrentThread.ManagedThreadId}");
            });
            Debug.Log($"Call C2SLogin {JsonConvert.SerializeObject(s2CLogin)}");
        }

        public void Dispose()
        {
            Debug.Log("TestNet Dispose");
            tcpClient1?.Dispose();
        }
    }
}