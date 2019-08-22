const { source, own } = require("../db");

const { Schema } = source;

const userSchema = new Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  dataAdmin: {
    type: Boolean,
    default: false,
  },
  date: {
    default: source.defaultValues.NOW,
  },
  surveys: [
    {
      survey: {
        type: Schema.Types.Key,
        ref: "Survey",
      },
    },
  ],
});

module.exports = {
  source: source.model("User", userSchema),
  own: own.model("User", userSchema),
};
