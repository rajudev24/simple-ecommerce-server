"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const shoe_validation_1 = require("./shoe.validation");
const shoe_controller_1 = require("./shoe.controller");
const router = express_1.default.Router();
router.post("/create-shoe", (0, validateRequest_1.default)(shoe_validation_1.ShoeValidation.createShoeZodSchema), shoe_controller_1.ShoeController.createShoe);
router.get("/allshoes", shoe_controller_1.ShoeController.getAllShoes);
router.post("/review", (0, validateRequest_1.default)(shoe_validation_1.ShoeValidation.createReviewZodSchema), shoe_controller_1.ShoeController.createReview);
exports.ShoeRoutes = router;
