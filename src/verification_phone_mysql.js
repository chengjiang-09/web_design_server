import mysqlpool from "./createMysqlPool.js"

const verification_phone_mysql = (res,req) => {
    let db = mysqlpool.getSqlPool()

    db.getConnection((err, connection) => {
        if (err) {
            console.log("数据库连接失败！");
        } else {
            console.log("数据库连接成功！");
            connection.query(`select * from user where phone=${res.body.phone}`, (err, data) => {
                if(data.length == 0){
                    console.log(data);
                    req.send({
                        status:0,
                    })
                    db.end()
                }else{
                    req.send({
                        status:1,
                        msg:"该手机号已注册！",
                    })
                    db.end()
                }
            })
        }
    })
}

export default {
    verification_phone_mysql,
}