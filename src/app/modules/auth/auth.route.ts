import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";
import { AuthController } from "./auth.controller";
const router = express.Router();

router.post(
  "/signup",
  validateRequest(AuthValidation.createUserZodSchema),
  AuthController.createUser
);

router.post(
  "/login",
  validateRequest(AuthValidation.loginUserZodSchema),
  AuthController.loginUser
);

export const AuthRoutes = router;
