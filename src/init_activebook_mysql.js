import mysqlpool from "./db/createMysqlPool.js"

const init_activebook_mysql = (req,res) => {

    let db = mysqlpool.getSqlPool()

    db.getConnection((err,connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else{
            connection.query("select * from books where bookstatus=2",(err,data) => {
                if(data[0]){
                    res.send({
                        status:0,
                        msg:"畅销书查询成功",
                        datas:data
                    })
                }else{
                    res.send({
                        status:1,
                        msg:"查询失败！"
                    })
                }
            })
        }
    })
}

export default {
    init_activebook_mysql
}