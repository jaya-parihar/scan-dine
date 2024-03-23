const express = require("express")
const itemController = require("../controllers/item-controller")
const router = express.Router()

router.get('/list', (req, res) => {
    itemController.getAllItems(req, res)
})

router.post('/add', (req, res) => {
    itemController.addItem(req, res)
})

module.exports = router