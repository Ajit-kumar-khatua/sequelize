
const { sequelize, DataTypes } = require("../config/db");
const { User } = require("./user.model");

    const Timeline= sequelize.define("timeline",{
        id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           allowNull:false,
           autoIncrement:true
        },
        userID:{
            type:DataTypes.INTEGER
        },
        prevState:{
            type:DataTypes.STRING,
        },
        newState:{
            type:DataTypes.STRING
        }
    })


    module.exports={
        Timeline
    }