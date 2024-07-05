/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace UIGm
{
    public partial class UIGm : GComponent
    {
        public GList m_list;
        public GComponent m_bar;
        public const string URL = "ui://3r0ytdi1hy1e0";

        public static UIGm CreateInstance()
        {
            return (UIGm)UIPackage.CreateObject("UIGm", "UIGm");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_list = (GList)GetChildAt(1);
            m_bar = (GComponent)GetChildAt(2);
        }
    }
}