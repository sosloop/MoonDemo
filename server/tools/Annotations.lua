--- <auto-generated>
---     Generated by the moonfly tool.  DO NOT EDIT!
--- </auto-generated>


---@class AuthUser
---@field public addr_user integer @玩家服务address
---@field public openid string @
---@field public uid integer @玩家uid
---@field public logouttime integer @玩家登出时间,0表示在线
---@field public online boolean @@是否在线


---@class UserData
---@field public openid string @
---@field public uid integer @玩家uid
---@field public name string @玩家名字
---@field public level integer @玩家等级
---@field public score integer @玩家分数
---@field public logintime integer @玩家上线时间
---@field public diamond integer @宝石
---@field public gold integer @金币
---@field public chapterid integer @当前章节ID
---@field public exp integer @当前经验
---@field public dailytime integer @签到时间
---@field public dailycount integer @签到天数
---@field public itemlist table<integer, ItemData> @道具列表


---@class C2SMatch


---@class S2CMatch
---@field public res boolean


---@class S2CMatchSuccess


---@class S2CGameOver
---@field public score integer


---@class Vector2
---@field public x number
---@field public y number


---@class ItemData
---@field public id integer @道具id
---@field public count integer @道具数量


---@class MailData
---@field public id integer @邮件唯一ID
---@field public mail_key string @邮件配置key, 因为要在代码里面写死，推荐用有意义的字符串做key
---@field public ctime integer @邮件创建时间
---@field public flag integer @1<<0:是否可领取 1<<1:是否只展示 1<<2:是否已读 1<<3:是否锁定
---@field public rewards ItemData[] @可领取奖励列表 或者 奖励展示列表
---@field public trace integer @追踪奖励邮件的来源
---@field public parmas string @json格式邮件自定义参数


---@class C2SMailList


---@class S2CMailList
---@field public mail_list table<integer, MailData>


---@class S2CUpdateMail
---@field public mail_list MailData[]


---@class C2SMailRead
---@field public id integer


---@class C2SMailLock
---@field public id integer


---@class C2SMailReward
---@field public mail_id_list integer[]


---@class C2SMailMark
---@field public id integer


---@class C2SMailDel
---@field public mail_id_list integer[]


---@class S2CMailDel
---@field public mail_id_list integer[]


---@class C2SEnterRoom
---@field public name string @玩家名字


---@class S2CEnterRoom
---@field public id integer @对象唯一ID
---@field public time integer @当前服务器时间ms


---@class C2SMove
---@field public x number @方向
---@field public y number


---@class S2CMove
---@field public id integer @对象唯一ID
---@field public x number @当前位置x
---@field public y number @当前位置y
---@field public dirx number @当前方向x
---@field public diry number @当前方向y
---@field public movetime integer @当前服务器时间ms


---@class S2CEnterView
---@field public id integer
---@field public x number
---@field public y number
---@field public radius number
---@field public spriteid integer
---@field public speed number
---@field public dir Vector2
---@field public name string
---@field public movetime integer


---@class S2CLeaveView
---@field public id integer @对象唯一ID


---@class S2CUpdateRadius
---@field public id integer
---@field public radius number


---@class S2CDead
---@field public id integer


---@class S2CErrorCode
---@field public code integer @错误码


---@class C2SLogin
---@field public openid string @openid


---@class S2CLogin
---@field public ok boolean @是否登录成功
---@field public time integer @服务器当前时间ms
---@field public timezone integer @服务器当前时区


---@class C2SItemList


---@class S2CItemList
---@field public list table<integer, ItemData> @道具列表


---@class C2SUseItem
---@field public id integer
---@field public count integer


---@class S2CUpdateItem
---@field public list ItemData[]


---@class C2SHello
---@field public hello string


---@class S2CWorld
---@field public world string


---@class C2SPing


---@class S2CPing
---@field public time integer


---@class C2SDaily


---@class S2CDaily
---@field public code integer
---@field public item ItemData


---@class C2STurntable


---@class S2CTurntable
---@field public code integer
---@field public item ItemData






---@class auth_scripts
---@field Auth Auth


---@class center_scripts
---@field Center Center


---@class gate_scripts
---@field Gate Gate


---@class mail_scripts
---@field Mail Mail


---@class node_scripts
---@field Console Console


---@class room_scripts
---@field Aoi Aoi
---@field Room Room


---@class user_scripts
---@field DailyReward DailyReward
---@field Hello Hello
---@field Item Item
---@field TurntableLottery TurntableLottery
---@field User User
---@field UserModel UserModel
