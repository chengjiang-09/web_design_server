import mysqlpool from "./db/createMysqlPool.js"

const to_book_mysql = (req,res) => {
    let id = req.params.id

    let db = mysqlpool.getSqlPool()

    db.getConnection((err,connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else {
            connection.query(`select * from books where bookid=${id}`,(err,data) => {
                if(data[0]){
                    let resdata = {
                        title: data[0].bookname,
                        picUrl:`http://46ee815878.qicp.vip${data[0].bookpic}/${data[0].picname}`,
                        bookname: data[0].bookname,
                        author: data[0].author,
                        bookprice: data[0].bookprice,
                        booknum :data[0].booknum,
                        content : data[0].content
                    }

                    res.render("onebook",resdata)
                }
            })
        }
    })
}

export default {
    to_book_mysql,
}