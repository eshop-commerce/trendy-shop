import { RequestHandler, Request, Response } from 'express'
import { v4 as uid } from 'uuid'
import { userCartSchema } from '../helpers'
import { Item } from '../models/cart'
import { DatabaseHelper } from '../databaseHelpers'
const _db = new DatabaseHelper()
interface ExtendsRequest extends Request {
 body: { Product_Id: string, Product_name: string, Quantity: string, Amount:string, },
 params: { id: string }
}
//Get Items
export const getItems: RequestHandler = async (req, res) => {
 try {
  const items: Item[] = await (await _db.exec('getitems')).recordset
  res.status(200).json(items)
 } catch (error) {
  res.status(500).json(error)
 }

}
//Get one Item
export const getOneItem = async (req: ExtendsRequest, res: Response) => {
 try {
  const id = req.params.id
  const item: Item = await (await _db.exec('getItemById', { id })).recordset[0]
  if (!item) {
   res.status(404).json({ error: 'Item Not Found' })
  }

  res.status(200).json(item)

 } catch (error) {
  res.status(500).json(error)
 }

}
// Add a Item
export async function addItem(req: ExtendsRequest, res: Response) {
 try {
  const id = uid()
  const { Product_Id, Product_name, Amount, Quantity } = req.body
  if (Product_Id && Product_name && Amount && Quantity) {
   _db.exec('InsertOrUpdate',
    { id:id, Product_Id: Product_Id, Product_name: Product_name, Amount: Amount, Quantity: Quantity })
   return res.status(201).json({ message: 'Item Added' })

  } else {
   return res.status(400).json({ message: 'All fields should contain a value' })

  }

 }
 catch (error: any) {
  return res.status(500).json(error.message)
 }
}


//Update a item


export async function updateItem(req: ExtendsRequest, res: Response) {
 try {
  const { Product_Id, Product_name, Amount, Quantity } = req.body
  const item: Item = await (await _db.exec('getItemById', { id: req.params.id })).recordset[0]

  if (item) {
   await _db.exec('InsertOrUpdate', { id: req.params.id, Product_Id: Product_Id, Product_name: Product_name, Amount:Amount, Quantity: Quantity })
   return res.status(200).json({ message: 'Updated' })
  }

  return res.status(404).json({ error: 'Item Not Found' })
 }

 catch (error: any) {
  res.status(500).json(error.message)
 }
}


//delete item


export const deleteItem = async (req: ExtendsRequest, res: Response) => {
 try {
  const item: Item = await (
   await _db.exec('getItemById', { id: req.params.id })
  ).recordset[0]
  if (item) {
   await _db.exec('deleteItem', { id: req.params.id })
   return res.status(200).json({ message: 'Item Deleted' })
  }
  return res.status(404).json({ error: 'Item Not Found' })
 } catch (error: any) {
  res.status(500).json(error.message)
 }
}

