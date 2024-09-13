import Jimp from "jimp";
//import QrCode from "qrcode-reader";
import jsQR from 'jsqr';
import QRCode from "qrcode";
import path from "path";
import { fileURLToPath } from "url";
import { encrypt, generateSignature } from "./encryptionUtils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateCustomQRCode = async (content, userId, secret) => {
  try {
    const signature = generateSignature(content, secret);
    const data = JSON.stringify({ content, signature, userId });
    const encryptedContent = encrypt(encodeURIComponent(data));
    if (!encryptedContent) {
      throw new Error("Encryption failed");
    }
    const qrImagePath = path.join(__dirname, "..", "temp", `${userId}.png`);
    await QRCode.toFile(qrImagePath, encryptedContent, {
      errorCorrectionLevel: "H",
    });
    const qrImage = await Jimp.read(qrImagePath);
    const iconPath = path.join(__dirname, "..", "icons", "eye.png");
    const icon = await Jimp.read(iconPath);
    icon.resize(50, 50);
    const x = (qrImage.bitmap.width - icon.bitmap.width) / 2;
    const y = (qrImage.bitmap.height - icon.bitmap.height) / 2;
    qrImage.composite(icon, x, y, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacitySource: 1,
      opacityDest: 1,
    });
    await qrImage.writeAsync(qrImagePath);
    return qrImagePath;
  } catch (err) {
    console.error("Error generating custom QR code:", err);
    throw new Error("Could not generate custom QR code");
  }
};


const readQRCode = async (imagePath) => {
  try {
    const image = await Jimp.read(imagePath);
    const { data, width, height } = image.bitmap;
    const qrCode = jsQR(data, width, height);
    if (qrCode) {
      const decodedValue = qrCode.data;
      return decodedValue;
    } else {
      throw new Error("No QR code found in the image.");
    }
  } catch (err) {
    console.error("Error reading image:", err);
    throw new Error(`Error reading image: ${err.message}`);
  }
};


export { generateCustomQRCode, readQRCode };
