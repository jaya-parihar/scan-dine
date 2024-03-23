const mongoose = require("mongoose");
const { restaurantSchema, itemSchema, categorySchema } = require('./schema')

mongoose.connect(process.env.connection_string);

exports.restaurantModel = mongoose.model("restaurants", mongoose.Schema(restaurantSchema));
exports.categoryModel = mongoose.model("categories", mongoose.Schema(categorySchema));
exports.itemModel = mongoose.model("items", mongoose.Schema(itemSchema));

