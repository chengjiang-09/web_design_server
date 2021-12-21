import express from "express"
import init_newbook_mysql from "../src/init_newbook_mysql.js"

let init_newbook = express.Router()

init_newbook.get("/init_newbook",(req,res) => {
    init_newbook_mysql.init_newbook_mysql(req,res)
})

export default {
    init_newbook
}