import express from "express";
import { __dirname } from "./utils/utils.js";
import config from "./config.js";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import messagesRouter from "./routes/messages.router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// routes
app.use("/api/messages", messagesRouter);
app.use("/", viewsRouter);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
