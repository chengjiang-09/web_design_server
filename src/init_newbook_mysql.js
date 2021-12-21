import mysqlpool from "./db/createMysqlPool.js"

const init_newbook_mysql = (req,res) => {

    let db = mysqlpool.getSqlPool()

    db.getConnection((err,connection) => {
        if(err){
            console.log("数据库连接失败！");
        }else{
            connection.query("select * from books where bookstatus=0",(err,data) => {
                if(data[0]){
                    res.send({
                        status:0,
                        msg:"新书查询成功",
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
    init_newbook_mysql,
}