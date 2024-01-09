import express from "express";
import { logger } from "./utils/logger.js";
const app = express();

logger.fatal("Probando error");

app.get("/simple", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  res.send(`La suma simple es ${sum}`);
});

app.get("/compleja", (req, res) => {
  let sum = 0;
  for (let i = 0; i < 5e8; i++) {
    sum += i;
  }
  res.send(`La suma compleja es ${sum}`);
});

app.listen(8080, () => {
  logger.information("Escuchando al puerto 8080 con logger");
});
