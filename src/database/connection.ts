const mongoose = require('mongoose');

// const databaseConnection = async () => {
//   await mongoose.connect(process.env.MONGODB_URL);
// }

export default mongoose.createConnection(process.env.MONGODB_URL);
