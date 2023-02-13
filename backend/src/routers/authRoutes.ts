import { Router } from "express";
import { } from "../controllers/products";
import { VerifyToken } from "../Middlewares/VerifyToken";



const authrouter =Router()

// authrouter.post('/register',RegisterUser)
// authrouter.post('/login', loginUser)
authrouter.get('/products',VerifyToken)//protected Route

export default authrouter