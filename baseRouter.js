import express from "express"
import verification_phone from "./api/verification_phone.js"
import user_register from "./api/user_register.js"
import user_login from "./api/user_login.js"
import init_searchbook from "./api/init_searchbook.js"
import to_book from "./api/to_book.js"
import verification_session from "./api/verification_session.js"

let Router = express.Router()

Router.use("/api",verification_phone.verification_phone)
Router.use("/web_bookstore",user_register.user_register)
Router.use("/web_bookstore",user_login.user_login)
Router.use("/web_bookstore",init_searchbook.init_searchbook)
Router.use("/api",verification_session.verification_session)
Router.use(to_book.to_book)


export default {
    Router,
}