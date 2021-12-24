import mysqlpool from "./db/createMysqlPool.js"

const searchBooks_mysql = (req,res) => {

    let bookname = req.query.bookname

    console.log(bookname);

    let db = mysqlpool.getSqlPool()

    db.getConnection((err,connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else{
            if(!bookname){
                connection.query("select * from books",(err,mysqlres) => {
                    if(mysqlres[0]){
                        res.send({
                            status:0,
                            msg:"查询成功！",
                            datas:mysqlres
                        })
                        db.end()
                    }else{
                        res.send({
                            status:1,
                            msg:"查询失败！",
                        })
                        db.end()
                    }
                })
            }else{
                connection.query(`select * from books where bookname="${bookname}"`,(err,mysqlres) => {
                    if(mysqlres[0]){
                        res.send({
                            status:0,
                            msg:"查询成功！",
                            datas:mysqlres
                        })
                        db.end()
                    }else{
                        res.send({
                            status:1,
                            msg:"查询失败！",
                        })
                        db.end()
                    }
                })
            }
        }
    })

}

export default {
    searchBooks_mysql
}