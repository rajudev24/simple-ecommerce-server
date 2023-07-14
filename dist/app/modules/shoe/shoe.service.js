"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoeService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiErrors_1 = __importDefault(require("../../../errors/apiErrors"));
const shoe_model_1 = require("./shoe.model");
const createShoe = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shoe_model_1.Shoe.create(payload);
    return result;
});
const getAllShoes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shoe_model_1.Shoe.find();
    return result;
});
const createReview = (paylaod) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, review } = paylaod;
    const isExist = yield shoe_model_1.Shoe.findById(id);
    if (!isExist) {
        throw new apiErrors_1.default(http_status_1.default.NOT_FOUND, "Product does not exist");
    }
    const result = shoe_model_1.Shoe.findOneAndUpdate({ _id: id }, { $push: { reviews: review } }, { new: true });
    return result;
});
exports.ShoeService = {
    createShoe,
    getAllShoes,
    createReview,
};
