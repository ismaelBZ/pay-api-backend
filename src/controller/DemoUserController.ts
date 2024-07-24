import {Request, Response} from 'express';
import DemoUser from './../model/DemoUserModel';

const DemoController = async (req: Request, res: Response) : Promise<void> => {
  const email = req.body;
  try {
    const userExists = await DemoUser.find(email);
    if (userExists.length > 0) {
      res.status(400)
      .json({
        status: 400,
        message: 'Failed! Try other email',
      })
      .end()
      return;
    }
    const demoUser = new DemoUser(email)
    demoUser.save()
    res.status(200)
      .set('Location', `/demo-users/${demoUser._id}`)
      .json({
        status: 200,
        message: 'Request send successfully',
      })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: 'Failed! Try again later',
    })
  }
};

export default DemoController;