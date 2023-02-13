import {Router} from 'express'
import { addItem, deleteItem, getOneItem, getItems, updateItem } from '../Controllers/userCartController'

const router = Router()

router.get('', getItems)
router.post('', addItem)
router.get('/:id', getOneItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export default router