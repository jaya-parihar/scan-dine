const express = require("express");
require("dotenv").config();
require("./models/db");

const app = express();
app.use(express.json());

app.use('/admin', require("./routers/restaurant-router"));
// app.use('/category', require("./routers/category-router"))
// app.use('/item', require("./routers/item-router"))

app.listen(3000, () => {
  console.log("server started");
});
