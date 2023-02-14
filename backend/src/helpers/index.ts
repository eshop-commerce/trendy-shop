import Joi, { ref } from 'joi'

export const productSchema = Joi.object({
    Product_name:Joi.string().required(),
    Product_price:Joi.number().required(),
    Category_name:Joi.string().required()
})

export const userCartSchema = Joi.object({
    Product_Id:Joi.string().required(),
    Product_name:Joi.string().required(),
    Quantity:Joi.number().required()
})