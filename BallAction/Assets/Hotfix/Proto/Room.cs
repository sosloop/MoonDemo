using System.Collections.Generic;
using ProtoBuf;

namespace NetMessage{
    [ProtoContract]
    public partial class C2SEnterRoom : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SEnterRoom; }

        [ProtoMember(1, Name = @"name")]
        public string Name { get; set; }//玩家名字
    }

    [ProtoContract]
    public partial class S2CEnterRoom : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CEnterRoom; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }//对象唯一ID
        [ProtoMember(2, Name = @"time")]
        public long Time { get; set; }//当前服务器时间ms
    }

    [ProtoContract]
    public partial class C2SMove : AProto,IMessage {

        public ushort OpCode() { return CmdCode.C2SMove; }

        [ProtoMember(1, Name = @"x")]
        public float X { get; set; }//方向
        [ProtoMember(2, Name = @"y")]
        public float Y { get; set; }
    }

    [ProtoContract]
    public partial class S2CMove : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CMove; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }//对象唯一ID
        [ProtoMember(2, Name = @"x")]
        public float X { get; set; }//当前位置x
        [ProtoMember(3, Name = @"y")]
        public float Y { get; set; }//当前位置y
        [ProtoMember(4, Name = @"dirx")]
        public float Dirx { get; set; }//当前方向x
        [ProtoMember(5, Name = @"diry")]
        public float Diry { get; set; }//当前方向y
        [ProtoMember(6, Name = @"movetime")]
        public long Movetime { get; set; }//当前服务器时间ms
    }

    [ProtoContract]
    public partial class S2CEnterView : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CEnterView; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }
        [ProtoMember(2, Name = @"x")]
        public float X { get; set; }
        [ProtoMember(3, Name = @"y")]
        public float Y { get; set; }
        [ProtoMember(4, Name = @"radius")]
        public float Radius { get; set; }
        [ProtoMember(5, Name = @"spriteid")]
        public long Spriteid { get; set; }
        [ProtoMember(6, Name = @"speed")]
        public float Speed { get; set; }
        [ProtoMember(7, Name = @"dir")]
        public Vector2 Dir { get; set; }
        [ProtoMember(8, Name = @"name")]
        public string Name { get; set; }
        [ProtoMember(9, Name = @"movetime")]
        public long Movetime { get; set; }
    }

    [ProtoContract]
    public partial class S2CLeaveView : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CLeaveView; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }//对象唯一ID
    }

    [ProtoContract]
    public partial class S2CUpdateRadius : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CUpdateRadius; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }
        [ProtoMember(2, Name = @"radius")]
        public float Radius { get; set; }
    }

    [ProtoContract]
    public partial class S2CDead : AProto,IMessage {

        public ushort OpCode() { return CmdCode.S2CDead; }

        [ProtoMember(1, Name = @"id")]
        public long Id { get; set; }
    }

}

