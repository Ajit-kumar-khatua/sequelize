const express= require("express")
const { authenticate } = require("../middleware/authentication.middleware")
const { sequelize } = require("../config/db")
const { Order } = require("../models/order.model")
const { Timeline } = require("../models/timeline.model")

const orderRouter=express.Router()

// orderRouter.use(authenticate)

orderRouter.get("/",async(req,res)=>{
    try {
       let data=await Order.findAll()
       res.send(data)
        
    } catch (error) {
       console.log(error) 
    }
})


orderRouter.post("/add",async (req,res)=>{
    let payload=req.body
    try {
        await sequelize.sync()
        await Order.create(payload)
        res.send("order Created Sucessfully")
        
    } catch (error) {
        console.log(error)
    }
})

orderRouter.patch("/update",async (req,res)=>{
    let {name,status}=req.body
    console.log(name,status)
    try {
        await Order.update({status:status},{
            where:{
               name:name
            }
        })
        await Timeline.update({newState:status})
      res.send("Data Updated Sucessfully")
        
    } catch (error) {
        console.log(error)
    }
})


module.exports={
    orderRouter
}