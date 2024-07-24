"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DemoUserModel_1 = __importDefault(require("./../model/DemoUserModel"));
const DemoController = async (req, res) => {
    const email = req.body;
    try {
        const userExists = await DemoUserModel_1.default.find(email);
        if (userExists.length > 0) {
            res.status(400)
                .json({
                status: 400,
                message: 'Failed! Try other email',
            })
                .end();
            return;
        }
        const demoUser = new DemoUserModel_1.default(email);
        demoUser.save();
        res.status(200)
            .set('Location', `/demo-users/${demoUser._id}`)
            .json({
            status: 200,
            message: 'Request send successfully',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: 'Failed! Try again later',
        });
    }
};
exports.default = DemoController;
