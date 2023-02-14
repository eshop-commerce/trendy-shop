import {Request, Response, RequestHandler} from "express"

interface userCart {
 id: number,
 Product_Id: string,
 Product_name: string,
 Quantity:number
}

const items: userCart[] = [] // todos is of type Todo array


// Get all Items
export const getItems:RequestHandler=(req, res)=>{
 return res.status(200).json(items)
}


// Get one Item
export const getOneItem:RequestHandler<{id:string}>=(req, res) => {
 const id = +req.params.id
 const index = items.findIndex(x => x.id === id)
 if (index<0) {
  return res.status(404).json({ message: "Item not found" })
 }
 return res.status(200).json(items[index])
}

// Adding an new Item
export const addItem = (req: Request, res: Response) => {
 const { Product_Id, Product_name, Quantity } = req.body as { Product_Id: string, Product_name: string, Quantity:number } // data passed at the body
 items.push({ Product_Id, Product_name, Quantity, id: Math.floor(Math.random() * 1000) })
 return res.status(201).json({ message: 'Item Added Successfully' })
}

// Update an Item
export const updateItem:RequestHandler<{ id: string }> = (req, res) => {
 const id = +req.params.id
 const index = items.findIndex(x => x.id === id)
 if (index < 0) {
  return res.status(404).json({ message: "Item not found" })
 }
 const { Product_Id, Product_name, Quantity } = req.body as { Product_Id: string, Product_name: string, Quantity:number }
 items[index] = { ...items[index], Product_Id, Product_name, Quantity }
 res.status(200).json({ message: "Item Updated Successfully" })
}


// Delete an Item
export const deleteItem:RequestHandler<{ id: string }> = (req, res) => {
 const id = +req.params.id
 const index = items.findIndex(x=>x.id===id)
 if (index<0) {
  return res.status(404).json({ message: "Item not found" })
 }
 items.splice(index, 1)
 res.status(200).json({ message: "Item is Deleted" })

}