import express, { json } from 'express'
import router from './routers/index'
import userCartrouter from './routers/userCartRoutes'
import cors from 'cors'
import authrouter from './routers/authRoutes'
import orderRoute from './routers/orderRoute'
const app= express()

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request

app.use('/userCart', userCartrouter)
app.use('/products', router)
app.use('/auth',authrouter)
app.use('/orders', orderRoute)



app.listen(4004,()=>{
console.log("Running ...");

})