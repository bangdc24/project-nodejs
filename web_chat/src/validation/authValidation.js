import {check} from "express-validator";
import { transValidation } from "../../lang/vi";
 
let register = [
    check("email", transValidation.email_incorrect)
        .isEmail()
        .trim(),
    check("password", transValidation.password_incorrect)
        .isLength({min : 8 , })
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-]).{8,}$/)
    ,
    check("password_confirmation", transValidation.password_confirmation_incorrect)
        .custom((value, {req}) => {
            return value === req.body.password;
        })
];

module.exports = {
    register: register
}