import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const QRCode = sequelize.define("QRCode", {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  qrImage: {
    type: DataTypes.TEXT, 
    allowNull: true,
  },
  signature: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isScanned: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default QRCode;
