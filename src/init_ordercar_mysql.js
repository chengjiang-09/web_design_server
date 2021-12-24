import mysqlpool from "./db/createMysqlPool.js"

let getmysqlresbook = function (mysqlres, connection, resdatas) {
    let promiselist = []
    mysqlres.forEach((obj) => {
        promiselist.push(new Promise((resolve, reject) => {
            connection.query(`select * from books where bookid=${obj.bookid}`, (err, mysqlresbook) => {
                if (mysqlresbook[0]) {
                    resolve(resdatas.push(mysqlresbook[0]))
                }
            })
        }))
    })

    return promiselist
}

const init_ordercar_mysql = (req, res) => {
    let phone = req.query.phone

    let db = mysqlpool.getSqlPool()

    db.getConnection((err, connection) => {
        if (err) {
            console.log("数据库连接失败！");
        } else {
            connection.query(`select * from ordercar where phone=${phone}`, (err, mysqlres) => {
                if (mysqlres[0]) {
                    let resdatas = []

                    let promiseList = getmysqlresbook(mysqlres, connection, resdatas)

                    Promise.all(promiseList).then(() => {
                        res.send({
                            status: 0,
                            msg: "所有书查询成功",
                            datas: resdatas
                        })
                        db.end()
                    })


                } else {
                    res.send({
                        status: 1,
                        msg: "所有书查询失败",
                    })
                    db.end()
                }
            })
        }
    })

}

export default {
    init_ordercar_mysql
}