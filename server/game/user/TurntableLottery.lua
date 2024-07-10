local moon = require("moon")
local common = require "common"
local GameCfg = common.GameCfg --游戏配置
local ErrorCode = common.ErrorCode --逻辑错误码
local CmdCode = common.CmdCode --客户端通信消息码

---@type user_context
local context = ...
local scripts = context.scripts ---方便访问同服务的其它lua模块

---@class TurntableLottery
local TurntableLottery = {}

---这里初始化本模块相关的数据
function TurntableLottery.Init()

end

---这里可以访问其它模块,做更多初始化工作
function TurntableLottery.Start()

end

function TurntableLottery.OnHour()
    -- body
end

function TurntableLottery.OnDay()
    -- body
end

---注册客户端消息处理函数
---@param req C2STurntable
function TurntableLottery.C2STurntable(req)
    local random = math.random(0,10000)
    local probability = 0
    for i = 1,#GameCfg.tbturntablelottery do
        local cfg = GameCfg.tbturntablelottery[i]
        probability = probability + cfg.Probability
        if random <= probability then
            context.S2C(CmdCode.S2CTurntable, {code = ErrorCode.None}) 
            break
        end
    end

end

return TurntableLottery