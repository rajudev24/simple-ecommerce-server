import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import routes from "./app/routes";

const app: Application = express();

app.use(cors());
app.use(cookieParser());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Applicate routes
app.use("/api/v1/", routes);

// Global Error Handler
app.use(globalErrorHandler);

// Handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api Not Found",
      },
    ],
  });
  next();
});

export default app;

//  Add below script for vercel deploy
// "start": "node dist/server.js",
//   "build": "tsc",
