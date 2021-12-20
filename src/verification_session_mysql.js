import redisPool from "./db/createRedisPool.js"
import mysqlpool from "./db/createMysqlPool.js"

const verification_session_mysql = (req, res) => {
    let redisDb = redisPool.getredisconnection()

    console.log(req.body.phone_Cookie);
    redisDb.get(`${req.body.phone_Cookie}_session`, (err, redisRes) => {
        if (err) {
            res.send({
                status: 1,
                msg: "未登录"
            })
        } else {
            let db = mysqlpool.getSqlPool()
            db.getConnection((err,connection) => {
                if(err){
                    console.log("数据库连接失败！");
                }else{
                    connection.query(`select * from user where phone=${redisRes}`,(req,mysqlRes) => {
                        
                    })
                }
            })
        }
    })
}

export default {
    verification_session_mysql,
}