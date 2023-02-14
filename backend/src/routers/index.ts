import { Router } from "express";
import { Homepage, loginUser, RegisterUser , deleteUser} from "../controllers/auth";
import { VerifyToken } from "../Middlewares/VerifyToken";



const authrouter =Router()

authrouter.post('/register',RegisterUser)
authrouter.post('/login', loginUser)
authrouter.get('/home',VerifyToken, Homepage)
authrouter.delete('/:id', deleteUser)

export default authrouter