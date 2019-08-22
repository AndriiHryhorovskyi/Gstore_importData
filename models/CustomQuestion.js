const { source, own } = require("../db");

const { Schema } = source;

const CustomQuestionSchema = new Schema({
  // id: {
  //   default: () => uuidV4(),
  //   write: false
  // },
  type: {
    type: String,
  },
  answers: {
    type: Schema.Types.Key,
    ref: "Answer",
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
  owner: {
    type: Schema.Types.Key,
    ref: "User",
    required: true,
  },
  questionType: {
    type: String,
    default: "custom",
  },
});

module.exports = {
  source: source.model("CustomQuestion", CustomQuestionSchema),
  own: own.model("CustomQuestion", CustomQuestionSchema),
};
