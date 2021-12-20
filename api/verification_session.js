import express from "express"
import verification_session_mysql from "../src/verification_session_mysql.js"

let verification_session = express.Router()

verification_session.post("/verification_session",(req,res) => {
    verification_session_mysql.verification_session_mysql(req,res)
})


export default {
    verification_session
}