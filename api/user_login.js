import express from "express"
import user_login_mysql from "../src/user_login_mysql.js"

let user_login = express.Router()

user_login.post("/user_login",(res,req) => {
    user_login_mysql.user_login_mysql(res,req)
})

export default {
    user_login
}