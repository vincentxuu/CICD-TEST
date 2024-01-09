const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
  },
  photoURL: {
    type: String,
  },
  photoAlt: {
    type: String,
  },  
  category: {
    type: Array,
  },
  area: {
    type: String,
  },
  time: {
    type: Date,
  },
  partnerStyle: {
    type: String,
  },
  partnerEducationStep: {
    type: String,
  },
  description: {
    type: String,
  },
  tagList: {
    type: Array,
  },
  isGrouping: {
    type: Boolean,
  },
  createdDate: {//建立時間
    type: Date,
    default: Date.now,
  },
  updatedDate: {//更新時間
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
