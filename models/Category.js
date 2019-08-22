const { source, own } = require("../db");

const { Schema } = source;

const CategorySchema = new Schema({
  title: {
    type: String,
  },
  required: {
    type: Boolean,
  },
  multiple: {
    type: Boolean,
  },
  allowCustomInput: Boolean,
  options: [
    {
      type: String,
    },
  ],
});

module.exports = {
  source: source.model("Category", CategorySchema),
  own: own.model("Category", CategorySchema),
};
