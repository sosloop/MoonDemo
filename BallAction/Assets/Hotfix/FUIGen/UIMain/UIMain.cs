/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace UIMain
{
    public partial class UIMain : GComponent
    {
        public GButton m_btnGm;
        public const string URL = "ui://3zan8mh6hy1e0";

        public static UIMain CreateInstance()
        {
            return (UIMain)UIPackage.CreateObject("UIMain", "UIMain");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_btnGm = (GButton)GetChildAt(1);
        }
    }
}