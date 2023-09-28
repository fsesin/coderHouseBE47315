import express from "express";
import { engine } from "express-handlebars";
import { __dirname } from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import { Server } from "socket.io";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use("/api/views", viewsRouter);

const httpServer = app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

const socketServer = new Server(httpServer);

// connection - disconnect
socketServer.on("connection", (socket) => {
  //console.log(`Cliente conectado: ${socket.id}`);
  socket.on("disconnect", () => {
    //console.log(`Cliente desconectado: ${socket.id}`);
  });

  //socket.emit("welcome", "welcome to websocket");
  socket.on("newPrice", (value) => {
    //socket.emit("priceUpdated", value);
    //socketServer.emit("priceUpdated", value);
    socket.broadcast.emit("priceUpdated", value);
  });
});
