import  express  from "express";
//const express =require("express"); declare express

const app =express(); //create express instance 
const PORT = 5000;// introduce runing port

let posts =[];

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`); // listent to responce of 5000 port
});
