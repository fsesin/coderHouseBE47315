import swaggerJSDoc from "swagger-jsdoc";
import __dirname from "./index.js";
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Adoptme API",
      version: "1.0.0",
      description: "API documentation for AdoptMe Project",
    },
  },
  apis: [`${__dirname}/docs/*.yaml`],
};

export const swaggerSetup = swaggerJSDoc(swaggerOptions);
