
const express = require('express')
const {signup, login, loginDashboard, getUsers,UpdateStateUser, processToken} = require('../controller/Auth')
const { upload } = require('../multer/multer')
const router  = express.Router()


// TODO:<<-------REST API FOR AUTH---------->>
router.post('/signupUser',upload.single('image'),signup)
router.post('/loginUser' ,upload.single('image'),login)
router.post('/loginDashboard',upload.single('image'),loginDashboard)
router.get('/getUsers',getUsers)
router.put('/UpdateUserState/:userId/:RadioType',UpdateStateUser)
router.post('/processToken',processToken)
module.exports = router