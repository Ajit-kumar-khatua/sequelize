
const express=require("express")
const { sequelize } = require("../config/db")
const { User } = require("../models/user.model")
const jwt= require("jsonwebtoken")


const userRouter= express.Router()

userRouter.post("/signup", async (req,res)=>{
     let payload= req.body
      
      try {
        await sequelize.sync()
        await User.create(payload)
        res.send("User created Sucessfully")
        
      } catch (error) {
          console.log(error)
      }
})

userRouter.post("/login",async( req,res)=>{
    let {email}= req.body
    try {
        await sequelize.sync()
        let user= await User.findAll({
            where:{
                email:email
            }
        })
        if(user==null){
            res.send({"msg":"Wrong Credentials"})

        }else{
            console.log(user[0].id)
            let token= jwt.sign({userID : user[0].id}, "masai")
            res.send({"msg":"Login Sucessful", token})
        }
        
    } catch (error) {
        console.log(error)
    }
})

module.exports={
    userRouter
}