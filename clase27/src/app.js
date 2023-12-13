import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Probando CORS" });
});

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
