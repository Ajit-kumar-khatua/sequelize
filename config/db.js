
const { Sequelize , DataTypes }=require("sequelize")
require("dotenv").config

const sequelize=new Sequelize("products","admin","khatua456",{
    host: "database-1.cxgjsqtla1vy.ap-northeast-1.rds.amazonaws.com",
    dialect: "mysql"
})

module.exports={
    sequelize, DataTypes
}