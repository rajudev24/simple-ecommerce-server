import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ShoeRoutes } from "../modules/shoe/shoe.route";
import { OrderRoutes } from "../modules/orders/order.route";

const router = express.Router();

// Applications Routes

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/shoe",
    route: ShoeRoutes,
  },
  {
    path: "/order",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
