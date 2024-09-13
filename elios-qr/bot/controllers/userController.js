import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
import { OPERATION_SUCCESS, OPERATION_FAILED } from "../function/response.js";
import logger from "../config/logger.js";
import Users from "../models/User.js";
import fs from "fs";
import csvParser from "csv-parser";


dotenv.config();

export const registerUser = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  const service_module = "User Registration";
  try {
    let user = await Users.findOne({ where: { email } });

    if (user) {
      logger.info("User already exists", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("User already exists"));
    }

    user = new Users({
      firstname,
      lastname,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 240 },
      (err, token) => {
        if (err) throw err;
        logger.info("User registered successfully", {
          service: service_module,
        });
        res.json(OPERATION_SUCCESS("User registered successfully", { token }));
      }
    );
  } catch (err) {
    logger.error("Caught exception in user registration", {
      service: service_module,
      errors: err.message,
    });
    res.status(500).json(OPERATION_FAILED("Server error", err.message));
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const service_module = "User Login";
  try {
    let user = await User.findOne({ where: { email } });

    if (!user) {
      logger.info("Invalid credentials", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("Invalid credentials"));
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      logger.info("Invalid credentials", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("Invalid credentials"));
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        logger.info("User logged in successfully", { service: service_module });
        res.json(OPERATION_SUCCESS("User logged in successfully", { token }));
      }
    );
  } catch (err) {
    logger.error("Caught exception in user login", {
      service: service_module,
      errors: err.message,
    });
    res.status(500).json(OPERATION_FAILED("Server error", err.message));
  }
};

export const updateprofile = async (req, res) => {
  try {
    const { email, newfirstname, newlastname } = req.body;

    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({
        message: "User does not exist, cannot upload profile picture",
      });
    }

    if (req.file) {
      const profilepath = req.file.path;
      const fileBuffer = fs.readFileSync(profilepath);
      const base64Image = fileBuffer.toString("base64");

 
      const ProfileData = await user.update(update_obj, {
        where: { email: email },
      });

      res
        .status(201)
        .json({ status: "created successfully", data: ProfileData });
    } else {
      let update_obj = {
        firstname: newfirstname,
        lastname: newlastname,
      };
      const ProfileData = await user.update(update_obj, {
        where: { email: email },
      });

      res
        .status(201)
        .json({ status: "created successfully", data: ProfileData });
    }
  } catch (error) {
    console.error("Error in updating profile:", error);
    res.status(500).send("Internal server error");
  }
};

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendOTP = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await Users.findOne({ userId: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const randomOTP = generateOTP();
    let update_obj = {
      otp: randomOTP,
      otpSentTime: String(Date.now()),
    };
    await user.update(update_obj, { where: { userId: userId } });

    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error in sending OTP:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyOTP = async (req, res) => {
  const { otp, userId } = req.body;

  try {
    const user = await Users.findOne({ userId: userId });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const otpSentTime = parseInt(user.otpSentTime);
    const currentTime = parseInt(Date.now());

    const timeDiff = currentTime - otpSentTime;
    const limit = 30 * 1000;

    if (timeDiff > limit) {
      return res.status(400).json({ message: "Otp expired!!" });
    }

    const OtpData = await Users.findOne({ where: { otp: otp } });

    if (!OtpData) {
      return res.status(404).json({ message: "OTP not found" });
    }

    if (OtpData.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    await user.update({ isVerified: true });

    return res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error in verifying OTP:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const changepassword = async (req, res) => {
  const { userIds, newPassword } = req.body;

  try {
    const user = await Users.findOne({ where: { id: userIds } });

    if (!userIds) {
      return res.status(404).json({ message: "User not found" });
    }

    // if (otps !== user.otp) {
    //   return res.status(400).json({ message: 'Invalid OTP' });
    // }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    let update_obj = {
      password: hashedPassword,
    };
    await user.update(update_obj, { where: { userId: userIds } });

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const info = async (req, res) => {
  const service_module = "User Registration";

  if (!req.file || !req.file.path) {
    return res.status(400).json(OPERATION_FAILED("CSV file is required"));
  }

  try {
    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csvParser())
      .on('data', async (row) => {
        try {
          if (!row.email || !row.firstname || !row.lastname || !row.password) {
            throw new Error('Invalid CSV format: Missing required fields');
          }

          let user = await Users.findOne({ where: { email: row.email } });

          if (user) {
            logger.info("User already exists", { service: service_module });

          } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(row.password, salt);

            user = await Users.create({
              firstname: row.firstname,
              lastname: row.lastname,
              email: row.email,
              password: hashedPassword,
            });

            logger.info("User registered successfully", { service: service_module });
          }

          results.push(user);
        } catch (err) {
          logger.error("Error processing CSV row", {
            service: service_module,
            errors: err.message,
          });
        }
      })
      .on('end', () => { 
        fs.unlinkSync(req.file.path);
        res.json(OPERATION_SUCCESS("Users registered successfully", { results }));
      });
  } catch (err) {
    logger.error("Caught exception in user registration", {
      service: service_module,
      errors: err.message,
    });
    res.status(500).json(OPERATION_FAILED("Server error", err.message));
  }
};
