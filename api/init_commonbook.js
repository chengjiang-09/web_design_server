import express from "express"
import init_commonbook_mysql from "../src/init_commonbook_mysql.js"

let init_commonbook = express.Router()

init_commonbook.get("/init_commonbook",(req,res) => {
    init_commonbook_mysql.init_commonbook_mysql(req,res)
})


export default {
    init_commonbook,
}