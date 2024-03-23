const { restaurantSchema } = require("../middlewares/validation");
const restaurantModel = require('../models/restaurant-model')
const { respMessage, RESPONSE, ISE_RESPONSE } = require('../utils/response')

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantModel.getAllRestaurants()
    res.json(RESPONSE({ data: restaurants }))
  } catch (error) {
    console.log(error);
    res.json(ISE_RESPONSE())
  }
};

exports.addRestaurant = async (req, res) => {
  try {
    const parsedRestaurant = restaurantSchema.safeParse(req.body);
    if (!parsedRestaurant.success) {
      return res.json(RESPONSE({ status: 400, message: respMessage.BAD_REQ }))
    }
    const result = await restaurantModel.addRestaurant(req.body)
    res.json(RESPONSE({ data: { id: result._id } }))
  } catch (error) {
    console.log(error.message || error);
    if (error.code == 11000)
      return res.json(RESPONSE({ status: 409, message: `Username should be unique!` }))
    res.json(ISE_RESPONSE())
  }
};
