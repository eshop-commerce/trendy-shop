import { Router } from "express";
import { } from "../controllers/products";
import { } from "../controllers/cart";
import { VerifyToken, VerifyTokenUser } from "../Middlewares/VerifyToken";




const authrouter =Router()

// authrouter.post('/register',RegisterUser)
// authrouter.post('/login', loginUser)
authrouter.get('/products',VerifyToken)//protected Route
authrouter.use('/userCart', VerifyTokenUser)

export default authrouter