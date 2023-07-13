import { Model } from "mongoose";

export interface IShoe {
  title: string;
  brand: string;
  sizes: { size: number; price: number }[];
  colors: string[];
  images: [];
  reviews: [];
}

export type ShoeModel = Model<IShoe, object>;
