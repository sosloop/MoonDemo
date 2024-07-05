
using FairyGUI;
using NetMessage;
using Newtonsoft.Json;
using UnityEngine;

namespace Hotfix
{
    public static class Entry
    {
        private static TestNet _testNet;

        public static void Start()
        {
            FUIPkgMgr.inst.AddPkg("UIComm");
            FUIPkgMgr.inst.AddPkg("UIMain");
            FUIPkgMgr.inst.AddPkg("UIGm");
            
            UIComm.UICommBinder.BindAll();
            UIGm.UIGmBinder.BindAll();
            UIMain.UIMainBinder.BindAll();

            var uiMain = UIMain.UIMain.CreateInstance();
            uiMain.MakeFullScreen();
            uiMain.m_btnGm.onClick.Set(()=>
            {
                // var uiGm = UIGm.UIGm.CreateInstance();
                // uiGm.MakeFullScreen();
                // GRoot.inst.AddChild(uiGm); 
                _testNet = new TestNet();
                _testNet.Run();
            });
            GRoot.inst.AddChild(uiMain);
        }

        public static void Destroy()
        {
            _testNet?.Dispose();
        }
    }
}