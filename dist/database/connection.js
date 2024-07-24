"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
exports.default = mongoose.createConnection(process.env.MONGODB_URL);
