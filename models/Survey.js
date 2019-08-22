const { source, own } = require("../db");

const { Schema } = source;

const SurveySchema = new Schema({
  qualtrics_id: {
    type: String,
    default: "",
  },
  distibution_id: {
    type: String,
    default: "",
  },
  survey_url: {
    type: String,
    default: "",
  },
  owner: {
    type: Schema.Types.Key,
    ref: "User",
    required: true,
  },
  event_code: {
    type: String,
  },
  event_name: {
    type: String,
  },
  is_anonymous: {
    type: Boolean,
    default: false,
  },
  is_tentpole: {
    type: Boolean,
    default: false,
  },
  pre_or_post: String,
  category_options: [
    {
      type: Array,
    },
  ],
  banner_image: {
    type: String,
  },
  title: {
    type: String,
  },
  status: {
    // draft, archive, published, deleting, deleted
    type: String,
    default: "draft",
  },
  deployment: {
    downloaded_count: {
      type: Number,
      default: 0,
    },
    email_count: {
      type: Number,
      default: 0,
    },
    url_count: {
      type: Number,
      default: 0,
    },
  },
  selected_questions: [
    {
      type: Array,
    },
  ],
  selected_custom_questions: [
    {
      type: Array,
    },
  ],
  default_language: String,
  creation_date: {
    type: String,
  },
  last_changed_date: {
    type: String,
  },
  publish_date: {
    type: String,
  },
  expiration_date: {
    type: String,
  },
});

module.exports = {
  source: source.model("Survey", SurveySchema),
  own: own.model("Survey", SurveySchema),
};
