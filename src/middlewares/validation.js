const zod = require("zod");

exports.restaurantSchema = zod.object({
  name: zod.string().trim().min(3).max(200),
  mobile_no: zod.string().min(10).max(10),
  alternate_mobile_no: zod.string().min(10).max(10).optional(),
  email: zod.string().email().min(10).max(100),
  username: zod.string().min(3).max(50),
  instagram_username: zod.string().min(3).max(50).optional(),
  address: zod.string().min(3).max(500),
});

exports.categorySchema = zod.object({
  restaurant_id: zod.string(),
  name: zod.string().min(3).max(50),
  rank: zod.number().min(1).max(50),
  img_url: zod.string().url().max(500).optional(),
  items: zod.array(zod.object({
    name: zod.string().min(3).max(50),
    price: zod.number().min(1).max(10000),
  }))
});

exports.idSchema = zod.string().min(1)

