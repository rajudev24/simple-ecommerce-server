"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shoe = void 0;
const mongoose_1 = require("mongoose");
const ShoeSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    brand: { type: String, required: true },
    sizes: [
        {
            size: { type: Number },
            price: { type: Number },
        },
    ],
    colors: [{ type: String }],
    images: [{ type: String }],
    reviews: [{ type: String }],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Shoe = (0, mongoose_1.model)("Shoe", ShoeSchema);
