
const { sequelize, DataTypes } = require("../config/db");

    const User= sequelize.define("users",{
        id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           allowNull:false,
           autoIncrement:true
        },
        email:{
            type: DataTypes.STRING(32),
            allowNull:false
        },
        password:{
            type: DataTypes.STRING(200),
            allowNull:false
        }
    })


module.exports={
        User
}