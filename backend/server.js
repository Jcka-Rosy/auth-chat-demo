const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require("./router");
const mongoose = require('mongoose')

const app = express();

var corsOptions = { 
  origin:'http://localhost:3001', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
};

// app.use("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',route)


const PORT =  8001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});