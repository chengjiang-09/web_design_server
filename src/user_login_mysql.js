import mysqlpool from "./db/createMysqlPool.js"
import redisconnection from "./db/createRedisPool.js"

const user_login_mysql = (res, req) => {
    let phone = res.body.phone
    let password = res.body.password

    let db = mysqlpool.getSqlPool()

    db.getConnection((err, connection) => {
        if (err) {
            console.log("数据库连接失败！");
        } else {
            connection.query(`select * from user where phone=${phone}`, (err, data) => {
                if (data.length == 1) {
                    console.log(data);
                    if (password === data[0].password) {

                        let redisdb = redisconnection.getredisconnection()

                        redisdb.set(`${phone}_session`, `${phone}`)
                        redisdb.expire(`${phone}_session`, 300)

                        req.send({
                            status: 0,
                            msg: "登录成功",
                            datas: {
                                phone: data[0].phone,
                                username: data[0].username,
                            }
                        })
                        db.end()
                    }else{
                        req.send({
                            status:1,
                            msg:"账号或密码错误！"
                        })
                        db.end()
                    }
                }else{
                    req.send({
                        status:1,
                        msg:"账号或密码错误！"
                    })
                    db.end()
                }
            })
        }
    })

}

export default {
    user_login_mysql
}