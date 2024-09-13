import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

const Save=sequelize.define("SAVE",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        },
    videopath:{
        type:DataTypes.TEXT,
        allowNull:false,
        },
    photopath:{
        type:DataTypes.TEXT,
        allowNull:false,
        },
    file:{
        type:DataTypes.TEXT,
        allowNull:false,
        },
    
    }
);
export default Save; 