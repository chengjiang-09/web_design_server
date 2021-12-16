import express from "express"
import verification_phone from "./api/verification_phone.js"
import user_register from "./api/user_register.js"
import user_login from "./api/user_login.js"

let Router = express.Router()

Router.use("/api",verification_phone.verification_phone)
Router.use("/web_bookstore",user_register.user_register)
Router.use("/web_bookstore",user_login.user_login)

export default {
    Router,
}