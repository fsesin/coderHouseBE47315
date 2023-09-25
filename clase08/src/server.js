import express from "express";
import usersRouter from "./routes/users.router.js";
import productsRouter from "./routes/products.router.js";
import ordersRouter from "./routes/orders.router.js";
import { __dirname } from "./utils.js";

const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// routes
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
