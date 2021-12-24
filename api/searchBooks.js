import express from "express"
import searchBooks_mysql from "../src/searchBooks_mysql.js"

let searchBooks = express.Router()

searchBooks.get("/searchBooks",(req,res) => {
    searchBooks_mysql.searchBooks_mysql(req,res)
})

export default {
    searchBooks
}