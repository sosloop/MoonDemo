using System;
using System.Collections;
using System.Reflection;
using ET;
using FairyGUI;
using FUI;
using UnityEngine;
using YooAsset;

namespace Mono
{
    public class Init : MonoBehaviour
    {
        public static Init Inst;
        private const string PkgUILaunch = "FUI/UILaunch";
        private UILaunch uiLaunch;
        private Assembly hotfixAssembly;
        public readonly ThreadSynchronizationContext ThreadSynchronizationContext = new();

        void Awake()
        {
            Inst = this;
            Application.targetFrameRate = 30;

            GRoot.inst.SetContentScaleFactor(720, 1280);
            UIConfig.defaultFont = "AlibabaPuHuiTi-3-45-Light";

            UIPackage.AddPackage(PkgUILaunch);

            UILaunchBinder.BindAll();
            uiLaunch = UILaunch.CreateInstance();
            uiLaunch.MakeFullScreen();
            uiLaunch.m_btnYooAsset.onClick.Set(OnYooAssetClick);
            uiLaunch.m_btnHotfix.onClick.Set(OnHotFixClick);
            GRoot.inst.AddChild(uiLaunch);

            DontDestroyOnLoad(this.gameObject);
        }

        void Update()
        {
            this.ThreadSynchronizationContext.Update();
        }

        void Destroy()
        {
            Inst = null;
            YooAssets.Destroy();
        }

        void OnYooAssetClick()
        {
            StartCoroutine(InitializeYooAsset());
        }

        void OnHotFixClick()
        {
            uiLaunch.Dispose();
            HotFix();
        }

        private IEnumerator InitializeYooAsset()
        {
            YooAssets.Initialize();
            ResourcePackage package = YooAssets.CreatePackage("DefaultPackage");
            YooAssets.SetDefaultPackage(package);
#if UNITY_EDITOR
            var initParameters = new EditorSimulateModeParameters();
            var simulateManifestFilePath = EditorSimulateModeHelper.SimulateBuild(EDefaultBuildPipeline.BuiltinBuildPipeline, "DefaultPackage");
            initParameters.SimulateManifestFilePath = simulateManifestFilePath;
            yield return package.InitializeAsync(initParameters);
#else
        var initParameters = new OfflinePlayModeParameters();
        yield return package.InitializeAsync(initParameters);
#endif
        }

        void HotFix()
        {
            Assembly[] assemblies = AppDomain.CurrentDomain.GetAssemblies();
            foreach (Assembly ass in assemblies)
            {
                string className = ass.GetName().Name;
                if (className == "Moon.Hotfix")
                {
                    hotfixAssembly = ass;
                    IStaticMethod start = new StaticMethod(hotfixAssembly, "Hotfix.Entry", "Start");
                    start.Run();
                    break;
                }
            }
        }


        private void OnDestroy()
        {
            IStaticMethod start = new StaticMethod(hotfixAssembly, "Hotfix.Entry", "Destroy");
            start.Run();
        }
    }
}