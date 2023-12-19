import { Router } from "express";
import { transporter } from "../utils/nodemailer.js";
import { __dirname } from "../utils/utils.js";
import { client } from "../utils/twilio.js";
import config from "../config.js";
const router = Router();

router.post("/", async (req, res) => {
  const { first_name, last_name, email, message } = req.body;
  const mailOptions = {
    from: "FaridCoder",
    to: email,
    subject: `Bienvenido ${first_name} ${last_name}`,
    text: message,
  };
  await transporter.sendMail(mailOptions);
  res.send("Email enviado");
});

router.get("/", async (req, res) => {
  const mailOptions = {
    from: "FaridCoder",
    to: [
      "cyfdelcaribe@gmail.com",
      "jr@bitbyte.com.ar",
      "bebo.garavano@gmail.com",
      "bulgachpriscila@gmail.com",
    ],
    subject: "Prueba Nodemailer",
    //text: "Primera prueba email",
    html: "<h1>Primer h1 de prueba nodemailer</h1>",
    attachments: [{ path: __dirname + "/crypto.jpeg" }],
  };
  await transporter.sendMail(mailOptions);
  res.send("Email enviado");
});

// twilio
router.get("/twilio", async (req, res) => {
  const options = {
    body: "TWILIO WHATSAPP PRUEBA",
    to: "whatsapp:+5491128838399",
    from: config.twilio_whatsapp_number,
  };
  await client.messages.create(options);
  res.send("TWILIO");
});

export default router;
