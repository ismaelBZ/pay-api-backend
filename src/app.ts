const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();


app.use(cors(
  {
    origin: [
      "https://ismaelbz.github.io", 
    ], 
    optionsSuccessStatus: 200
  }
));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);


module.exports = app