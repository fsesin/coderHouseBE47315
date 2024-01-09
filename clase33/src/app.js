import express from "express";
import operaciones from "npm47315";
const app = express();
app.get("/", (req, res) => {
  const resultadoSuma = operaciones.sumar(2, 3);
  res.send(resultadoSuma);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 change");
});
