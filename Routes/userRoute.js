const express = require("express");
const router = express.Router();
const User = require("../Models/userModule");

router.post('/register',async (req,res)=>{
    try{
        let {firstname,lastname,mobilenumber,address,department}=req.body;
        let user = await User.findOne({"firstname":firstname});

        if(user==null){
            user = new User()
            user.firstname=firstname;
            user.lastname=lastname;
            user.mobilenumber=mobilenumber;
            user.address=address;
            user.department=department;
            user.save();
           console.log(user);
            res.json({status:true,message:"UserRegistered Successfully",data:user});
        }
        else{
            res.json({status:false,message:"User Already Registered"});
        }
    }
    catch(err){
        console.log(err);
        res.json({status:false,message:"Something went wrong"});
    }

})
router.patch('/update',async(req,res)=>{
    try{
       
        let data = req.body.id;
       let user = await User.updateOne({"_id":data})
       if(user){
         res.json({status:true,message:"Firstname Updated Successfully"});
       }
       else{
         res.json({status:false,message:"Firstname Cannot be Updated"});
       }   
    }catch(err){
        console.log(err);
        res.json({status:false,message:"Something went wrong"});

    }
})

router.delete('/delete',async(req,res)=>{
    try{
        let data = req.body.id;
        let user = await User.deleteOne({"_id":data});
        if(user){
            res.json({status:true,message:"Deleted Successfully"});
        }
        else{
            res.json({status:false,message:"Cannot Delete.Please try again"});
        }
       
    }catch(err){
        console.log(err);
        res.json({status:false,message:"Something went wrong"});
        
    }
})

router.get('/list',async(req,res)=>{
    try{
        let userid=req.body.id;
        let user = await User.find({"_id":userid}).sort({created_date: -1});
        if(user){
            res.json({status:true,data:user})
        }
        else{
            res.json({status:false,message:"No list are found"});
        }
       
    }catch(err){
        console.log(err);
        res.json({status:false,message:"Something went wrong"});
        
    }
})
module.exports = router;