
const { Sequelize , DataTypes }=require("sequelize")
require("dotenv").config

const sequelize=new Sequelize("evaluation1","admin",process.env.password,{
    host: "localhost",
    dialect: "mysql"
})

module.exports={
    sequelize, DataTypes
}