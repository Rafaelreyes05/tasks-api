import { Router } from "express"
import { 
    createProduct, 
    deleteProduct, 
    getProductById, 
    getProducts,
    updateProduct,
} from "../controllers/products.controllers.js"

const router = Router()

//GET
router.get('/products',getProducts)
router.get('/products/:id',getProductById)

//POST
router.post('/products',createProduct)

//PUT
router.put('/products/:id',updateProduct)

//DELETE
router.delete('/products/:id',deleteProduct)

export default router