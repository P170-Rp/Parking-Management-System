const express = require("express");
const cors = require("cors");
require('dotenv').config();

const authRoutes = require("./backend/routes/auth");
const parkingRoutes = require("./backend/routes/parking");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/parking", parkingRoutes);

app.listen(5000, ()=> console.log("Server running on port 5000"));
