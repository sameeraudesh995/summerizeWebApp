import  express, {json}  from "express";
//const express =require("express"); declare express
import morgan from "morgan";
import postRouter from "./api/summary.js";
import { config } from "dotenv";
config({path:"./config.env"})

const PORT = process.env.PORT || 3000;

const app =express(); //create express instance 
app.use(json()); //req respone send json format 
app.use(morgan("dev"))

app.use('/api/v1/summary', postRouter);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`); // listent to responce of 5000 port
});
