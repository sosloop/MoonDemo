/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

using FairyGUI;
using FairyGUI.Utils;

namespace UIComm
{
    public partial class CommBg : GComponent
    {
        public GGraph m_bg;
        public const string URL = "ui://34nlfo3ahy1e2";

        public static CommBg CreateInstance()
        {
            return (CommBg)UIPackage.CreateObject("UIComm", "CommBg");
        }

        public override void ConstructFromXML(XML xml)
        {
            base.ConstructFromXML(xml);

            m_bg = (GGraph)GetChildAt(0);
        }
    }
}