import express from 'express';
import DemoUserController from '../controller/DemoUserController';
import ContactController from './../controller/ContactController';

const route = express.Router();

route.post("/request-demo", DemoUserController);

route.post('/contact', ContactController)

module.exports = route;