import {Request, Response} from 'express';
import {HydratedDocument} from 'mongoose';
import {IContact} from './../model/ContactModel';
import Contact from '../model/ContactModel';
import ContactDTO from './DTO/ContactDTO'


const ContactController = async (req: Request, res: Response) : Promise<void> => {
  const data = req.body;
  try {
    const contact: HydratedDocument<IContact>  = new Contact(data);
    await contact.save();
    res.status(200)
      .set('Location', `/contacts/${contact._id}`)
      .json(
        {
          status: 200,
          message: 'Request send successfully',
          created: (new ContactDTO(contact))
        }
      );
    } catch (e) {
      console.log(e);
      res.status(500)
        .json({
          status: 500,
          message: 'Failed! Try again later'
        });

  }
}

export default ContactController;