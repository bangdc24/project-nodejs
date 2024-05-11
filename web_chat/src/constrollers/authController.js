import { body, validationResult } from "express-validator";
import {auth} from "./../services/index";

let getLoginRegiter = (req, res) => {  
    return res.render("auth/loginRegister");
};

let getLogout = (req, res) => {  
    return res.render("auth/logout", {
        errors: req.flash("errors"),
        success: req.flash("success")
    });
};

let postregister = (req, res) => {  

    let errorArr = [];

    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped())
        errors.forEach(item =>{
            errorArr.push(item.msg);
        });
        req.flash("errors");
        return res.redirect("/logout");
    }
    try {
        let createUserSuccess = auth.register(req.body.email, req.body.gender, req.body.password,req.get("host"));
        successArr.push(createUserSuccess);
      
        req.flash("success", successArr);
        return res.redirect("/logout");
      } catch (error) {
        errorArr.push(error);
        req.flash("errors", errorArr);
        return res.redirect("/logout");
      }
};

module.exports = {
    getLoginRegiter : getLoginRegiter,
    getLogout: getLogout,
    postregister: postregister
};