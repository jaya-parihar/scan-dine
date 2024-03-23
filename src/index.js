const express = require("express");
require("dotenv").config();
require("./models/db");

const app = express();
app.use(express.json());

const { PORT } = process.env

app.use('/admin', require("./routers/admin-router"));

app.listen(PORT, () => {
  console.log("server started");
});
