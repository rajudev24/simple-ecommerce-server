import { Schema, model } from "mongoose";
import { IShoe, ShoeModel } from "./shoe.interface";

const ShoeSchema = new Schema<IShoe>(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Shoe = model<IShoe, ShoeModel>("Shoe", ShoeSchema);
