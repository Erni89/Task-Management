const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "customer",
    required: true,
  },
  description: {
    type: String,
    minlength: 5,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("task", taskSchema);
