import mongoose from "mongoose";
import { IGenericErrorMessage } from "../interfaces/error";

const handleCastErroor = (error: mongoose.Error.CastError) => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: "Invalid Id",
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: "Cast error",
    errorMeesages: errors,
  };
};

export default handleCastErroor;
