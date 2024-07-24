"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const DemoUserController_1 = __importDefault(require("../controller/DemoUserController"));
const ContactController_1 = __importDefault(require("./../controller/ContactController"));
const route = express_1.default.Router();
route.post("/request-demo", DemoUserController_1.default);
route.post('/contact', ContactController_1.default);
module.exports = route;
