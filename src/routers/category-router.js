const express = require('express')
const categoryController = require('../controllers/category-controller')
const router =  express.Router()

router.get('/list', (req, res) => {
    categoryController.getAllCategories(req,res);
})

router.post('/add', (req, res) => {
    categoryController.addCategory(req,res);
})

module.exports = router