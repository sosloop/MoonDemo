using System.Collections.Generic;
using ProtoBuf;

namespace NetMessage{
    [ProtoContract]
    public partial class C2SMatch : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SMatch; }

    }

    [ProtoContract]
    public partial class S2CMatch : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CMatch; }

        [ProtoMember(1, Name = @"res")]
        public bool Res { get; set; }
    }

    [ProtoContract]
    public partial class S2CMatchSuccess : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CMatchSuccess; }

    }

    [ProtoContract]
    public partial class S2CGameOver : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CGameOver; }

        [ProtoMember(1, Name = @"score")]
        public long Score { get; set; }
    }

}

