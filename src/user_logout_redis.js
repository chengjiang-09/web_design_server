import redisconnection from "./db/createRedisPool.js"

const user_logout_redis = (req,res) => {
    let phone = req.query.phone

    let redisdb = redisconnection.getredisconnection()

    try{
        redisdb.del(`${phone}_session`)

        res.send({
            status:0,
            msg:"账户注销成功！"
        })
    }catch(e){
        res.send({
            status:1,
            msg:"账户注销失败！"
        })
    }

    
}

export default {
    user_logout_redis
}