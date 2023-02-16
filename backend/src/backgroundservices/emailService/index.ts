import ejs from 'ejs'
import sendMail from '../../helpers/email';
import mssql from 'mssql'
import { sqlConfig } from '../../config';

interface User{
Id:string
Name:string
Email:string
Role:string
isSent:string
Password:string
}
const sendWelcomeEmail = async()=>{
    const pool = await mssql.connect(sqlConfig)
    const users:User[]= await(await pool.request().
    query("SELECT * FROM UserTable WHERE isSent ='0'")).recordset
    // console.log(users);

for(let user of users){
    ejs.renderFile('templates/registration.ejs',{name:user.Name}, async(error, html)=>{
    const message = {
    from: process.env.EMAIL,
    to: user.Email,
    subject: "Welcome to Eshop",
    html: `Hello ${user.Name}, Welcome to Eshop online shopping`
};

// console.log(html);

 try {
await sendMail(message) 
await pool.request().query(`UPDATE UserTable SET isSent ='1' WHERE Id ='${user.Id}'`)
 } catch (error) {
    console.log(error);
    console.log(html)
    
 }  
})
}    
}

export default sendWelcomeEmail