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

app.get("/posts/:id", (req, res)=>{ //call back function
    const postID =req.params.id;
    console.log(postID);
    const post = posts.find((post)=> post.id=== postID);
    if(post){
       res.json(post); 
    }
    else{
        res.status(404).json({message : "post not found"});
    }
  
});
app.delete("/posts/:id", (req, res)=>{
    const postID = req.params.id;
    console.log(postID);
    const post = posts.findIndex((post)=> post.id=== postID);
    const deletePost = posts.splice(post, 1);
    res.json({message : "Deleted"});
});




app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`); // listent to responce of 5000 port
});
