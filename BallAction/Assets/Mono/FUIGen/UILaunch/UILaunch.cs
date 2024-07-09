/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace FUI
{
    public partial class UILaunch : GComponent
    {
        public GButton m_btnYooAsset;
        public GButton m_btnHotfix;
        public const string URL = "ui://3krv94p2hy1e1";

        public static UILaunch CreateInstance()
        {
            return (UILaunch)UIPackage.CreateObject("UILaunch", "UILaunch");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_btnYooAsset = (GButton)GetChildAt(2);
            m_btnHotfix = (GButton)GetChildAt(3);
        }
    }
}