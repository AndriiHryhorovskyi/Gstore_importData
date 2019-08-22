const { source, own } = require("../db");

const { Schema } = source;

const ResponseSchema = new Schema({
  owner: {
    type: Schema.Types.Key,
    ref: "User",
    required: true,
  },
  survey_id: {
    type: String,
    required: true,
  },
  question_count: {
    type: Number,
    required: true,
  },
  page_count: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "processing",
  },
  results: {
    type: Array,
    default: [],
  },
  error_message: {
    type: String,
    default: null,
  },
  creation_date: {
    type: Number,
    default: Date.now(),
  },
});

module.exports = {
  source: source.model("Response", ResponseSchema),
  own: own.model("Response", ResponseSchema),
};
