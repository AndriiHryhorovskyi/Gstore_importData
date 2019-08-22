const { source, own } = require("../db");

const { Schema } = source;

const AnswersSchema = new Schema({
  type: {
    type: String,
  },
  languages: [
    {
      code: {
        type: String,
      },
      text: {
        type: String,
      },
    },
  ],
});

module.exports = {
  source: source.model("Answer", AnswersSchema),
  own: own.model("Answer", AnswersSchema),
};
