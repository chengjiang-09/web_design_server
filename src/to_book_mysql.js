import mysqlpool from "./db/createMysqlPool.js"

const to_book_mysql = (req,res) => {
    if(!req.query.bookid){
        return res.send({
            status:1,
            msg:"404",
        })
    }

    let id = req.query.bookid

    let db = mysqlpool.getSqlPool()

    db.getConnection((err,connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else {
            connection.query(`select * from books where bookid=${id}`,(err,data) => {
                if(data[0]){
                    res.send({
                        status:0,
                        msg:"查询成功！",
                        datas:data
                    })
                    db.end()
                }else{
                    db.end()
                    return res.send({
                        status:1,
                        msg:"404",
                    })
                }
            })
        }
    })
}

export default {
    to_book_mysql,
}