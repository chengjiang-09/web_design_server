import mysqlpool from "./db/createMysqlPool.js"

const add_ordercar_mysql = (req,res) => {
    let bookid = req.query.bookid
    let phone = req.query.phone

    let db = mysqlpool.getSqlPool()

    console.log(bookid);
    console.log(phone);

    db.getConnection((err,connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else{
            connection.query(`select * from ordercar where bookid=${bookid} and phone=${phone}`,(err,bookin) => {
                if(bookin[0]){
                    res.send({
                        status:0,
                        msg:"已加入购物车!",
                    })
                    db.end()
                }else{
                    connection.query(`insert into ordercar(phone,bookid) values(${phone},${bookid})`,(err,mysqlres) => {
                        if(mysqlres.affectedRows === 1){
                            res.send({
                                status:0,
                                msg:"图书添加成功!",
                            })
                            db.end()
                        }else{
                            res.send({
                                status:1,
                                msg:"图书添加失败!"
                            })
                            db.end()
                        }
                    })
                }
            })
        }
    })
}

export default {
    add_ordercar_mysql
}