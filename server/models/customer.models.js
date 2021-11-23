const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 5,
  },
  job: {
    type: String,
    required: true,
    minlength: 2,
  },
  phoneNumber: {
    type: String,
    length: 10,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    minlength: 5,
    required: true,
    unique: true,
  },
});

module.exports=mongoose.model('customer',customerSchema)
