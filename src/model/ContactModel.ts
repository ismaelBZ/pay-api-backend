import {Schema} from 'mongoose';
import connection from '../database/connection';

interface IContact {
  name: string,
  email: string,
  company?: string,
  title?: string,
  message: string,
  upToDate: boolean,
  createdAt: Date,
  modifiedAt?: Date
}


const contactSchema = new Schema<IContact>({
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
  createdAt: {type: Date, default: Date.now},
  modifiedAt: Date
})

export default connection.model('Contacts', contactSchema);
export {IContact};