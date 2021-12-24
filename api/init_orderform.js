import express from "express"
import init_orderform_mysql from "../src/init_orderform_mysql.js"

let init_orderform = express.Router()

init_orderform.get("/init_orderform",(req,res) => {
    init_orderform_mysql.init_orderform_mysql(req,res)
})

export default {
    init_orderform
}