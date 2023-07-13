import { Schema, model } from "mongoose";
import config from "../../../config";
import bcrypt from "bcrypt";
import { IRegisterUser, UserModel } from "./auth.interface";

export const UserSchema = new Schema<IRegisterUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.statics.isUserExist = async function (
  email: string
): Promise<Pick<IRegisterUser, "password"> | null> {
  return await User.findOne({ email }, { password: 1, role: 1, _id: 1 });
};

UserSchema.statics.isPasswordMatched = async function (
  currentPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(currentPassword, savedPassword);
};

UserSchema.pre("save", async function (next) {
  // Hashing User Poassword
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

UserSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password; // Exclude password field from the response
  },
});

export const User = model<IRegisterUser, UserModel>("User", UserSchema);
