import mysqlpool from "./db/createMysqlPool.js"

const init_orderform_mysql = (req,res) => {

    let phone = req.query.phone

    let db = mysqlpool.getSqlPool()

    db.getConnection((err,connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else{
            connection.query(`select * from ordertable where orderphone=${phone}`,(err,mysqlres) => {
                if(mysqlres[0]){
                    res.send({
                        status:0,
                        msg:"购物车查询成功",
                        datas:mysqlres
                    })
                    db.end()
                }else{
                    res.send({
                        status:1,
                        msg:"查询失败！"
                    })
                    db.end()
                }
            })
        }
    })

}

export default {
    init_orderform_mysql
}