const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dsSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  isAuthorized: {
    type: Boolean,
    default: false,
  },
  month: {
    type: String,
    required: true,
  },
    username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  indentifiedStudent: {
    type: Number,
  },
  enrolledStudent: {
    type: Number,
  },
  classesConducted: {
    type: Number,
  },
  hindi: {
    type: Number,
  },
  english: {
    type: Number,
  },
  evs: {
    type: Number,
  },
  math: {
    type: Number,
  },
  studentsAttended: {
    type: Number,
  },
  exposureVisits: {
    type: Number,
  },
  sessionsVisits: {
    type: Number,
  },
  classRoomIntervention: {
    type: Number,
  },
  behaviourManagement: {
    type: Number,
  },
  cultureValues: {
    type: Number,
  },
});

module.exports = mongoose.model("DataEntry", dsSchema);
