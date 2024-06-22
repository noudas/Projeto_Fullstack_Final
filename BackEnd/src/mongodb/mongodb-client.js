const dotenv = require("dotenv");

const mongoose = require("mongoose");

const USERNAME = process.env.MONGODB_USERNAME;
const PASSWORD = process.env.MONGODB_PASSWORD;
const SERVICE = process.env.MONGODB_SERVICE_ENDPOINT;
const DB = process.env.MONGODB_DBNAME;
const CONNECTION_STRING = `mongodb://${USERNAME}:${PASSWORD}@${SERVICE}/${DB}`
const OPTIONS = {
    authSource: "admin",
    directConnection: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const mongodbConnect = async () => {
    try {
        console.log("Trying to establish connection to mongodb...");
        await mongoose.connect(CONNECTION_STRING, OPTIONS);
        console.log("Connected to mongodb.");
    } catch (error) {
        console.error("Conection to mongodb failed", error);
    }
}

module.exports = mongodbConnect;