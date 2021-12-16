import express from "express"
import user_register_mysql from "../src/user_register_mysql.js"

let user_register = express.Router()

user_register.post("/user_register",(res,req) => {
    user_register_mysql.user_register_mysql(res,req)
})

export default {
    user_register
}