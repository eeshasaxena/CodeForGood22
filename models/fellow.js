const exp=require("express")
const userapp=exp.Router()
userapp.use(exp.json())
 
const user=require('./userSchema');

userapp.get('/',(req,res)=>{
   user.find().then((result)=>{
      res.send(result)
   }).catch((err)=>{
       console.log(err)
   })
});

module.exports=userapp;