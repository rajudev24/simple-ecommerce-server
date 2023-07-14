"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    title: { type: String, required: true },
    productId: { type: String, required: true },
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
