"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoeValidation = void 0;
const zod_1 = require("zod");
const SizeSchema = zod_1.z.object({
    size: zod_1.z.number({
        required_error: "size is required",
    }),
    price: zod_1.z.number({
        required_error: "price is required",
    }),
});
const createShoeZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "title is required ",
        }),
        brand: zod_1.z.string({
            required_error: "model is required ",
        }),
        sizes: zod_1.z.array(SizeSchema),
        colors: zod_1.z.array(zod_1.z.string({
            required_error: "colors is required",
        })),
        images: zod_1.z.array(zod_1.z.string({
            required_error: "images is required",
        })),
        reviews: zod_1.z.array(zod_1.z.string().optional()),
    }),
});
const createReviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({
            required_error: "Id is required",
        }),
        review: zod_1.z.string({
            required_error: "review is required",
        }),
    }),
});
exports.ShoeValidation = {
    createShoeZodSchema,
    createReviewZodSchema,
};
