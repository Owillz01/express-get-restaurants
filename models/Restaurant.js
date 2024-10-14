const Sequelize = require("sequelize");
const db = require("../db/connection");

const Restaurant = db.define("restaurants", {
    name: Sequelize.STRING,
    location: Sequelize.STRING,
    cuisine: Sequelize.STRING
})

module.exports = Restaurant;