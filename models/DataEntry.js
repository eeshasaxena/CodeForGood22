const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Read from csv and create a new schema
/*
Create a collection of the needed fields along with Id of person who added the data 
and req.body mei usko pass kar do .
 */
/*
Total Number OoSC and Out Of School Children Identified
Total Number OoSC and Out Of Children Enrolled In Learning Center
The Total Classes Conducted this month
Hindi
English,
EVS,
Math,
Number of the Students attended classes regularly
Number of exposure visits/sessions done,
"Number of Sessions/Visits/Meetings on vision setting,reflection and self-awareness",
"Number of training on classroom intervention, behaviour management cycle and culture & Values",
 Number of community visits made to identify and understand local problems
,Number of Community event organised to mobilize stakeholders,"Number of parents attended workshops/training (PTM, SMC)",Number of parents joined/participated in awareness drives and campaigns.,Number of community members attended community events and program organized for mobilization,Number of parents visited Anubhuti learning centers,Number of parents had one on one conversations with fellows during the field visit.,Thank You for Filling the Form - Please Rate you experience or day,Location 
*/
const dsSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  isAuthorized: {
    type: Boolean,
    //default
    default: false,
  },
  month: {
    type: String,
    required: true,
  },
  // unique: true,

  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // name: {
  //   type: String,
  //   required: true,
  // },
  // indentifiedStudent: {
  //   type: Number,
  // },
  // enrolledStudent: {
  //   type: Number,
  // },
  // classesConducted: {
  //   type: Number,
  // },
  // hindi: {
  //   type: Number,
  // },
  // english: {
  //   type: Number,
  // },
  // evs: {
  //   type: Number,
  // },
  // math: {
  //   type: Number,
  // },
  // studentsAttended: {
  //   type: Number,
  // },
  // exposureVisits: {
  //   type: Number,
  // },
  // sessionsVisits: {
  //   type: Number,
  // },
  // classRoomIntervention: {
  //   type: Number,
  // },
  // behaviourManagement: {
  //   type: Number,
  // },
  // cultureValues: {
  //   type: Number,
  // },
});

module.exports = mongoose.model("DataEntry", dsSchema);
