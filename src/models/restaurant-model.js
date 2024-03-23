const { restaurantModel } = require("./db")

exports.getAllRestaurants = async () => {
    const restaurants = await restaurantModel.find();
    return restaurants
}

exports.addRestaurant = async (restaurant) => {
    const result = await restaurantModel.create(restaurant)
    return result
}