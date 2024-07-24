"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connection_1 = __importDefault(require("../database/connection"));
const contactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: String,
    title: String,
    message: {
        type: String,
        required: true
    },
    upToDate: {
        type: Boolean,
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: Date
});
exports.default = connection_1.default.model('Contacts', contactSchema);
