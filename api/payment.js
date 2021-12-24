import express from "express"
import payment_mysql from "../src/payment_mysql.js"

let payment = express.Router()

payment.post("/payment",(req,res) => {
    payment_mysql.payment_mysql(req,res)
})

export default {
    payment,
}