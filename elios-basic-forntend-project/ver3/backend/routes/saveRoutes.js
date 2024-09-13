import express from 'express';
import { SaveFiles } from '../controllers/saveControllers.js';

const router=express.Router();

router.post("/save",SaveFiles);
export default router;
