"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ordervalidation = void 0;
const zod_1 = require("zod");
const CreateOrderZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: " email is required",
        }),
        title: zod_1.z.string({
            required_error: " title is required",
        }),
        productId: zod_1.z.string({
            required_error: " product id is required",
        }),
    }),
});
exports.Ordervalidation = {
    CreateOrderZodSchema,
};
