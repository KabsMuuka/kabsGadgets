import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

import http from "http";

const server = http.createServer(app);
// const path = require("path");
import { Server } from "socket.io";

import bodyParser from "body-parser";
import cors from "cors";
import sequelize from "./config/db.js";

import AdminUser from "./model/AdminUser.js";
import User from "./model/User.js";
//route/api
import refreshToken from "./route/api/refreshToken.js";
import registerUser from "./route/api/register.js";
import loginUser from "./route/api/loginUser.js";
import savePost from "./route/api/savePost.js";
import fetchPost from "./route/api/fetchPost.js";
import me from "./route/api/me.js";
import users from "./route/api/users.js";
//admin
import loginAdminUser from "./route/api/loginAdminUser.js";

// Middleware

//CORS
const corsOptions = {
  origin: "http://localhost:5173", // Frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers)
};
// Enable CORS for all routes

//app build
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildPath = path.join(__dirname, "client/build");
app.use(express.static(buildPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  (err) => {
    if (err) {
      res.status(500).send(err);
    }
  };
});

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static("public"));

// Routes/api
app.use("/api/refresh-token", refreshToken);
app.use("/api/me", me);
app.use("/api/register", registerUser);
app.use("/api/login", loginUser);
app.use("/api/savePost", savePost);
app.use("/api/fetchPost", fetchPost);
app.use("/api/users", users);

//admin
app.use("/api/adminLogin", loginAdminUser);

// Root endpoint
// Sync models (optional, usually done once during setup)
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Error syncing database:", err));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
