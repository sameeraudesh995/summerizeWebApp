import { fetchSummary } from "../utill/generateSummary.js";

let posts =[];

export async function savePost(req, res) { //req=server eken ena dewal, res= api ywana dewal
    const body = req.body;
    posts.push(body);
    res.json(body).status(201);
}
export async function getAllPosts (req, res){ //req=server eken ena dewal, res= api ywana dewal
    res.json(posts);
}

export async function updatePost (req, res) {
    const postID = req.params.id;
    const updatedPost = req.body;
    const index = posts.findIndex((post)=> post.id=== postID);
    if(index !== -1){
        posts [index] = updatedPost;
    res.json(posts[index]);
}else{
    res.send(404).json({message : "post not found"});
}

}

export async function deletePost (req, res) {
    const postID = req.params.id;
    console.log(postID);
    const post = posts.findIndex((post)=> post.id=== postID);
    if(post !== -1){
        posts.splice(post, 1);
    res.json({message : "Deleted"});
}else{
    res.send(404).json({message : "post not found"});
}
    
}
export async function getPost (req, res){ //call back function
    const postID =req.params.id;
    console.log(postID);
    const post = posts.find((post)=> post.id=== postID);
    if(post){
       res.json(post); 
    }
    else{
        res.status(404).json({message : "post not found"});
    }
  
}
export async function generateSummary(req, res){
    try {
        const generateReply = await fetchSummary(req.body.text)
    } catch (error) {
        
    }
 }