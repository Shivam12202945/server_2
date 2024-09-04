


import express, { Router } from 'express';
import env from 'dotenv';
import cors from 'cors';


import { Connect } from "./Models/Connection.js";
import {router} from "./Routes/Router.js";
import cookieParser from 'cookie-parser';



const app = express();
env.config();
app.use(express.json());



app.use(cors({
    origin: true,
    credentials: true
}));


app.get('/home', (req, res)=>{
    res.send("This is the home page");
})



const cookiesecret = process.env.COOKIE_SECRET;
app.use(cookieParser(cookiesecret));


const url = process.env.MONGOOSE_URL;
Connect(url);


app.use('/', router);


const port = process.env.PORT;
app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
});