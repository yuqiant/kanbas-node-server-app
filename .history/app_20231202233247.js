import "dotenv/config";
import express from 'express'
import Lab5 from "./lab5.js";
import Hello from "./hello.js"
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from './modules/routes.js';
import UserRoutes from "./users/routes.js";
import session from "express-session";
import mongoose from "mongoose";
// const DB_CONNECTION_STRING = "mongodb+srv://yuqiant07:<super123>@cluster0.egv3uho.mongodb.net/?retryWrites=true&w=majority"
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'

mongoose.connect(CONNECTION_STRING);
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import cors from "cors";
import "dotenv/config";
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(
    session(sessionOptions)
);

app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000)
// app.listen(4000);
