import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Users = sequelize.define("User", {
  firstname: {
    type: DataTypes.STRING,
    allowNull:true,
    unique: true,
  },
  lastname:{
    type: DataTypes.STRING,
    allownull:true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  base64Image:{
    type:DataTypes.STRING(500000),
    allowNull:true
   },
   otps:{
    type:DataTypes.STRING,
    allowNull:true,
    unique:true
   },
   newPassword:{
    type:DataTypes.STRING,
    allowNull:true
   },
   userIds:{
    type:DataTypes.INTEGER,
   allowNull:true
   },
   otp: {
    type: DataTypes.STRING,
    allowNull: true,
   },
   otpSentTime:{
    type: DataTypes.TEXT,
    allowNull: true,
   }
});

export default Users;
