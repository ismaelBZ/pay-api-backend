import { HydratedDocument, ObjectId } from 'mongoose'
import {IContact} from './../../model/ContactModel'

export default class ContactDTO {
  private id: string;
  private name: string;
  private email: string;
  private message: string;

  constructor(contact: HydratedDocument<IContact>) {
    this.id = contact._id.toString();
    this.name = contact.name;
    this.email = contact.email;
    this.message = contact.message; 
  }
}

