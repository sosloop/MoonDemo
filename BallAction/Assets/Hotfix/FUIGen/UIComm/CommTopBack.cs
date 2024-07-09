/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace FUI
{
    public partial class CommTopBack : GComponent
    {
        public GGraph m_bg;
        public GButton m_btnBack;
        public GTextField m_txtTitle;
        public const string URL = "ui://34nlfo3ahy1e1";

        public static CommTopBack CreateInstance()
        {
            return (CommTopBack)UIPackage.CreateObject("UIComm", "CommTopBack");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_bg = (GGraph)GetChildAt(0);
            m_btnBack = (GButton)GetChildAt(1);
            m_txtTitle = (GTextField)GetChildAt(2);
        }
    }
}