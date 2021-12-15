import express from "express"
import verification_phone from "./api/verification_phone.js"

let Router = express.Router()

Router.use("/api",verification_phone.verification_phone)

export default {
    Router,
}