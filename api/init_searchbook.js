import express from "express"
import init_searchbook_mysql from "../src/init_searchbook_mysql.js"

let init_searchbook = express.Router()

init_searchbook.get("/init_searchbook",(res,req) => {
    init_searchbook_mysql.init_searchbook_mysql(res,req)
})

export default {
    init_searchbook,
}