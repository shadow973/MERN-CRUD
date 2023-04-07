const express = require('express')
const router = express.Router()
const {getUser, getUserById, saveUser, updateUser, deleteUser} = require('../controller/usercontroller.js')

router.get('/user', getUser)
router.get('/user/:id', getUserById)
router.post('/user', saveUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

module.exports = router