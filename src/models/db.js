const mongoose = require("mongoose");
const { restaurantSchema, itemSchema, categorySchema } = require('./schema')

const { DB_CONNECTION_STRING } = process.env

mongoose.connect(DB_CONNECTION_STRING);

exports.restaurantModel = mongoose.model("restaurants", mongoose.Schema(restaurantSchema));
exports.categoryModel = mongoose.model("categories", mongoose.Schema(categorySchema));
