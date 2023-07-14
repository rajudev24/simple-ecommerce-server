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
exports.OrderService = void 0;
const config_1 = __importDefault(require("../../../config"));
const order_model_1 = require("./order.model");
const nodemailer_1 = __importDefault(require("nodemailer"));
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, title } = payload;
    const result = yield order_model_1.Order.create(payload);
    const transporter = nodemailer_1.default.createTransport({
        service: "gmail",
        auth: {
            user: config_1.default.email,
            pass: config_1.default.email_pass,
        },
    });
    const mailOptions = {
        from: config_1.default.email,
        to: email,
        subject: "New Order",
        text: `New order placed by ${email} for ${title}.`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
        }
        else {
            console.log("Email sent:", info.response);
        }
    });
    return result;
});
exports.OrderService = {
    createOrder,
};
