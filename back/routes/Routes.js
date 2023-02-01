const express = require("express")
const router = express.Router()

const { displayData, saveData, updateData, deleteData, singleData } = require('../controller/Control')

router.get('/display', displayData)
router.post('/save', saveData)
router.get('/single/:postId', singleData)
router.patch('/update/:postId', updateData)
router.delete('/delete/:postId', deleteData)


module.exports = router