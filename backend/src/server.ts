import express, { json } from 'express'
import authrouter from './routers'
import cors from 'cors'
const app= express()
import cron from 'node-cron'
import sendWelcomeEmail from './EmailService';

//Register some Middlewares
app.use(cors())
app.use(json()) //adds a body to the Request

cron.schedule('*/10 * * * * *', async() => {
    console.log('running a task every 10 Second');
    await sendWelcomeEmail()
});


app.use('/auth',authrouter)


app.listen(4000,()=>{
console.log("Server running ...");

})