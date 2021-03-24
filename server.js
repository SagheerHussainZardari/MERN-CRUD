//imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//create server
const app = express();
app.use(cors());
app.use(express.json());

//connect to mongodb database
var mongoDB =
  "mongodb+srv://admin:24rk1n624n63r@cluster0.tcbke.mongodb.net/crud?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("open", function () {
  console.log("connected");
});


//routues
const UsersRoutes = require('./routes/Users.Routes');
app.use('/users' , UsersRoutes);





//start server listening
app.listen(3001, (error) => {
  console.log("listening at port 3001");
});
