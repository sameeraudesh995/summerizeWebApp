import  express, {json}  from "express";
//const express =require("express"); declare express
import morgan from "morgan";
import postRouter from "./api/post.js";

const app =express(); //create express instance 
const PORT = 5000;// introduce runing port
app.use(json()); //req respone send json format 
app.use(morgan("dev"))

app.use('/api/v1/posts', postRouter);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`); // listent to responce of 5000 port
});
