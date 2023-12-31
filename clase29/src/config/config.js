import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  mongo_uri: process.env.MONGO_URI,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
};
