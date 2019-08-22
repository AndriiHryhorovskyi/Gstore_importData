const { source, own } = require("../db");

const { Schema } = source;

const QuestionSchema = new Schema({
  // id: {
  //   default: () => uuidV4(),
  //   write: false
  // },
  type: String,
  answers: {
    type: Schema.Types.Key,
    ref: "Answer",
  },
  languages: [
    {
      code: String,
      text: String,
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  pre_or_post: String,
  required: {
    type: String,
    default: "optional",
  },
  questionType: {
    type: String,
    default: "standard",
  },
  add_to_all: Number,
});

module.exports = {
  source: source.model("Question", QuestionSchema),
  own: own.model("Question", QuestionSchema),
};
