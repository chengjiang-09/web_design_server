import express from "express"
import init_ordercar_mysql from "../src/init_ordercar_mysql.js"

let init_ordercar = express.Router()

init_ordercar.get("/init_ordercar",(req,res) => {
    init_ordercar_mysql.init_ordercar_mysql(req,res)
})

export default {
    init_ordercar,
}