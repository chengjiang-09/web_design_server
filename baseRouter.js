import express from "express"
import verification_phone from "./api/verification_phone.js"
import user_register from "./api/user_register.js"
import user_login from "./api/user_login.js"
import init_searchbook from "./api/init_searchbook.js"
import to_book from "./api/to_book.js"
import verification_session from "./api/verification_session.js"
import init_commonbook from "./api/init_commonbook.js"
import init_newbook from "./api/init_newbook.js"
import init_activebook from "./api/init_activebook.js"
import add_ordercar from "./api/add_ordercar.js"
import init_ordercar from "./api/init_ordercar.js"
import delete_ordercar from "./api/delete_ordercar.js"
import payment from "./api/payment.js"
import init_orderform from "./api/init_orderform.js"
import searchBooks from "./api/searchBooks.js"
import user_logout from "./api/user_logout.js"

let Router = express.Router()

Router.use("/api",verification_phone.verification_phone)
Router.use("/api",verification_session.verification_session)
Router.use("/web_bookstore",user_logout.user_logout)
Router.use("/web_bookstore",user_register.user_register)
Router.use("/web_bookstore",user_login.user_login)
Router.use("/web_bookstore",init_searchbook.init_searchbook)
Router.use("/web_bookstore",init_commonbook.init_commonbook)
Router.use("/web_bookstore",init_newbook.init_newbook)
Router.use("/web_bookstore",init_activebook.init_activebook)
Router.use("/web_bookstore",add_ordercar.add_ordercar)
Router.use("/web_bookstore",init_ordercar.init_ordercar)
Router.use("/web_bookstore",delete_ordercar.delete_ordercar)
Router.use("/web_bookstore",payment.payment)
Router.use("/web_bookstore",init_orderform.init_orderform)
Router.use("/web_bookstore",searchBooks.searchBooks)
Router.use(to_book.to_book)


export default {
    Router,
}