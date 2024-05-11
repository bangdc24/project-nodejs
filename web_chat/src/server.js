import express from "express";
import ConnectDB from "./config/connectDB";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";

let app = express();

//connect mongodb
ConnectDB();

//config session
configSession(app);

// config view engine
configViewEngine(app);

//enable post data for request
app.use(bodyParser.urlencoded({extended: true}));
 
//enable flash message
app.use(connectFlash());
  
// init all routes
initRoutes(app);


let hostname = "localhost";
let port = 8080;


app.listen(port, hostname, () => {
    console.log(`Hello Dinh Cong Bang , I'm running at ${hostname}:${port}/`);
});