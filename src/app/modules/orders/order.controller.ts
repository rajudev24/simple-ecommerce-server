import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsynce";
import sendresponse from "../../../shared/sendResponse";
import { IOrder } from "./order.interface";
import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...orderData } = req.body;
  const result = await OrderService.createOrder(orderData);

  sendresponse<IOrder>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Placed successfully",
    data: result,
  });
});

export const OrderController = {
  createOrder,
};
