const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");
const restaurantRoutes = require("../routes/restaurants");

//TODO: Create your GET Request Route Below: 
app.use(express.json())
app.use(express.urlencoded());
app.use("/restaurants", restaurantRoutes);


module.exports = app;