import { Router } from "express";
import { deletePost, generateSummary, getAllPosts, getPost, savePosts, updatePost } from "../controller/summaryController.js";

const postRouter=Router(); 


postRouter
    .route("/")
    .post(savePosts)
    .get(getAllPosts);

    postRouter.route("/generate").post(generateSummary);
postRouter
    .route("/:id")
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

    export default postRouter;


