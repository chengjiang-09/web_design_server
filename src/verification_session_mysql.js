import redisPool from "./db/createRedisPool.js"
import mysqlpool from "./db/createMysqlPool.js"

const verification_session_mysql = (req, res) => {
    let redisDb = redisPool.getredisconnection()

    redisDb.get(`${req.body.phone_Cookie}_session`, (err, redisRes) => {
        if (redisRes) {
            let db = mysqlpool.getSqlPool()
            db.getConnection((err,connection) => {
                if(err){
                    console.log("数据库连接失败！");
                }else{
                    connection.query(`select * from user where phone=${redisRes}`,(err,mysqlRes) => {
                        if(mysqlRes[0]){
                            res.send({
                                status:0,
                                msg:"已登录",
                                datas:{
                                    phone:mysqlRes[0].phone,
                                    username:mysqlRes[0].username,
                                }
                            })
                            let redisDb2 = redisPool.getredisconnection()
                            redisDb2.expire(`${redisRes}_session`, 300)
                        }else{
                            res.send({
                                status:1,
                                msg:"未登录"
                            })
                        }
                    })
                }
            })
        } else {
            res.send({
                status: 1,
                msg: "未登录"
            })
        }
    })
}

export default {
    verification_session_mysql,
}