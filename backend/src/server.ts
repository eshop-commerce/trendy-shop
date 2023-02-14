import express, { json } from 'express'
import router from './routers/index'
import userCartrouter from './routers/userCartRoutes'
import cors from 'cors'
const app= express()

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request

app.use('/userCart', userCartrouter)
app.use('/products', router)
// app.use('/auth',authrouter)


app.listen(4000,()=>{
console.log("Running ...");

})