const express=require('express');
const morgan=require('morgan');
const colors=require('colors');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
//config dot env 
dotenv.config();


//mongodb connection of config file
connectDB();

//rest object
const app=express();


//create middleware
app.use(express.json());
app.use(morgan('dev'));

//create 
app.get('/',(req,resp)=>{
    resp.status(200).send(
        {
            message:"Server Running"
        }
    )
})
//port 
const port=process.env.PORT;

//server listening 
app.listen(port,()=>{
    console.log(`Server is running on ${process.env.PORT} in ${process.env.NODE_MODE} mode`.bgGreen.white)
}) 