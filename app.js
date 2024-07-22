
const express = require("express")
const app = express()

const PORT = process.env.PORT || 5001

const products_route = require("./Routes/products")

app.get("/", (req, res)=>{
res.send("Hi, I am live")
})

app.use("/api/products", products_route)

const start = async () =>{
    try {
        app.listen(PORT,()=>{
            console.log(`${PORT} I am connected`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start();
