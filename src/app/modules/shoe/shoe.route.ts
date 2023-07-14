import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ShoeValidation } from "./shoe.validation";
import { ShoeController } from "./shoe.controller";
const router = express.Router();

router.post(
  "/create-shoe",
  validateRequest(ShoeValidation.createShoeZodSchema),
  ShoeController.createShoe
);

router.get("/allshoes", ShoeController.getAllShoes);
router.post(
  "/review",
  validateRequest(ShoeValidation.createReviewZodSchema),
  ShoeController.createReview
);

export const ShoeRoutes = router;
