import express from "express"
import init_activebook_mysql from "../src/init_activebook_mysql.js"

let init_activebook = express.Router()

init_activebook.get("/init_activebook",(req,res) => {
    init_activebook_mysql.init_activebook_mysql(req,res)
})

export default {
    init_activebook,
}