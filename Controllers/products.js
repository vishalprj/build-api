
const product = require('../models/products')


const getAllProducts = async (req,res) =>{
    const data = await product.find({})
    res.status(200).json({data})
}
const getAllProductsTest = async (req,res) =>{
    res.status(200).json({msg:"All Testing products are live"})
}

module.exports = { getAllProducts, getAllProductsTest }
