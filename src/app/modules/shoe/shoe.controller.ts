import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsynce";
import sendresponse from "../../../shared/sendResponse";
import { IReview, IShoe } from "./shoe.interface";
import httpStatus from "http-status";
import { ShoeService } from "./shoe.service";

const createShoe = catchAsync(async (req: Request, res: Response) => {
  const { ...shoeData } = req.body;
  const result = await ShoeService.createShoe(shoeData);

  sendresponse<IShoe>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Shoe added successfully",
    data: result,
  });
});

const getAllShoes = catchAsync(async (req: Request, res: Response) => {
  const result = await ShoeService.getAllShoes();

  sendresponse<IShoe[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Retrive all Shoes successfully",
    data: result,
  });
});
const createReview = catchAsync(async (req: Request, res: Response) => {
  const { ...reviewData } = req.body;
  const result = await ShoeService.createReview(reviewData);

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Review added successfully",
    data: result,
  });
});

export const ShoeController = {
  createShoe,
  getAllShoes,
  createReview,
};
