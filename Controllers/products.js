const product = require('../models/products')


const getAllProducts = async (req,res) => {
    const { company , name , sort } = req.query
    const queryObject = {}
    if (company) {
        queryObject.company = company;
        console.log(queryObject)
    }
    if (name) {
        queryObject.name = name;
     }

     let apiData = product.find(queryObject);
     if (sort) {
        let sorting = sort.replace(",", " ");
        apiData = apiData.sort(sorting)
     }

    const data = await apiData
    res.status(200).json({data})
}
const getAllProductsTest = async (req,res) => {
    const data = await product.find(req.query)
    res.status(200).json({data})
}

module.exports = { getAllProducts, getAllProductsTest }
