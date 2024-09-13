import express from 'express';
import auth from '../middleware/auth.js';
import { generateQRCode, scanQRCode } from '../controllers/qrController.js';

const router = express.Router();

router.post('/generate', auth, generateQRCode);
router.post('/scan', auth, scanQRCode);

export default router;

