import mysqlpool from "./db/createMysqlPool.js"
import redisconnection from "./db/createRedisPool.js"

const user_register_mysql = (res, req) => {
    let phone = res.body.phone
    let password1 = res.body.password1
    let password2 = res.body.password2

    if (verify_phone(phone) && verify_password(password1) && verify_password2(password1, password2)) {

        let db = mysqlpool.getSqlPool()

        db.getConnection((err, connection) => {
            if (err) {
                console.log("数据库连接失败！");
            } else {
                connection.query(`insert into user(phone,password,username) values(${phone},${password1},${phone})`, (err, data) => {
                    if (data.affectedRows === 1) {
                        let redisdb = redisconnection.getredisconnection()

                        redisdb.set(`${phone}_session`, `${phone}`)
                        redisdb.expire(`${phone}_session`, 300)

                        req.send({
                            status: 0,
                            msg: "注册成功",
                            datas: {
                                phone: phone,
                                username:phone,
                            }
                        })
                        db.end()
                    } else {
                        req.send({
                            status: 1,
                            msg: "注册失败"
                        })
                        db.end()
                    }
                })
            }
        })

    }
}

export default {
    user_register_mysql
}

//后端再次验证手机号是否合法，防止恶意请求
const verify_phone = phone => phone.match(/^1[3-9]\d{9}$/)

//后端再次验证密码是否合法
const verify_password = password1 => password1.match(/^[0-9a-zA-Z_-]{6,20}$/)

//后端再次验证二次密码是否合法
const verify_password2 = (password1, password2) => password1 === password2