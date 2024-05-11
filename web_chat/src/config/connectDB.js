import mongoose from "mongoose";
import bluebird from "bluebird";

// connect to mongodb 

let connectDB = () => {
    mongoose.Promise = bluebird;

    let DB_CONNECTION = "mongodb";
    let DB_HOST = "127.0.0.1";
    let DB_PORT = 27017;
    let DB_NAME= "web_chat";
    let DB_USERNAME = "";
    let DB_PASSWORD = "";

    // mongodb://localhost27017
    let URI = `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

    return mongoose.connect(URI);
};

module.exports = connectDB;