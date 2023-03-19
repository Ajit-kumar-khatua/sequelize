
const express=require("express")
const { sequelize } = require("./config/db")
const { orderRouter } = require("./routes/order.route")
const { userRouter } = require("./routes/user.route")


const app=express()
app.use(express.json())
app.use("/user",userRouter)
app.use("/orders",orderRouter)



app.listen(8080,async ()=>{
    try {
        await sequelize.authenticate()
        console.log("Connected to DB")
        
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running at 8080")
})