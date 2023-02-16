import express, { json } from 'express'
import router from './routers/index'
import userCartrouter from './routers/userCartRoutes'
import cors from 'cors'
import authrouter from './routers/authRoutes'
import cron from 'node-cron'
import sendWelcomeEmail from './backgroundservices/emailService'

const app= express()

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request

app.use('/userCart', userCartrouter)
app.use('/products', router)
app.use('/auth',authrouter)


app.use('/UserCart',router)

cron.schedule('*/10 * * * * *', async() => {
    console.log('running a task every 10 Second');
    await sendWelcomeEmail()
  });

app.listen(4004,()=>{
console.log("Running ...");

})

