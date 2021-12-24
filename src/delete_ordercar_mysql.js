import mysqlpool from "./db/createMysqlPool.js"

const delete_ordercar_mysql = (req,res) => {

    let bookid = req.query.bookid
    let phone = req.query.phone

    let db = mysqlpool.getSqlPool()

    db.getConnection((err, connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else{
            connection.query(`delete from ordercar where phone=${phone} and bookid=${bookid}`,(err,delmysqlres) => {
                if(delmysqlres.affectedRows === 1){
                    res.send({
                        status:0,
                        msg:"移除成功!",
                    })
                    db.end()
                }else{
                    res.send({
                        status:1,
                        msg:"移除失败!"
                    })
                    db.end()
                }
            })
        }
    })
}

export default {
    delete_ordercar_mysql
}