const express = require("express")
const router = require("./routes/index")


const app = express()
app.use(router)
app.use(express.json())

app.listen(3333,() => {
    console.log("running")
})