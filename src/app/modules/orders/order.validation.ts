import { z } from "zod";

const CreateOrderZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: " email is required",
    }),
    title: z.string({
      required_error: " title is required",
    }),
    productId: z.string({
      required_error: " product id is required",
    }),
  }),
});

export const Ordervalidation = {
  CreateOrderZodSchema,
};
