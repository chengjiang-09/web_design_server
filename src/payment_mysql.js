import mysqlpool from "./db/createMysqlPool.js"

const payment_mysql = (req,res) => {
    let oneorderlist = req.body
    
    let db = mysqlpool.getSqlPool()

    db.getConnection((err,connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else{
            let sql = `insert into ordertable(orderid,ordertime,orderuser,totalprice,touser,toplace,orderstatus,totalnum,orderphone) values(${oneorderlist.orderid},"${oneorderlist.ordertime}",${oneorderlist.orderuser},${oneorderlist.totalprice},"${oneorderlist.touser}","${oneorderlist.toplace}",${oneorderlist.orderstatus},${oneorderlist.totalnum},${oneorderlist.orderphone})`

            connection.query(sql,(err,mysqlres) => {
                if(mysqlres.affectedRows === 1){
                    res.send({
                        status:0,
                        msg:"购买成功!",
                    })
                    db.end()
                }else{
                    res.send({
                        status:1,
                        msg:"购买失败!"
                    })
                    db.end()
                }
            })
        }
    })
}

export default {
    payment_mysql
}