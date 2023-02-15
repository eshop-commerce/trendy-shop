import { Router } from "express";
import { } from "../controllers/products";
import { } from "../controllers/cart";
import { Homepage, loginUser, RegisterUser , deleteUser,getActiveUsers} from "../controllers/auth";
import { VerifyToken, VerifyTokenUser } from "../Middlewares/VerifyToken";




const authrouter =Router()

// authrouter.post('/register',RegisterUser)
// authrouter.post('/login', loginUser)
authrouter.get('/products',VerifyToken)//protected Route
authrouter.use('/userCart', VerifyTokenUser)


// users
authrouter.post('/register',RegisterUser)
authrouter.post('/login', loginUser)
authrouter.get('/users', loginUser)
authrouter.delete('/deleteUser', deleteUser)
authrouter.get('/active',getActiveUsers )
authrouter.get('/home',VerifyToken, Homepage)//protected Route

export default authrouter