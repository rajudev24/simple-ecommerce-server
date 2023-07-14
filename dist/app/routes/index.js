"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const shoe_route_1 = require("../modules/shoe/shoe.route");
const order_route_1 = require("../modules/orders/order.route");
const router = express_1.default.Router();
// Applications Routes
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/shoe",
        route: shoe_route_1.ShoeRoutes,
    },
    {
        path: "/order",
        route: order_route_1.OrderRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
