import express from "express"
import cors from "cors"

let app = express()

app.use(express.static("../web_design"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.listen(80,() => {
    console.log("Server is running at http://127.0.0.1");
})
