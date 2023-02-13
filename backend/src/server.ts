import express, { json } from 'express'
import router from './routers'
import authrouter from './routers/authRoutes'
import cors from 'cors'
const app= express()

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request


app.use('/products', router)
// app.use('/auth',authrouter)


app.use('/UserCart',router)

app.listen(4000,()=>{
console.log("Running ...");

})