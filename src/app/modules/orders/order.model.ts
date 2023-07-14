import { Schema, model } from "mongoose";
import { IOrder, OrderModel } from "./order.interface";

const orderSchema = new Schema<IOrder>({
  email: { type: String, required: true },
  title: { type: String, required: true },
  productId: { type: String, required: true },
});

export const Order = model<IOrder, OrderModel>("Order", orderSchema);
