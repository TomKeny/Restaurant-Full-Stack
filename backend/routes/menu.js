const express = require('express')
const router = express.Router() // create a router
const itemsController = require('../controllers/items')

// routes to controllers
// the '/menuitem' route will run the create item controller
// which will fetch the data from your database
router.get('/items', itemsController.getItems)
router.get('/item/:id', itemsController.getItem)
router.post('/item', itemsController.createItem)
router.patch('/item/:id', itemsController.editItem)
router.delete('/item/:id', itemsController.deleteItem)


module.exports = router
