import  express, {json}  from "express";
//const express =require("express"); declare express

const app =express(); //create express instance 
const PORT = 5000;// introduce runing port

app.use(json());//req respone send json format 

let posts =[];
app.get("/posts",(req, res)=>{ //req=server eken ena dewal, res= api ywana dewal
    res.json(posts);
});

app.post("/posts",(req, res)=>{ //req=server eken ena dewal, res= api ywana dewal
    const body = req.body;
    posts.push(body);
    res.send(body);
});

app.get("/post/:id", (req, res)=>{ //call back function
    console.log(req, params.id);
});




app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`); // listent to responce of 5000 port
});
