import UserModel from "./../models/UserModel";
import bcrypt from "bcrypt";
import { resolve } from "bluebird";
import { models } from "mongoose";
import uuid from "uuid";
import {transError, transSuccess, transMail} from "./../../lang/vi";
import  sendMail from "./../config/mailer";


let saltRounds = 7;

let logout = async (email, password, protocol, host) => {

    let salt = bcrypt.genSaltSync(7);

    let userItem = {
        username: email.split("@")[0],
        local: {
            email: email,
            password: bcrypt.hashSync(password, salt),
            verifyToken: uuid()
        }
    };

    let user = await UserModel.createnew(userItem);
    let linkVerify= `${protocol}://${host}/verify/${user.local.verifyToken}`;
    //send email
    sendMail (email, transMail.subject, transMail.template(linkVerify))
        .then(success =>{
            resolve(transSuccess.userCreated(user.local.email));
        }) 
        .catch( async(error) => {
            //remove user
            await UserModel.removeById (user._id);
            console.log(error);
            reject: (transMail.send_failed);
        })
};

module.exports = {
    logout: logout  
};