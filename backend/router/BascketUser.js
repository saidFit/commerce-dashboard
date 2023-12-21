const express = require('express')
const { getBascketUser, InsetBascket, DeletePFromBascket } = require('../controller/Bascketuser')
const router  = express.Router()
const MWauthorization      = require('../MiddleWare/MWauthorization')


// TODO:<----------REST API BASCKET-------->
router.post('/postProduct/:productId/:amountP',MWauthorization,InsetBascket)
router.get('/getBascketUser',MWauthorization,getBascketUser)
router.delete('/DeletePfromBascket/:productId',MWauthorization,DeletePFromBascket)

module.exports = router