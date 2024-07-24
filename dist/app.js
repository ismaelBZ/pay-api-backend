"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const app = express();
app.use(cors({
    origin: [
        "http://127.0.0.1:5173",
        "http://192.168.0.110:5173",
        "http://localhost:5173"
    ],
    optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
module.exports = app;
