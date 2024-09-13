import express from "express";
import { connectDB } from "../config/db.js";
import saveRoutes from "..routes/saveRoutes.js";
import bodyParser from "body-parser";
import multer from "multer";

const upload = multer({ dest: "uploads" });
const app = express();
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); 
app.use(bodyParser.json({ limit: "50mb" })); 

connectDB();


app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));

app.post("/api/save",saveRoutes);
export default app;
