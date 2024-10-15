const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.use(express.json())
app.use(express.urlencoded());
app.get('/restaurants', async (req, res) => {
    let restaurants = await Restaurant.findAll()
    res.json(restaurants)
})

app.get("/restaurants/:id", async (req, res) => {
  let restaurant = await Restaurant.findByPk(req.params.id);
  res.json(restaurant);
});

app.post("/restaurants/", async (req, res) => {
    let arams = req.body
    console.log(arams, 'PARAMS');
    
  let restaurant = await Restaurant.create(req.params);
  res.json(restaurant);
});


app.put("/restaurants/:id", async (req, res) => {
  let data = req.body;

  let restaurant = await Restaurant.findByPk(req.params.id);
  let resData = await restaurant.update(data)
  res.json(resData);
});

app.delete("/restaurants/:id", async (req, res) => {
  let restaurant = await Restaurant.findByPk(req.params.id);
  let resData = await restaurant.destroy();
  res.json(resData);
});

module.exports = app;