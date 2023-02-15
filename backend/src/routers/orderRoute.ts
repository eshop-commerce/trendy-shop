import { Router } from "express";
import { getAllOrders } from '../controllers/orders'

const orderRoute = Router()

orderRoute.get('', getAllOrders)
// orderRoute.post('/', addItem)
// orderRoute.get('/:id', getOneItem)
// orderRoute.put('/:id', updateItem)
// orderRoute.delete('/:id', deleteItem)

export default orderRoute



// getAllOrders