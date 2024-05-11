import express from "express";
import {home, auth} from "./../constrollers/index";
import {authValid} from "./../validation/index";


let router = express.Router();


/*
* Init all routes
* @param app from exactly express module
*/

let initRoutes = (app) =>{
    router.get("/",  home.getHome);
    router.get("/messenger", home.getMessenger);
    router.get("/login-register",  auth.getLoginRegiter);
    router.get("/logout", auth.getLogout);
    router.post("/register", authValid.register,  auth.postregister);

    return app.use("/", router);
};

module.exports = initRoutes;