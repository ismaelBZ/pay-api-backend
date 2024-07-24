import mongoose from 'mongoose'
import connection from './../database/connection';

const demoSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'We need your email'],
    validate: {
      validator: function(email: string) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        .test(email)
      }, 
      message: 'Please provide a valid email' 
    },
    unique: true,
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
}) 

export default connection.model('demo-users', demoSchema);