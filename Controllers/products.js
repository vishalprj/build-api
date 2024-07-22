const getAllProducts = async (req,res) =>{
    res.status(200).json({msg:"All products are live"})
}
const getAllProductsTest = async (req,res) =>{
    res.status(200).json({msg:"All Testing products are live"})
}

module.exports = { getAllProducts, getAllProductsTest }
