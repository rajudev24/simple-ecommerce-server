import { Model } from "mongoose";

export interface IOrder {
  email: string;
  title: string;
  productId: string;
}

export type OrderModel = Model<IOrder, object>;
