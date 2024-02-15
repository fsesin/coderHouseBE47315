import express from "express";
// import coursesRouter from "./routes/courses.router.js";
// import usersRouter from "./routes/users.router.js";
import authRouter from "./routes/auth.router.js";
import "./config/db.config.js";
import cookieParser from "cookie-parser";
import {
  __dirname,
  generateToken,
  hashData,
  compareData,
  transporter,
} from "./utils/index.js";
import usersRouter from "./routes/users.router.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
const app = express();
console.log("dirname", __dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// routes
app.use("/", viewsRouter);
app.use("/api/users", usersRouter);
// app.use("/api/courses", coursesRouter);
app.use("/api/auth", authRouter);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
