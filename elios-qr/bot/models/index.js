import Users from "./User.js";
import QRCode from "./QRCode.js";

Users.hasMany(QRCode, { foreignKey: "userId" });
QRCode.belongsTo(Users, { foreignKey: "userId" });

export { Users, QRCode };
