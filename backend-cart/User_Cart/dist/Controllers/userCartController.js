"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.addItem = exports.getOneItem = exports.getItems = void 0;
const items = []; // todos is of type Todo array
// Get all Items
const getItems = (req, res) => {
    return res.status(200).json(items);
};
exports.getItems = getItems;
// Get one Item
const getOneItem = (req, res) => {
    const id = +req.params.id;
    const index = items.findIndex(x => x.id === id);
    if (index < 0) {
        return res.status(404).json({ message: "Item not found" });
    }
    return res.status(200).json(items[index]);
};
exports.getOneItem = getOneItem;
// Adding an new Item
const addItem = (req, res) => {
    const { Product_Id, Product_name, Quantity } = req.body; // data passed at the body
    items.push({ Product_Id, Product_name, Quantity, id: Math.floor(Math.random() * 1000) });
    return res.status(201).json({ message: 'Item Added Successfully' });
};
exports.addItem = addItem;
// Update an Item
const updateItem = (req, res) => {
    const id = +req.params.id;
    const index = items.findIndex(x => x.id === id);
    if (index < 0) {
        return res.status(404).json({ message: "Item not found" });
    }
    const { Product_Id, Product_name, Quantity } = req.body;
    items[index] = Object.assign(Object.assign({}, items[index]), { Product_Id, Product_name, Quantity });
    res.status(200).json({ message: "Item Updated Successfully" });
};
exports.updateItem = updateItem;
// Delete an Item
const deleteItem = (req, res) => {
    const id = +req.params.id;
    const index = items.findIndex(x => x.id === id);
    if (index < 0) {
        return res.status(404).json({ message: "Item not found" });
    }
    items.splice(index, 1);
    res.status(200).json({ message: "Item is Deleted" });
};
exports.deleteItem = deleteItem;
