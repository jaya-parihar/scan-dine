const { idSchema, categorySchema } = require('../middlewares/validation')
const { RESPONSE, ISE_RESPONSE, respMessage } = require('../utils/response')
const categoryModel = require('../models/category-model')

exports.getAllCategories = async (req, res) => {
    try {
        const parsedId = idSchema.safeParse(req.body.id)
        if (!parsedId.success)
            return res.json(RESPONSE({ status: 400, message: respMessage.BAD_REQ }))

        const categories = await categoryModel.getAllCategories(req.body.id)

        if (categories?.length > 0)
            return res.json(RESPONSE({ data: categories }))
        return res.json(RESPONSE({ status: 204, message: respMessage.NF }))
    } catch (error) {
        console.log(error.message || error);
        res.json(ISE_RESPONSE())
    }
}


exports.addCategory = async (req, res) => {
    try {
        const parsedCategory = categorySchema.safeParse(req.body)
        if (!parsedCategory.success) {
            return res.json(RESPONSE({ status: 400, message: respMessage.BAD_REQ }))
        }
        const result = await categoryModel.addCategory(req.body)
        res.json(RESPONSE({ data: { id: result._id } }))
    } catch (error) {
        console.log(erorr.message || error);
        res.json(ISE_RESPONSE())
    }
}
