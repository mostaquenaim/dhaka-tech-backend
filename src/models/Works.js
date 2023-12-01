const { model, Schema } = require("mongoose");

const WorkSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  hoursWorked: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  currentDate: {
    type: Date,
    required: true
  },
  user: {
    type: Object,
    required:true
  }
});

const Work = model("Work", WorkSchema);

module.exports = Work;
