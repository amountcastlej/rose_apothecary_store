const Product = require('../models/product.model')

const addProduct = ( req, res ) => {
    Product.create(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
    })
}

const allProducts = (req, res) => {
    Product.find(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
}

const oneProduct = ( req, res ) => {
    Product.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
    })
}

const deleteProduct = ( req, res ) => {
    Product.deleteOne({_id:req.params.id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
}

module.exports = {
    addProduct,
    allProducts,
    oneProduct,
    deleteProduct
}