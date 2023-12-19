import express from "express";
import { generateUser } from "./faker.js";
const app = express();

app.get("/api/users", (req, res) => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = generateUser();
    users.push(user);
  }
  res.json({ users });
});

app.listen(8080, () => {
  console.log("Escuchando al puerto 8080");
});
