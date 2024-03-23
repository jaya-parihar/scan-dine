const express = require("express");
const router = express.Router();

const restaurantController = require("../controllers/restaurant-controller");
const categoryController = require("../controllers/category-controller");
const itemController = require("../controllers/item-controller")

router.get("/restaurants", restaurantController.getAllRestaurants)

router.post("/restaurant", restaurantController.addRestaurant)

router.get("/categories", categoryController.getAllCategories)

router.post("/category", categoryController.addCategory)

router.post("/item", itemController.addItem)

module.exports = router;
