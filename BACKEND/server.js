// assign the dependensies to the variable
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

//assign the dotenv. if it is not server.js can not open it.
require("dotenv").config();

// assign the port number. assign the available port number
const PORT = process.env.PORT || 8070;

//command to use cors as a middleware
app.use(cors());

//json is the key value pairs
app.use(bodyParser.json());


//assign the mongodb url
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  //  useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
 //   useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})


//i have to access the to activity.js file from server.js 
//so i have to make a variable
const activityRouter = require("./routes/activitys.js");


//we can use activity.js file in the route folder 

//http://localhost:8070/activity
app.use("/activity",activityRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on port ${PORT}`)

})

