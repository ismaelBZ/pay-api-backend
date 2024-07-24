"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactModel_1 = __importDefault(require("../model/ContactModel"));
const ContactDTO_1 = __importDefault(require("./DTO/ContactDTO"));
const ContactController = async (req, res) => {
    const data = req.body;
    try {
        const contact = new ContactModel_1.default(data);
        await contact.save();
        res.status(200)
            .set('Location', `/contacts/${contact._id}`)
            .json({
            status: 200,
            message: 'Request send successfully',
            created: (new ContactDTO_1.default(contact))
        });
    }
    catch (e) {
        console.log(e);
        res.status(500)
            .json({
            status: 500,
            message: 'Failed! Try again later'
        });
    }
};
exports.default = ContactController;
