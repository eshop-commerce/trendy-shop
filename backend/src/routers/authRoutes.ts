import { Router } from "express";
import { } from "../controllers/products";
import { } from "../controllers/cart";
import { } from "../controllers/orders";
import { Homepage, loginUser, RegisterUser , deleteUser,getActiveUsers} from "../controllers/auth";
import { VerifyToken, VerifyTokenUser } from "../Middlewares/VerifyToken";


const authrouter =Router()

// authrouter.post('/register',RegisterUser)
// authrouter.post('/login', loginUser)
authrouter.get('/products',VerifyToken)//protected Route
authrouter.use('/userCart', VerifyTokenUser)
authrouter.use('/orders', VerifyTokenUser)


// users
authrouter.post('/register',RegisterUser)
authrouter.post('/login', loginUser)
authrouter.get('/users', loginUser)
authrouter.delete('/:Email', deleteUser)
authrouter.get('/active',getActiveUsers )
authrouter.get('/home',VerifyToken, Homepage)//protected Route

export default authrouter