using System.Collections.Generic;
using ProtoBuf;

namespace NetMessage{
    [ProtoContract]
    public partial class S2CErrorCode : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CErrorCode; }

        [ProtoMember(1, Name = @"code")]
        public int Code { get; set; }//错误码
    }

    [ProtoContract]
    public partial class C2SLogin : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SLogin; }

        [ProtoMember(1, Name = @"openid")]
        public string Openid { get; set; }//openid
    }

    [ProtoContract]
    public partial class S2CLogin : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CLogin; }

        [ProtoMember(1, Name = @"ok")]
        public bool Ok { get; set; }//是否登录成功
        [ProtoMember(2, Name = @"time")]
        public long Time { get; set; }//服务器当前时间ms
        [ProtoMember(3, Name = @"timezone")]
        public long Timezone { get; set; }//服务器当前时区
    }

    [ProtoContract]
    public partial class C2SItemList : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SItemList; }

    }

    [ProtoContract]
    public partial class S2CItemList : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CItemList; }

        [ProtoMember(11,Name = @"list")]
        public Dictionary<int,ItemData> List { get; set; }//道具列表
    }

    [ProtoContract]
    public partial class C2SUseItem : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SUseItem; }

        [ProtoMember(1, Name = @"id")]
        public int Id { get; set; }
        [ProtoMember(2, Name = @"count")]
        public long Count { get; set; }
    }

    [ProtoContract]
    public partial class S2CUpdateItem : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CUpdateItem; }

        [ProtoMember(1,Name = @"list")]
        public List<ItemData> List { get; set; }
    }

    [ProtoContract]
    public partial class C2SHello : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SHello; }

        [ProtoMember(1, Name = @"hello")]
        public string Hello { get; set; }
    }

    [ProtoContract]
    public partial class S2CWorld : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CWorld; }

        [ProtoMember(1, Name = @"world")]
        public string World { get; set; }
    }

    [ProtoContract]
    public partial class C2SPing : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SPing; }

    }

    [ProtoContract]
    public partial class S2CPing : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CPing; }

        [ProtoMember(1, Name = @"time")]
        public long Time { get; set; }
    }

    [ProtoContract]
    public partial class C2SDaily : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SDaily; }

    }

    [ProtoContract]
    public partial class S2CDaily : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CDaily; }

        [ProtoMember(1, Name = @"code")]
        public int Code { get; set; }
        [ProtoMember(2, Name = @"item")]
        public ItemData Item { get; set; }
    }

    [ProtoContract]
    public partial class C2STurntable : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2STurntable; }

    }

    [ProtoContract]
    public partial class S2CTurntable : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CTurntable; }

        [ProtoMember(1, Name = @"code")]
        public int Code { get; set; }
        [ProtoMember(2, Name = @"item")]
        public ItemData Item { get; set; }
    }

}

