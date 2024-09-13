import Save from "../models/save.js";
import { getSave } from "../utils/save.js";
import dotenv from "dotenv";

dotenv.config();

export const SaveFiles = async (req, res) => {
    const {text}=req.body;
    const service_module="Save Files";
}
