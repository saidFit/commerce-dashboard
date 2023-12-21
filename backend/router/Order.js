const expess          = require('express')
const { InsertOrder, updatePaid, updateDelivered, getOrders, getOrdersDash } = require('../controller/order')
const router          = expess.Router()
const MWauthorization =require('../MiddleWare/MWauthorization')

// TODO:<--------REST API FOR ORDERS------->//
router.post('/postOrder',MWauthorization,InsertOrder)
router.put('/updatePaid/:orderId',updatePaid)
router.put('/updateDelivered/:orderId',updateDelivered)
router.get('/getOrders',MWauthorization,getOrders)
// router.get('/getOrdersDashboard',getOrdersDash)


module.exports = router;