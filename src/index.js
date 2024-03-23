const express = require("express");
require("dotenv").config();
require("./models/db");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

const { PORT } = process.env

app.use('/admin', require("./routers/admin-router"));

app.listen(PORT, () => {
  console.log("server started");
});
