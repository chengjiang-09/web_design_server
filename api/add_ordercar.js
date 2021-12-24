import express from "express"
import add_ordercar_mysql from "../src/add_ordercar_mysql.js"

let add_ordercar = express.Router()

add_ordercar.get("/add_ordercar",(req,res) => {
    add_ordercar_mysql.add_ordercar_mysql(req,res)
})

export default {
    add_ordercar
}