
const express = require("express")
const app = express()
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5001

const products_route = require("./routes/products")

app.get("/", (req, res)=>{
res.send("Hi, I am live")
})

app.use("/api/products", products_route)

const start = async () =>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`${PORT} I am connected`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start();
