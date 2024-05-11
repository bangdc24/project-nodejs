import session from "express-session";
import connectMongo from "connect-mongo";

let MongoStore = new connectMongo(session);

let DB_CONNECTION = "mongodb";
let DB_HOST = "127.0.0.1";
let DB_PORT = 27017;
let DB_NAME= "web_chat";
let DB_USERNAME = "";
let DB_PASSWORD = "";

/**
 * this variable is where  save session
 * 
 */


let sessionStore = new MongoStore({
    url: `${DB_CONNECTION}://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    autoReconnect: true,
    autoRemove: "native"
});


/*
* config session for app
* @param app from exactly express module
*/

let configSession = (app) => {
    app.use(session({
        key: 'express.sid',
        secret: 'mySecret',
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 // 86400000 seconds = 1 day
        }
    }));
}

module.exports = configSession;