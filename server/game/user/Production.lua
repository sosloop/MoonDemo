local moon = require "moon"
local common = require "common"
local GameCfg = common.GameCfg
local ErrorCode = common.ErrorCode
local CmdCode = common.CmdCode
local GameDef= common.GameDef
local uuid = require "uuid"

---@type user_context
local context = ...
local scripts = context.scripts

---@class Production
local Production = {}

---这里初始化本模块相关的数据
function Production.Init()
    local DB = scripts.UserModel.Get()
    if not DB.productionlist then
        DB.productionlist = {
        }
    end
end

function Production.Start()
end

function Production.BuildProduction(cfgid)
    local time = moon.time()
    local item = {targettime=time+3600,starttime=time,productionstate=0,configid=cfgid}
    return item
end

function Production.C2SStartProduction(req)
    local cfgid = req.configid
    local DB = scripts.UserModel.MutGet()
    local item = DB.productionlist[cfgid]
    if not item then
        local production = Production.BuildProduction(cfgid)
        DB.productionlist[cfgid] = production

        context.S2C(CmdCode.S2CStartProduction, {productiondata = production})
        return
    end

    return ErrorCode.ProductionExist
end

function Production.C2SReceiveProduction(req)
    local cfgid = req.configid

    local DB = scripts.UserModel.MutGet()
    local item = DB.productionlist[cfgid]
    if not item then
        return ErrorCode.ProductionNotExist
    end

    DB.productionlist[cfgid] = nil
    context.S2C(CmdCode.S2CReceiveProduction, {productiondata = item})
end

return Production