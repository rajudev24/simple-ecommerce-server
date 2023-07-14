import httpStatus from "http-status";
import ApiError from "../../../errors/apiErrors";
import { IReview, IShoe } from "./shoe.interface";
import { Shoe } from "./shoe.model";

const createShoe = async (payload: IShoe): Promise<IShoe> => {
  const result = await Shoe.create(payload);
  return result;
};

const getAllShoes = async (): Promise<IShoe[] | null> => {
  const result = await Shoe.find();
  return result;
};

const createReview = async (paylaod: IReview): Promise<IShoe | null> => {
  const { id, review } = paylaod;
  const isExist = await Shoe.findById(id);
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "Product does not exist");
  }
  const result = Shoe.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: review } },
    { new: true }
  );
  return result;
};

export const ShoeService = {
  createShoe,
  getAllShoes,
  createReview,
};
