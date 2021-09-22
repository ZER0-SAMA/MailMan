const router=require('express').Router();
const getPosts =require('../controllers/post')
router.get("/",getPosts)

module.exports=router;