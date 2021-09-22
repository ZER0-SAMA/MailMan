const express = require('express');
// import express from 'express'
const dotenv =require('dotenv');
const app = express();
const mongoose=require('mongoose');
const authRoute=require('./routes/auth');
const cors =require('cors')
const bodyParser=require('body-parser')
const Postroutes =require('./routes/post');
dotenv.config();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());

const PORT=8080 || process.env.PORT
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err.message));
mongoose.set('useFindAndModify',false)//ensures tha we don't get any warnings in the console

//middleware

app.use(express.json());


//route middleware
app.use('/post',Postroutes);
app.use('/api/user',authRoute);



app.listen(PORT,()=>console.log(`Server is live at ${PORT}` ));