using System;
using DotNetty.Unity;

namespace Hotfix
{
    public class NetMgr
    {
        private static NetMgr _inst;

        public static NetMgr inst
        {
            get
            {
                if (_inst == null)
                    _inst = new NetMgr();
                return _inst;
            }
        }


        public void SetConfig()
        {
            UnityLoggerFactory.Default.Level = Level.DEBUG;
            //Set the following properties to optimize performance and GC
            if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("io.netty.leakDetection.level")))
                Environment.SetEnvironmentVariable("io.netty.leakDetection.level", "Disabled");
            if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("io.netty.noPreferDirect")))
                Environment.SetEnvironmentVariable("io.netty.noPreferDirect", "false");
            if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("io.netty.allocator.maxOrder")))
                Environment.SetEnvironmentVariable("io.netty.allocator.maxOrder", "9");
            if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("io.netty.recycler.ratio")))
                Environment.SetEnvironmentVariable("io.netty.recycler.ratio", "0");
            if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("io.netty.allocator.pageSize")))
                Environment.SetEnvironmentVariable("io.netty.allocator.pageSize", "8192");
            if (string.IsNullOrEmpty(Environment.GetEnvironmentVariable("io.netty.allocator.type")))
                Environment.SetEnvironmentVariable("io.netty.allocator.type", "pooled");
            
        }
    }
}