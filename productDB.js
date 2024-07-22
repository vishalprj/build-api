require("dotenv").config()
const connectDB = require('./db/connect')
const Product = require('./models/products')
const ProductData = require('./products.json')

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL)
        await Product.deleteMany()
        await Product.create(ProductData)
         console.log("DATA")
    } catch (error){
        console.log(error)
    }
}
start()
