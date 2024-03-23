const { categoryModel } = require("./db")

exports.addItem = async (category_id, item) => {
    const result = await categoryModel.findOneAndUpdate({ _id: category_id }, { $push: { items: item } })
    return result;

}