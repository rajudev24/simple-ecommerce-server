import { Request, Response } from "express";
import sendresponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { AuthService } from "./auth.service";
import catchAsync from "../../../shared/catchAsynce";
import { IRegisterUser } from "./auth.interface";
import config from "../../../config";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...user } = req.body;
  const result = await AuthService.createUser(user);

  sendresponse<IRegisterUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Account created successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;

  const result = await AuthService.loginUser(loginData);

  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === "production",
    httpOnly: true,
  };
  res.cookie("refreshToken", refreshToken, cookieOptions);

  sendresponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Logged in successfully",
    data: others,
  });
});

export const AuthController = {
  createUser,
  loginUser,
};
