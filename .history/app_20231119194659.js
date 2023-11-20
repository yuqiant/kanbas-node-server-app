import express from 'express'
import Lab5 from "./lab5.js";
import Hello from "./hello.js"
import CourseRoutes from "./courses/routes.js";
import cors from "cors";
const app = express()
app.use(cors());
app.use(express.json());
Hello(app)
Lab5(app);
app.listen(4000)