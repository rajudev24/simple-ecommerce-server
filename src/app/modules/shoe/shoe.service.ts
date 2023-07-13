import { IShoe } from "./shoe.interface";
import { Shoe } from "./shoe.model";

const createShoe = async (payload: IShoe): Promise<IShoe> => {
  const result = await Shoe.create(payload);
  return result;
};

const getAllShoes = async (): Promise<IShoe[] | null> => {
  const result = await Shoe.find();
  return result;
};

export const ShoeService = {
  createShoe,
  getAllShoes,
};
