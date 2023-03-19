const jwt= require("jsonwebtoken")

const authenticate= (req,res,next)=>{
      let token= req.headers.authorization
      if(token){
        try {
            const decoded= jwt.verify(token,"masai")
            if(decoded){
                const userID=decoded.userID
                req.body.userID=userID
                next()
            }else{
                res.send("please login first")
            }
        } catch (error) {
            console.log(error.message)
        }

    }else{
        res.send({"msg":"Please Login First"})
    }
}

module.exports={
    authenticate
}