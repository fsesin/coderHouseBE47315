import express from "express";
import { fork } from "child_process";
const app = express();
let visitas = 0;
app.get("/", (req, res) => {
  res.send(`Esta es la visita ${++visitas}`);
});

function sumar() {
  let suma = 0;
  for (let i = 0; i < 5e9; i++) {
    suma += i;
  }
  return suma;
}

app.get("/calculo-bloq", (req, res) => {
  const resultado = sumar();
  res.send(`El resultado de la suma es ${resultado}`);
});

app.get("/calculo-nobloq", (req, res) => {
  const childProcess = fork("./src/childProcess.js");
  childProcess.send("saludos");
  childProcess.on("message", (resultado) => {
    res.send(`El resultado de la suma es ${resultado}`);
  });
});

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
