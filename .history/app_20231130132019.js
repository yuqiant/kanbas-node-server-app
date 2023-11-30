import express from 'express'
import Lab5 from "./lab5.js";
import Hello from "./hello.js"
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from './modules/routes.js';
import UserRoutes from "./users/routes.js";

import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import cors from "cors";
import "dotenv/config";
const app = express()
app.use(cors());
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000)