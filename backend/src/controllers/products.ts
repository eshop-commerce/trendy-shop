import { RequestHandler,Request,Response } from 'express'
import {v4 as uid} from 'uuid'
import { productSchema } from '../helpers'
import { Product } from '../models/products'
import { DatabaseHelper } from '../databaseHelpers'
const _db= new DatabaseHelper()
interface ExtendedRequest extends Request{
    body:{Product_name:string,Product_price:string,Category_name:string},
    params:{id:string}
}
//Get Products
export const getProducts:RequestHandler=async (req,res)=>{
   try {
      const products:Product[] = await (await _db.exec('getProducts')).recordset
     res.status(200).json(products)
   } catch (error) {
    res.status(500).json(error)
   }

}
//Get one Product
export const getOneProduct=async(req:ExtendedRequest,res:Response)=>{
try {
  const id = req.params.id
  const product:Product= await (await  _db.exec('getProductById', {id})).recordset[0]
  if(!product){
     res.status(404).json({error:'Product Not Found'})
  }

  res.status(200).json(product)

} catch (error) {
  res.status(500).json(error)
}

}
// Add a product
 export async function addProduct( req:ExtendedRequest, res:Response) {
  try {
    const id =uid()
    const {Product_name,Product_price,Category_name}= req.body
    
    console.log(req.body);
    _db.exec('InsertOrUpdate', 
    {id,Product_name:Product_name, Product_price:Product_price, Category_name:Category_name})

   return  res.status(201).json({message:'Product Added'})
  } 
  catch (error:any) {
     return res.status(500).json(error.message)
  }
 }


//Update a product


export async function updateProduct(req:ExtendedRequest,res:Response){
try {
const {Product_name,Product_price,Category_name}= req.body
     const product:Product= await (await _db.exec('getProductsById',{id:req.params.id})).recordset[0]

  if(product){
    await _db.exec('InsertOrUpdate', {id:req.params.id,Product_name:Product_name, Product_price:Product_price, Category_name:Category_name})
    return res.status(200).json({message:'Updated'})
  }

  return res.status(404).json({error:'Product Not Found'})    
  } 

catch (error:any) {
   res.status(500).json(error.message)
}
}


//delete product


export const deleteProduct=async(req:ExtendedRequest, res:Response)=>{
  try {
    const product:Product= await (
    await _db.exec('getProductById',{id:req.params.id})
  ).recordset[0]
    if(product){
          await _db.exec('deleteProduct',{id:req.params.id})
        return res.status(200).json({message:'Product Deleted'})
    }
  return res.status(404).json({error:'Product Not Found'})  
  } catch (error:any) {
    res.status(500).json(error.message)
  }
}