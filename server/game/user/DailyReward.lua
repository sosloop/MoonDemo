local moon = require("moon")
local common = require "common"
local GameCfg = common.GameCfg --游戏配置
local ErrorCode = common.ErrorCode --逻辑错误码
local CmdCode = common.CmdCode --客户端通信消息码
local datetime = require("moon.datetime")

---@type user_context
local context = ...
local scripts = context.scripts ---方便访问同服务的其它lua模块

---@class DailyReward
local DailyReward = {}

---这里初始化本模块相关的数据
function DailyReward.Init()

end

---这里可以访问其它模块,做更多初始化工作
function DailyReward.Start()

end

function DailyReward.OnHour()
    -- body
end

function DailyReward.OnDay()
    -- body
end

---注册客户端消息处理函数
---@param req C2SDaily
function DailyReward.C2SDaily(req)
    local data = scripts.UserModel.MutGet()
    if not data.dailycount then
        data.dailycount = 0
    end

    if not data.dailytime then
        data.dailytime = 0
    end

    if datetime.is_same_day(data.dailytime,moon.time()) then
        moon.error("tbdailyreward received", data.dailycount)
        context.S2C(CmdCode.S2CDaily, {code = ErrorCode.DailyReceived})
        return ErrorCode.None
    end

    local tbcnt = #GameCfg.tbdailyreward
    if data.dailycount > tbcnt then
        moon.error("tbdailyreward cnt max", data.dailycount)
        context.S2C(CmdCode.S2CDaily, {code = ErrorCode.DailyConfMax})
        return ErrorCode.None
    end

    data.dailycount = data.dailycount + 1
    data.dailytime = moon.time()

    context.S2C(CmdCode.S2CDaily, {code = ErrorCode.None}) ---给客户端发送消息

    return ErrorCode.None
end

return DailyReward