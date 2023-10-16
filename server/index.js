/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express')
const dotenv = require("dotenv")
const colors = require("colors")
const cookieParser = require("cookie-parser");
const signUpRoute = require("./route/signupRoute");
const mongoose = require("mongoose");
const cors = require("cors")


dotenv.config();
const { MONGO_URI, PORT } = process.env;


const app = express()

//middlewares 
app.use(express.json())

const corsOptions = {
  origin: "http://localhost:5174",
  credentials: true,  // allow to server to accept request from different origin
}
app.use(cors(corsOptions))
app.use(cookieParser());

//base route

app.use("/api/user", signUpRoute);


//axios.post("http://localhost:port/api/signup")



mongoose
  .connect(MONGO_URI)
  .then((res) => {
      if (res) {
        console.log(`Db connected successfully`.bgYellow.white);
      }

      //server connection
      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`.bgGreen.red);
      });
    })
  .catch(() => {
      console.log("Db connection failed");
    });

