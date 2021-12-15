import mysql from "mysql"

const getSqlPool = () => {
    return mysql.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "",
        port: 3306,
        database: "web_bookstore"
    })
}

export default {
    getSqlPool,
}