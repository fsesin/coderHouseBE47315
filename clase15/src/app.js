import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import productsRouter from "./routes/products.router.js";
import usersRouter from "./routes/users.router.js";
import viewsRouter from "./routes/views.router.js";
import cartsRouter from "./routes/carts.router.js";
import clientsRouter from "./routes/clients.router.js";
//DB
import "./db/configDB.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// routes

app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/", viewsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/clients", clientsRouter);

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
