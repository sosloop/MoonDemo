using System.Collections.Generic;
using ProtoBuf;

namespace NetMessage{
    [ProtoContract]
    public partial class C2SMailList : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SMailList; }

    }

    [ProtoContract]
    public partial class S2CMailList : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CMailList; }

        [ProtoMember(1,Name = @"mail_list")]
        public Dictionary<long,MailData> MailList { get; set; }
    }

    [ProtoContract]
    public partial class S2CUpdateMail : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CUpdateMail; }

        [ProtoMember(1,Name = @"mail_list")]
        public List<MailData> MailList { get; set; }
    }

    [ProtoContract]
    public partial class C2SMailRead : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SMailRead; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }
    }

    [ProtoContract]
    public partial class C2SMailLock : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SMailLock; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }
    }

    [ProtoContract]
    public partial class C2SMailReward : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SMailReward; }

        [ProtoMember(1,Name = @"mail_id_list")]
        public List<long> MailIdList { get; set; }
    }

    [ProtoContract]
    public partial class C2SMailMark : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SMailMark; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }
    }

    [ProtoContract]
    public partial class C2SMailDel : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SMailDel; }

        [ProtoMember(1,Name = @"mail_id_list")]
        public List<long> MailIdList { get; set; }
    }

    [ProtoContract]
    public partial class S2CMailDel : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CMailDel; }

        [ProtoMember(1,Name = @"mail_id_list")]
        public List<long> MailIdList { get; set; }
    }

}

