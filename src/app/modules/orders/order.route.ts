import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { Ordervalidation } from "./order.validation";
import { OrderController } from "./order.controller";
const router = express.Router();

router.post(
  "/create-order",
  validateRequest(Ordervalidation.CreateOrderZodSchema),
  OrderController.createOrder
);

export const OrderRoutes = router;
