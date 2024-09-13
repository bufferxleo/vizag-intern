import { encrypt, decrypt } from "./utils/encryptionUtils.js";
const testContent = "https://leaponboard.com/terms-of-service/";
const encryptedContent = encrypt(encodeURIComponent(testContent));
console.log("Encrypted:", encryptedContent);

const decryptedContent = decrypt(encryptedContent);
console.log("Decrypted:", decodeURIComponent(decryptedContent));
