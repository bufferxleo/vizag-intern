import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.CRYPTO_SECRET_KEY;

const generateSignature = (data, secret) => {
  return crypto.createHmac("sha256", secret).update(data).digest("hex");
};

const verifySignature = (data, secret, signature) => {
  const generatedSignature = generateSignature(data, secret);
  return generatedSignature === signature;
};

const encrypt = (value) => {
  try {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
      "aes-256-cbc",
      Buffer.from(secretKey, "hex"),
      iv
    );
    let encryptedValue = cipher.update(value, "utf8", "base64");
    encryptedValue += cipher.final("base64");
    return iv.toString("base64") + ":" + encryptedValue;
  } catch (error) {
    console.error("Encryption failed:", error);
    return null;
  }
};

const decrypt = (value) => {
  try {
    if (!value) return null;
    const parts = value.split(":");
    if (parts.length !== 2) {
      throw new Error("Invalid encrypted value format");
    }
    const iv = Buffer.from(parts[0], "base64");
    const encryptedValue = parts[1];
    const decipher = crypto.createDecipheriv(
      "aes-256-cbc",
      Buffer.from(secretKey, "hex"),
      iv
    );
    let decryptedValue = decipher.update(encryptedValue, "base64", "utf8");
    decryptedValue += decipher.final("utf8");
    return decryptedValue;
  } catch (err) {
    console.error("Decryption failed:", err);
    return null;
  }
};

export { generateSignature, verifySignature, encrypt, decrypt };
