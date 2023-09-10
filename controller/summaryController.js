import { fetchSummary } from "../utill/generateSummary.js";

let posts = [];

export async function savePosts(req, res) {
  //spread operator
  const newSummary = { ...req.body, id: uuidv4().slice(0, 8) };
  posts.push(newSummary);
  res.json(newSummary).status(201);
}

export async function getAllPosts(req, res) {
  res.json(posts);
}

export async function updatePost(req, res) {
  const sumID = req.params.id;
  const updatedSummary = req.body;
  const index = posts.findIndex((post) => post.id === sumID);
  if (index !== -1) {
    posts[index] = { id: sumID, ...updatedSummary };
    res.json(posts[index]);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}

export async function deletePost(req, res) {
  const postID = req.params.id;
  const post = posts.findIndex((post) => post.id === postID);
  if (post !== -1) {
    posts.splice(post, 1);
    res.json({ message: "Deleted" });
  } else {
    res.send(404).json({ message: "Post Not Found" });
  }
}

export async function getPost(req, res) {
  const postID = req.params.id;
  console.log(postID);
  const post = posts.find((post) => post.id === postID);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post Not Found" });
  }
}

export async function generateSummary(req, res) {
  try {
    const generatedReply = await fetchSummary(req.body.text);
    res.status(200).json({ data: generatedReply });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
} 