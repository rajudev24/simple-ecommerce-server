import mongoose from "mongoose";
import { Model } from "mongoose";

export type IRegisterUser = {
  _id: mongoose.ObjectId;
  name: string;
  email: string;
  role: "user";
  password: string;
};

export interface ILoginUser {
  email: string;
  password: string;
}
export type ILoginResponse = {
  accessToken: string;
  refreshToken?: string;
};

// Static Method
export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IRegisterUser, "password" | "role" | "_id">>;
  isPasswordMatched(
    currentPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IRegisterUser>;
