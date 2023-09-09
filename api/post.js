import { Router } from "express";

const postRouter=Router(); 
let posts =[];


postRouter
    .route("/")
    .post((req, res)=>{ //req=server eken ena dewal, res= api ywana dewal
        const body = req.body;
        posts.push(body);
        res.send(body);
    })
    .get((req, res)=>{ //req=server eken ena dewal, res= api ywana dewal
        res.json(posts);
    });
postRouter
    .route("/:id")
    .get((req, res)=>{ //call back function
        const postID =req.params.id;
        console.log(postID);
        const post = posts.find((post)=> post.id=== postID);
        if(post){
           res.json(post); 
        }
        else{
            res.status(404).json({message : "post not found"});
        }
      
    })
    .delete((req, res)=>{
        const postID = req.params.id;
        console.log(postID);
        const post = posts.findIndex((post)=> post.id=== postID);
        if(post !== -1){
            posts.splice(post, 1);
        res.json({message : "Deleted"});
    }else{
        res.send(404).json({message : "post not found"});
    }
        
    })
    .put((req, res)=>{
        const postID = req.params.id;
        const updatedPost = req.body;
        const index = posts.findIndex((post)=> post.id=== postID);
        if(index !== -1){
            posts [index] = updatedPost;
        res.json(posts[index]);
    }else{
        res.send(404).json({message : "post not found"});
    }
    
    });
    export default postRouter;


