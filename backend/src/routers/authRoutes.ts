import { Router } from "express";
import { } from "../controllers/products";
import { } from "../controllers/cart";
import { } from "../controllers/orders";
import { Homepage, loginUser, RegisterUser } from "../controllers/auth";
import { VerifyToken, VerifyTokenUser } from "../Middlewares/VerifyToken";


const authrouter =Router()

// authrouter.post('/register',RegisterUser)
// authrouter.post('/login', loginUser)
authrouter.get('/products',VerifyToken)//protected Route
authrouter.use('/userCart', VerifyTokenUser)
authrouter.use('/orders', VerifyTokenUser)
authrouter.post('/register',RegisterUser)
authrouter.post('/login', loginUser)
authrouter.get('/users', loginUser)
authrouter.get('/home',VerifyToken, Homepage)//protected Route

export default authrouter