import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import routes from "./routes/ToDoRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());

app.use(cors({
  origin: "https://mernstack-todo-app-frontend.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((Error) => console.log(Error));

app.use(routes);

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
