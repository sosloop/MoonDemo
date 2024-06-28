local moon = require("moon")
local json = require("json")
local redisd = require("redisd")
---@type sqlclient
local pgsql = require("sqldriver")

local schema = require("schema")

local jencode = json.encode

local jdecode = json.decode

local redis_call = redisd.call

local redis_send = redisd.send

local _M = {}

function _M.loadallopenid(addr_db)
    local res, err = redis_call(addr_db, "hgetall", "openidmap")
    if res == false then
        error("loadallopenid failed:" .. tostring(err))
    end
    return res
end

function _M.loadserverdata(addr_db)
    local res, err = redis_call(addr_db, "get", "serverdata")
    if res == false then
        error("loadserverdata failed:" .. tostring(err))
    end
    return res
end

function _M.saveserverdata(addr_db, data)
    local res, err = redis_call(addr_db, "set", "serverdata", data)
    if res == false then
        error("loadserverdata failed:" .. tostring(err))
    end
    return res
end

function _M.queryuserid(addr_db, openid)
    local res, err = redis_call(addr_db, "hget", "openidmap", openid)
    if res == false then
        error("queryuserid failed:" .. tostring(err))
    end

    if res then
        return math.tointeger(res)
    end

    return res
end

function _M.insertuserid(addr_db, openid, userid)
    return redis_call(addr_db, "hset", "openidmap", openid, userid)
end

function _M.loaduser(addr_db, userid)
    local res, err = redis_call(addr_db, "hget", "usermap", userid)
    if res == false then
        error("loaduser failed:" .. tostring(err))
    end

    if res then
        res = jdecode(res)
    end

    return res
end

function _M.saveuser(addr_db, userid, data)
    if moon.DEBUG() then
        schema.validate("UserData", data)
    end

    data = jencode(data)
    redis_send(addr_db, "hset", "usermap", userid, data)
end


function _M.LoadUserMail(addr_db, uid)
    local res, err = redis_call(addr_db, "HGETALL", "mail_"..uid)
    if err then
        moon.error("LoadUserMail failed ", uid, err)
        return false
    end
    local maillist = {}
    assert(#res%2==0, tostring(uid))
    for i=1,#res,2 do
        local mail = json.decode(res[i+1])
        maillist[tonumber(res[i])] = mail
    end
    return maillist
end

---@param addr_db integer
---@param uid integer
---@param mailId integer
---@param mail MailData
function _M.SaveUserMail(addr_db, uid, mailId, mail)
    redis_send(addr_db, "HSET", "mail_"..uid, mailId, json.encode(mail))
end

---@param addr_db integer
---@param uid integer
---@param mailIdList integer[]
function _M.DelUserMail(addr_db, uid, mailIdList)
    redis_send(addr_db, "HDEL", "mail_"..uid, table.unpack(mailIdList))
end

return _M
