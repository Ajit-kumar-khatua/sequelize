
const { sequelize, DataTypes } = require("../config/db");

const Order= sequelize.define("orders",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    userID:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING(32),
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type: DataTypes.STRING(50),
        allowNull:false,
        defaultValue:"Confirmed"
    }
    
})


module.exports={
    Order
}