import express from "express";
import usersRouter from "./routes/users.router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRouter);

const PORT = 8080;

app.listen(PORT, () => {
  `Escuchando al puerto ${PORT}`;
});
