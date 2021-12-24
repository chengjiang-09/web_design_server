import mysqlpool from "./db/createMysqlPool.js"

const init_searchbook_mysql = (res, req) => {
    let db = mysqlpool.getSqlPool()

    db.getConnection((err, connection) => {
        if (err) {
            console.log("数据库连接失败！");
        } else {
            connection.query("select * from books limit 50", (err, data) => {
                if (data) {
                    req.send({
                        status: 0,
                        msg: "所有书查询成功",
                        datas: data
                    })
                    db.end()
                } else {
                    req.send({
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
    init_searchbook_mysql,
}