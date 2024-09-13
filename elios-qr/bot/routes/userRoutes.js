import express from "express";
import { registerUser, loginUser,updateprofile,changepassword,sendOTP, verifyOTP,info} from "../controllers/userController.js";
import multer from "multer";
import path from 'path';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/profileupdate", upload.single('profile_pic'), updateprofile);
router.post('/changepassword', changepassword);
router.post('/otpsend',sendOTP);
router.post('/otpverify',verifyOTP);
router.post('/files',upload.single('upload_file'),info);

export default router;
