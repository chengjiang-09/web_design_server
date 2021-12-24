import express from "express"
import user_logout_redis from "../src/user_logout_redis.js"

let user_logout = express.Router()

user_logout.get("/user_logout",(req,res) => {
    user_logout_redis.user_logout_redis(req,res)
})

export default {
    user_logout
}