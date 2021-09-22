const router=require("express").Router();
const jwt =require("jsonwebtoken")
const User=require('../models/User'); //model
const { registerValidation,loginValidation } = require("../validation");
const bcrypt=require('bcryptjs')





   //user using model
router.post('/register',async(req,res)=>{
    const {error}=registerValidation(req.body)
     if(error)return res.status(400).send(error.details[0].message);
    
     const emailExist=await User.findOne({email:req.body.email})
    if(emailExist)return res.status(400).send("ALready exist email")

    //Password hasing
    const salt= await bcrypt.genSalt(10);
    const hashPassword =await bcrypt.hash(req.body.password,salt)

    const user =new User({ 
            name:req.body.name,
            email:req.body.email,    //json data coming from request body
            password:hashPassword
    });
    try{
        const saveUser=await user.save();
        res.send({user:user._id});
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
    
});

router.post('/login',async(req,res)=>{
    const {error}=loginValidation(req.body)
     if(error)return res.status(400).send(error.details[0].message); 
    
     const user=await User.findOne({email:req.body.email})
    if(!user)return res.status(400).send(" Email wrong")
    ///Password Check
    const validpass=await bcrypt.compare(req.body.password,user.password)
    if(!validpass)return res.status(400).send("Password not Correct")
    
    //Token
    const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);
    
    
    
    res.send("Logged IN")
});
 
module.exports=router;