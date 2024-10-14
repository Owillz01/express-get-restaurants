const Restaurant = require("./models/index")
const { seedRestaurant } = require("./seedData");
const db = require("./db/connection")

const syncSeed = async () => {
    await db.sync({force: true});
    await Restaurant.bulkCreate(seedRestaurant)
    // BONUS: Update with Item and Menu bulkCreate


}

syncSeed()