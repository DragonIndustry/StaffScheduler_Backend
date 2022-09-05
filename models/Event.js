const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      startDate: {
        type: Date
      },
      createdBy: {
        type: Object,
        required: true
      },
      endDate: {
        type: Date
      },
      startTime: {
        type: String
      },
      endTime: {
        type: String
      },
      description: {
        type: String
      },
      location: {
        type: String
      },
      staff: {
        type: Object
      },
      attendees: {
        type: Array
      },
      shared: {
        type: Boolean,
        default: false
      }
    });

const EventModel = mongoose.model("event", EventSchema);
module.exports = EventModel;