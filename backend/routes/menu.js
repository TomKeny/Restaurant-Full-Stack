const express = require('express')
const router = express.Router() // create a router
const menuController = require('../controllers/menu')

// routes to controllers
// the '/menuitem' route will run the create item controller
// which will fetch the data from your database
router.get('/menuitems', menuController.getMenuItems)
router.post('/menuitem', menuController.createItem)


module.exports = router
