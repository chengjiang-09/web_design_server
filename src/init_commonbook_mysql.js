import mysqlpool from "./db/createMysqlPool.js"

const init_commonbook_mysql = (req, res) => {

    let db = mysqlpool.getSqlPool()

    db.getConnection((err, connection) => {
        if (err) {
            console.log("数据库连接失败！");
        } else {
            connection.query(`select * from books`, (err, data) => {
                if (data) {
                    res.send({
                        status: 0,
                        msg: "普通书查询成功",
                        datas: data
                    })
                    db.end()
                } else {
                    res.send({
                        status: 1,
                        msg: "查询失败！"
                    })
                    db.end()
                }
            })
        }
    })
}

export default {
    init_commonbook_mysql,
}