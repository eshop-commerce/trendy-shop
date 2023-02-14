import { Router } from "express";
import { Homepage, loginUser, RegisterUser } from "../controllers/auth";
import { VerifyToken } from "../Middlewares/VerifyToken";



const authrouter =Router()

authrouter.post('/register',RegisterUser)
authrouter.post('/login', loginUser)
authrouter.get('/home',VerifyToken, Homepage)//protected Route

export default authrouter