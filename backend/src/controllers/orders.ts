import { RequestHandler, Request, Response } from 'express'
import { v4 as uid } from 'uuid'
import { ordersSchema } from '../helpers'
import { Order } from '../models/orders'
import { DatabaseHelper } from '../databaseHelpers'
const _db = new DatabaseHelper()
interface ExtendsRequest extends Request {
 body: { User_Id: string, Product_Id: string, orderStatus: string, Quantity: string },
 params: { id: string }
}



//Get Orders
export const getAllOrders: RequestHandler = async (req, res) => {
 try {
  const orders: Order[] = await (await _db.exec('getAllOrders')).recordset
  res.status(200).json(orders)
 } catch (error) {
  res.status(500).json(error)
 }

}
//Get one Order
export const getOneOrder = async (req: ExtendsRequest, res: Response) => {
 try {
  const id = req.params.id
  const order: Order = await (await _db.exec('getOrderById', { id })).recordset[0]
  if (!order) {
   res.status(404).json({ error: 'Order Not Found' })
  }

  res.status(200).json(order)

 } catch (error) {
  res.status(500).json(error)
 }

}
// Add an Order
export async function addOrder(req: ExtendsRequest, res: Response) {
 try {
  const id = uid()
  const { User_Id, Product_Id, orderStatus, Quantity } = req.body
  if (User_Id && Product_Id && orderStatus &&  Quantity) {
   _db.exec('insertOrder',
    { id: id, User_Id: User_Id, Product_Id: Product_Id, orderStatus: orderStatus,Quantity: Quantity })
   return res.status(201).json({ message: 'Order Added' })

  } else {
   return res.status(400).json({ message: 'All fields should contain a value' })

  }


 }
 catch (error: any) {
  return res.status(500).json(error.message)
 }
}


//Update an Order


export async function updateItem(req: ExtendsRequest, res: Response) {
 try {
  const { User_Id, Product_Id, orderStatus, Quantity } = req.body
  const order: Order = await (await _db.exec('getOrderById', { id: req.params.id })).recordset[0]

  if (order) {
   await _db.exec('updateOrders', { id: req.params.id, User_Id: User_Id, Product_Id: Product_Id, orderStatus: orderStatus, Quantity: Quantity })
   return res.status(200).json({ message: 'Updated' })
  }

  return res.status(404).json({ error: 'Order Not Found' })
 }

 catch (error: any) {
  res.status(500).json(error.message)
 }
}


//delete Order


export const deleteItem = async (req: ExtendsRequest, res: Response) => {
 try {
  const order: Order = await (
   await _db.exec('getOrderById', { id: req.params.id })
  ).recordset[0]
  if (order) {
   await _db.exec('deleteOrder', { id: req.params.id })
   return res.status(200).json({ message: 'Item Deleted' })
  }
  return res.status(404).json({ error: 'Item Not Found' })
 } catch (error: any) {
  res.status(500).json(error.message)
 }
}