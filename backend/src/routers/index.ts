import { Router } from "express";
import { getProducts,getOneProduct,addProduct,updateProduct,deleteProduct} from "../controllers/products";

const router = Router()

router.get('', getProducts)
router.get('/:id', getOneProduct)
router.post('', addProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


export default router