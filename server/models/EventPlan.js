var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var EventPlan = new Schema({
  eventName: {
    type: String
  },
  date: {
      type: String
  },
  meal: {
      type: String
  },
  venue: {
      type: String
  }
},);

module.exports = mongoose.model('EventPlan', EventPlan);