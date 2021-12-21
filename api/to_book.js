import express from "express"
import to_book_mysql from "../src/to_book_mysql.js"

let to_book = express.Router()

to_book.get("/books",(req,res) => {
    to_book_mysql.to_book_mysql(req,res)
})

export default {
    to_book
}