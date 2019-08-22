const { source, own } = require("../db");

const { Schema } = source;

const EventSchema = new Schema({
  code: {
    type: String,
  },
});

module.exports = {
  source: source.model("Event", EventSchema),
  own: own.model("Event", EventSchema),
};
