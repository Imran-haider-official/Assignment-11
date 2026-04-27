import express from 'express'
import { deleteProduct, getAllProducts, getSingleProduct, updateProduct, AddProduct } from '../Controllers/ProductControllers.js'

const Router = express.Router()
Router.post('/', AddProduct)
Router.get('/', getAllProducts)
Router.get('/:id', getSingleProduct)
Router.put('/:id',updateProduct)
Router.delete('/:id', deleteProduct)

export default Router