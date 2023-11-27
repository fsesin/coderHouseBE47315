import mongoose from "mongoose";

const URI =
  "mongodb+srv://coderhouse:coderhouse@cluster0.sugvijj.mongodb.net/SegundaPI47315?retryWrites=true&w=majority";
mongoose
  .connect(URI)
  .then(() => console.log("Conectado a la bd"))
  .catch((error) => console.log(error));
