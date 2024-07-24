require('dotenv').config();
const app = require('./app');


app.listen(process.env.PORT || 3033  , () => console.log('Server running'));