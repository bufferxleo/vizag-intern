import express from "express";
import { connectDB } from "../config/db.js";
import userRoutes from "../routes/userRoutes.js";
import qrRoutes from "../routes/qrRoutes.js";
import bodyParser from "body-parser";
import multer from "multer";

const upload = multer({ dest: "uploads" });
const app = express();
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true })); 
app.use(bodyParser.json({ limit: "50mb" })); 

connectDB();


app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));


app.use("/api/users", userRoutes);
app.use("/api/qrcodes", upload.single("qrImage"), qrRoutes);

export default app;
