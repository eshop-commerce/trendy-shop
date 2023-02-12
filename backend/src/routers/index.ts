import { Router } from "express";
import { getProducts,getOneProduct,addProduct,updateProduct,deleteProduct,addProductToWishlist,getProductsWishlist} from "../controllers/products";

const router = Router()

router.get('', getProducts)
router.get('/wish', getProductsWishlist)
router.get('/:id', getOneProduct)
router.post('/', addProduct)
router.post('/:id', addProductToWishlist)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


export default router