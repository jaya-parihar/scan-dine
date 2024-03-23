const { itemSchema } = require("../models/db")
const { categorySchema, itemSchema } = require("../middlewares/validation")
const express = require('express')
const app = express();

app.use(express.json());
const zod = require("zod")
const id = zod.object({ category_id: zod.string() });

const getAllItems = async (req, res) => {
    const parsedID = id.safeParse(req.body)
    if (!parsedID.success) {
        return res.json({ message: "Invalid ID" })
    }
    const items = await itemSchema.find({ category_id: req.body.category_id })
    if (items?.length > 0) {
        res.json({ items })
    }
    else {
        res.json({ message: 'Items not found' })
    }
}

const addItem = async (req, res) => {
    try {
        const parsedItem = itemSchema.safeParse(req.body)
        if (!parsedItem.success) {
            return res.json({ message: "Bad Request" })
        }
        const result = await itemSchema.create(req.body)
        res.json({ message: "Item Added", result })
    } catch (error) {
        console.log(error);
    }
}

const fun = async () => {
    const result = await itemSchema.aggregate(
        [
            {
                $lookup: {
                    from: "categories",
                    localField: "category_id",
                    foreignField: "_id",
                    as: "category"
                }
            }, {
                $addFields: {
                    category: {
                        $first: "$category"
                    }
                }
            }, {
                $project: {
                    category_id: 1,
                    item: 1,
                    price: 1,
                }
            }
        ])


    [
        {
            $lookup: {
                from: "categories",
                localField: "category_id",
                foreignField: "_id",
                as: "category",
            },
        },
        {
            $project: {
                category_id: 1,
                item: 1,
                price: 1,
                _id: {
                    "$toString": "$_id"
                },
                category: {
                    restaurant_id: 1,
                    category: 1,
                    rank: 1,
                    _id: {
                        "$toString": "$_id"
                    }
                }
            }
        },
        {
            $addFields: {
                category: {
                    $first: "$category",
                },
            },
        }

    ]

    result.forEach((e) => {
        console.log(e._id.toString());
    })
}

module.exports = { getAllItems, addItem }

