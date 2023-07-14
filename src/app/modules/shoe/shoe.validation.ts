import { z } from "zod";

const SizeSchema = z.object({
  size: z.number({
    required_error: "size is required",
  }),
  price: z.number({
    required_error: "price is required",
  }),
});

const createShoeZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "title is required ",
    }),
    brand: z.string({
      required_error: "model is required ",
    }),
    sizes: z.array(SizeSchema),
    colors: z.array(
      z.string({
        required_error: "colors is required",
      })
    ),
    images: z.array(
      z.string({
        required_error: "images is required",
      })
    ),
    reviews: z.array(z.string().optional()),
  }),
});

export const ShoeValidation = {
  createShoeZodSchema,
};
