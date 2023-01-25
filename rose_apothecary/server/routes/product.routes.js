const ProductController = require('../controllers/product.controllers')

module.exports = (app) => {
    app.post('/api/addProduct', ProductController.addProduct)
    app.get('/api/allProducts', ProductController.allProducts)
    app.get('/api/oneProduct/:id', ProductController.oneProduct)
    app.delete('/api/delete/:id', ProductController.deleteProduct)
    // app.put('/api/update/:id', ProductController.updateProduct)
}