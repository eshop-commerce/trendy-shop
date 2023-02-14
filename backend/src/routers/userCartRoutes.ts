import { Router } from "express";
import { addItem, deleteItem, getOneItem, getItems, updateItem } from '../controllers/cart'

const userCartrouter = Router()

userCartrouter.get('', getItems)
userCartrouter.post('/', addItem)
userCartrouter.get('/:id', getOneItem)
userCartrouter.put('/:id', updateItem)
userCartrouter.delete('/:id', deleteItem)

export default userCartrouter