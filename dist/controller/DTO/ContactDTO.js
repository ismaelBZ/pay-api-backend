"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactDTO {
    constructor(contact) {
        this.id = contact._id.toString();
        this.name = contact.name;
        this.email = contact.email;
        this.message = contact.message;
    }
}
exports.default = ContactDTO;
