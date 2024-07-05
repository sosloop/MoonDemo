using System.Collections.Generic;
using FairyGUI;
using YooAsset;

namespace Hotfix
{
    public class FUIPkgMgr
    {
        private static FUIPkgMgr _inst;
        public static FUIPkgMgr inst
        {
            get
            {
                if (_inst == null)
                    _inst = new FUIPkgMgr();
                return _inst;
            }
        }
        // 资源句柄列表
        private List<AssetHandle> _handles = new List<AssetHandle>(100);

        public void AddPkg(string pkg)
        {
            // 执行FairyGUI的添加包函数
            UIPackage.AddPackage(pkg, LoadFunc);
        }

        // 加载方法
        private object LoadFunc(string name, string extension, System.Type type, out DestroyMethod method)
        {
            method = DestroyMethod.None; //注意：这里一定要设置为None
            string location = $"Assets/Bundles/FUI/{name}{extension}";
            var package = YooAssets.GetPackage("DefaultPackage");
            var handle = package.LoadAssetSync(location, type);
            _handles.Add(handle);
            return handle.AssetObject;
        }


        // 释放资源句柄列表
        private void ReleaseHandles()
        {
            foreach (var handle in _handles)
            {
                handle.Release();
            }

            _handles.Clear();
        }
    }
}