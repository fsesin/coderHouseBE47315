import winston from "winston";
import config from "../config.js";
// export const logger = winston.createLogger({
//   transports: [
//     new winston.transports.Console({
//       level: "silly",
//       format: winston.format.combine(
//         winston.format.colorize(),
//         winston.format.simple()
//       ),
//     }),
//     new winston.transports.File({
//       level: "warn",
//       filename: "logs-file.log",
//       format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.prettyPrint()
//       ),
//     }),
//   ],
// });

const customLevels = {
  levels: {
    fatal: 0,
    warning: 1,
    information: 2,
  },
  colors: {
    fatal: "red",
    warning: "yellow",
    information: "green",
  },
};
// export const logger = winston.createLogger({
//   levels: customLevels.levels,
//   transports: [
//     new winston.transports.Console({
//       level: "information",
//       format: winston.format.combine(
//         winston.format.colorize({ colors: customLevels.colors }),
//         winston.format.simple()
//       ),
//     }),
//     new winston.transports.File({
//       level: "warning",
//       filename: "logs-file.log",
//       format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.prettyPrint()
//       ),
//     }),
//   ],
// });

export let logger;

if (config.environment === "production") {
  logger = winston.createLogger({
    levels: customLevels.levels,
    transports: [
      new winston.transports.File({
        level: "warning",
        filename: "logs-prod-file.log",
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.prettyPrint()
        ),
      }),
    ],
  });
} else {
  logger = winston.createLogger({
    levels: customLevels.levels,
    transports: [
      new winston.transports.Console({
        level: "information",
        format: winston.format.combine(
          winston.format.colorize({ colors: customLevels.colors }),
          winston.format.simple()
        ),
      }),
    ],
  });
}
