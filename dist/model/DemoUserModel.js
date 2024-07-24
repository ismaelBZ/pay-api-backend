"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connection_1 = __importDefault(require("./../database/connection"));
const demoSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, 'We need your email'],
        validate: {
            validator: function (email) {
                return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                    .test(email);
            },
            message: 'Please provide a valid email'
        },
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = connection_1.default.model('demo-users', demoSchema);
