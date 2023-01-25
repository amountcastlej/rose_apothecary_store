const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    title: String,
    description: String,
    wholesale: Number,
    retail: Number,
    image: String
},{timestamps:true})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product