const { mongoose } = require("mongoose")

exports.categorySchema = {
    restaurant_id: mongoose.Schema.ObjectId,
    name: String,
    rank: Number,
    img_url: String,
    items: [{ name: String, price: Number }]
};

exports.restaurantSchema = {
    name: String,
    mobile_no: String,
    alternate_mobile_no: String,
    email: String,
    username: { type: String, unique: true, index: true },
    instagram_username: String,
    address: String,
};



