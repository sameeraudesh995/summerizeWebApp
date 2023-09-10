import { Router } from "express";
import { deletePost, generateSummary, getAllPosts, getPost, savePost, updatePost } from "../controller/summaryController.js";

const postRouter=Router(); 


postRouter
    .route("/")
    .post(savePost)
    .get(getAllPosts);

    postRouter.route("/generate").post(generateSummary);
postRouter
    .route("/:id")
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);
    export default postRouter;


