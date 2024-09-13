import { Users, QRCode } from "../models/index.js";
import { generateCustomQRCode, readQRCode } from "../utils/qrUtils.js";
import { verifySignature, decrypt, generateSignature } from "../utils/encryptionUtils.js";
import dotenv from "dotenv";
import fs from "fs";
import { OPERATION_SUCCESS, OPERATION_FAILED } from "../function/response.js";
import logger from "../config/logger.js";

dotenv.config();
export const generateQRCode = async (req, res) => {
  const service_module = 'Generate QR Code';
  try {
    const { content } = req.body;
    const user = await Users.findByPk(req.user.id);
    const secret = process.env.JWT_SECRET;

    const qrImagePath = await generateCustomQRCode(content, user.id, secret);
    const qrImageBase64 = fs.readFileSync(qrImagePath, { encoding: "base64" });
    const signature = generateSignature(content, secret);

    const qrCodeData = await QRCode.create({
      content,
      userId: user.id,
      qrImage: qrImageBase64,
      signature,
      isScanned: false,
    });

    res.sendFile(qrImagePath, (err) => {
      if (err) {
        logger.error("Error sending QR code image", { service: service_module, errors: err.message });
        return res.status(500).json(OPERATION_FAILED("Server error"));
      } else {
        logger.info("QR code generated successfully", { service: service_module });
      }
    });
  } catch (err) {
    logger.error("Error generating QR code", { service: service_module, errors: err.message });
    return res.status(500).json(OPERATION_FAILED("Server error", err.message));
  }
};


export const scanQRCode = async (req, res) => {
  const service_module = 'Scan QR Code';
  try {
    const imagePath = req.file.path;
    const secret = process.env.JWT_SECRET;

    logger.info("Scanning QR Code from:", { service: service_module, imagePath });

    const encryptedQRCodeContent = await readQRCode(imagePath);

    if (!encryptedQRCodeContent) {
      logger.error("No content found in the scanned QR code", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("Invalid QR Code"));
    }

    const decryptedQRCodeContent = decrypt(encryptedQRCodeContent);
    if (!decryptedQRCodeContent) {
      logger.error("Error decrypting QR code content", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("Invalid QR Code"));
    }

    let parsedData;
    try {
      parsedData = JSON.parse(decodeURIComponent(decryptedQRCodeContent));
    } catch (parseError) {
      logger.error("Error parsing decrypted QR code content", { service: service_module, errors: parseError.message });
      return res.status(400).json(OPERATION_FAILED("Invalid QR Code"));
    }

    if (!parsedData) {
      logger.error("Decrypted QR code content is empty or invalid", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("Invalid QR Code"));
    }

    const { content, signature, userId } = parsedData;
    const isValid = verifySignature(content, secret, signature);

    if (!isValid) {
      logger.error("Signature verification failed", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("Invalid QR Code"));
    }

    logger.info("Signature verified successfully", { service: service_module, signature });

    const user = await User.findByPk(userId);
    if (!user) {
      logger.error("User not found for the given userId", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("Invalid QR Code"));
    }

    const qrCodeData = await QRCode.findOne({ where: { content, userId } });
    if (!qrCodeData) {
      logger.error("QR Code data not found", { service: service_module });
      return res.status(400).json(OPERATION_FAILED("Invalid QR Code"));
    }

    await qrCodeData.update({ isScanned: true });
    logger.info("QR code scanned successfully", { service: service_module, signature });
    return res.status(200).json(OPERATION_SUCCESS("QR code scanned successfully", {
      content: qrCodeData.content,
      userId: qrCodeData.userId,
      isScanned: qrCodeData.isScanned,
      signature: qrCodeData.signature,
    }));
  } 
  catch (err) {
    logger.error("Error processing QR code", { service: service_module, errors: err.message });
    return res.status(500).json(OPERATION_FAILED("Server error", err.message));
  }
};


