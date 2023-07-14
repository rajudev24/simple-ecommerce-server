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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoeController = void 0;
const catchAsynce_1 = __importDefault(require("../../../shared/catchAsynce"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const shoe_service_1 = require("./shoe.service");
const createShoe = (0, catchAsynce_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const shoeData = __rest(req.body, []);
    const result = yield shoe_service_1.ShoeService.createShoe(shoeData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Shoe added successfully",
        data: result,
    });
}));
const getAllShoes = (0, catchAsynce_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield shoe_service_1.ShoeService.getAllShoes();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Retrive all Shoes successfully",
        data: result,
    });
}));
const createReview = (0, catchAsynce_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reviewData = __rest(req.body, []);
    const result = yield shoe_service_1.ShoeService.createReview(reviewData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Review added successfully",
        data: result,
    });
}));
exports.ShoeController = {
    createShoe,
    getAllShoes,
    createReview,
};
