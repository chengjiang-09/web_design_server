import express from "express"
import delete_ordercar_mysql from "../src/delete_ordercar_mysql.js"

let delete_ordercar = express.Router()

delete_ordercar.get("/delete_ordercar",(req,res) => {
    delete_ordercar_mysql.delete_ordercar_mysql(req,res)
})

export default {
    delete_ordercar
}