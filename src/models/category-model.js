const { categoryModel } = require("./db")

exports.getAllCategories = async (id) => {
    const categories = await categoryModel.find({ restaurant_id: id })
    return categories;
}

exports.addCategory = async (category) => {
    const result = await categoryModel.create(category)
    return result;
}