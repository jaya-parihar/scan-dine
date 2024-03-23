const { itemSchema } = require("../middlewares/validation")
const { RESPONSE, respMessage, ISE_RESPONSE } = require("../utils/response")
const itemModel = require("../models/item-model")

exports.addItem = async (req, res) => {
    try {
        const parsedItem = itemSchema.safeParse(req.body)
        if (!parsedItem.success)
            return res.json(RESPONSE({ status: 400, message: respMessage.BAD_REQ, data: parsedItem }))

        const item = await itemModel.addItem(req.body.category_id, req.body.item)
        res.json(RESPONSE())

    } catch (error) {
        console.log(error.message || error);
        res.json(ISE_RESPONSE())
    }

}
