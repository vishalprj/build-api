const product = require('../models/products')

const getAllProducts = async (req,res) => {
    const data = await product.find(req.query)
    res.status(200).json({data})
}
const getAllProductsTest = async (req,res) => {
    const data = await product.find(req.query)
    res.status(200).json({data})
}

module.exports = { getAllProducts, getAllProductsTest }
