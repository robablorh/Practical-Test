/* eslint-disable no-undef */
const mongoose = require("mongoose")




const clientDetailmodel = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  maritalstatus: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  employment: {
    type: String,
    required: true,
  },
  employer: {
    type: String,
    required: true,
  },
  identification : {
    type: String,
    required: true,
  },
  idnumber: {
    type: String,
    required: true,
  },
  principal: {
    type: String,
    required: true,
  },
  duration : {
    type: String,
    required: true,
  },
  simpleInterest : {
    type: String,
    required: true,
  },

}, {timestamps: true});

module.exports = mongoose.model("Client", clientDetailmodel);
