import express from "express"
import verification_phone_mysql from "../src/verification_phone_mysql.js"

let verification_phone = express.Router()

verification_phone.post("/verification_phone",(res,req) => {
    verification_phone_mysql.verification_phone_mysql(res,req)
})

export default {
    verification_phone,
}