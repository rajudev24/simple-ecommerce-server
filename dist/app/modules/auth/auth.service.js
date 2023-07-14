"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiErrors_1 = __importDefault(require("../../../errors/apiErrors"));
const auth_model_1 = require("./auth.model");
const jwtHealpers_1 = require("../../../helpers/jwtHealpers");
const config_1 = __importDefault(require("../../../config"));
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_model_1.User.create(payload);
    return result;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // Check user exist
    const isUserExist = yield auth_model_1.User.isUserExist(email);
    if (!isUserExist) {
        throw new apiErrors_1.default(http_status_1.default.NOT_FOUND, "User does not exist");
    }
    // Macth Password
    const isPasswordMatched = yield auth_model_1.User.isPasswordMatched(password, isUserExist === null || isUserExist === void 0 ? void 0 : isUserExist.password);
    if (!isPasswordMatched) {
        throw new apiErrors_1.default(http_status_1.default.UNAUTHORIZED, "Password is incorrect");
    }
    // Create Access Token & Refresh Token
    const { _id, role } = isUserExist;
    const accessToken = jwtHealpers_1.jwtHelpers.createToken({
        _id,
        role,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHealpers_1.jwtHelpers.createToken({
        _id,
        role,
    }, config_1.default.jwt.refresh_secrect, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
});
exports.AuthService = {
    createUser,
    loginUser,
};
