import express, { json } from "express";
import morgan from "morgan";
import postRouter from "./api/summary.js";
import { config } from "dotenv";
import cors from "cors";

config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/summary", postRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});