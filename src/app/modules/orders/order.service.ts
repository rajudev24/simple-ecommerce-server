import config from "../../../config";
import { IOrder } from "./order.interface";
import { Order } from "./order.model";
import nodemailer from "nodemailer";

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const { email, title } = payload;
  const result = await Order.create(payload);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email,
      pass: config.email_pass,
    },
  });

  const mailOptions = {
    from: config.email,
    to: email,
    subject: "New Order",
    text: `New order placed by ${email} for ${title}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });

  return result;
};
export const OrderService = {
  createOrder,
};
