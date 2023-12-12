const Item = require("../models/item")
const Order = require("../models/order")
const User = require("../models/user")

let DataBase

function GetDB (DB) {
    switch (DB) {
        case "item":
            DataBase = Item
            break
        case "order":
            DataBase = Order
            break
        case "user":
            DataBase = User
            break
        default:
            Database = User
    }
}

async function getItems (req,res) {
    const DB = req.params.DB
    const condition = req.params.condition
    GetDB(DB)
    
    const Condition = await JSON.parse(condition)

    const items = await DataBase.find(Condition)

    res.status(200).json(items)
}

async function getItem (req,res) {
    const id = req.params.id
    const DB = req.params.DB
    GetDB(DB)

    const item = await DataBase.findById(id)

    res.status(200).json(item)
}

async function createItem (req,res) {
    const { DB, Object } = req.body
    GetDB(DB)

    let newItem

    switch (DB) {
        case "item":
            newItem = new Item(Object)
            break
        case "order":
            newItem = new Order(Object)
            break
        case "user":
            newItem = new User(Object)
            break
    }

    const item = await newItem.save()

    res.status(200).json({
        message: "Updated",
        Item: item
    })
}

async function editItem (req,res) {
    const { id } = req.params
    const { DB, Update } = req.body
    GetDB(DB)

    await DataBase.findByIdAndUpdate(id, Update)
    res.status(200).json({
        message: "Updated",
        Update: Update
    })
}

async function deleteItem (req,res) {
    const { id } = req.params
    const { DB } = req.body
    GetDB(DB)   

    const deletedItem = await DataBase.findByIdAndDelete(id)
    res.status(200).json({
        message: "Deleted",
        DeletedItem: deletedItem
    })
}

module.exports = {
    createItem,
    getItems,
    editItem,
    deleteItem,
    getItem
}