import express from "express"
import cors from "cors"
import Router from "./baseRouter.js"

let app = express()

app.use(express.static("../web_design"))

app.set("views", "../web_design/assets/views")
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use(Router.Router)

app.listen(80, () => {
    console.log("Server is running at http://127.0.0.1");
})
