import { Model } from "mongoose";

export interface IShoe {
  title: string;
  brand: string;
  sizes: { size: number; price: number }[];
  colors: string[];
  images: [];
  reviews: [];
}

export interface IReview {
  id: string;
  review: string;
}

export type ShoeModel = Model<IShoe, object>;
