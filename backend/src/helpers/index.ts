import Joi, { ref } from 'joi'

export const productSchema = Joi.object({
    Product_name:Joi.string().required(),
    Product_price:Joi.number().required(),
    Category_name:Joi.string().required()
})

export const userCartSchema = Joi.object({
    user_Id: Joi.string().required(),
    Product_Id:Joi.string().required(),
    Product_name:Joi.string().required(),
    Quantity:Joi.number().required()

})
export const categorySchema = Joi.object({
    Category_name:Joi.string().required
})


export const RegistrationSchema= Joi.object({
    Name:Joi.string().required(),
    Email:Joi.string().required().email().messages({
       'string.empty':' Please add a valid Email',
       'string.email':'Not a Valid Email'
   }),
   Password:Joi.string().required().pattern(new
        RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')),

   ConfirmPassword:Joi.equal(ref('Password'))
})

export const LoginSchema= Joi.object({
    Email:Joi.string().required().email().messages({
       'string.empty':' Please add a valid Email',
       'string.email':'Not a Valid Email'
   }),
   Password:Joi.string().required(),

})