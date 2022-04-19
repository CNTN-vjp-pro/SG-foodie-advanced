const mongoose = require('mongoose');
require('dotenv/config')
async function connect() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Successfully connected!");
    } catch (err) {
        console.log("Error: ", err.message);
    }
}
module.exports = { connect }