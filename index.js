const Category = require("./models/Category");
const Answer = require("./models/Answer");
const CustomQuestion = require("./models/CustomQuestion");
const Event = require("./models/Event");
const Question = require("./models/Question");
const Response = require("./models/Response");
const Survey = require("./models/Survey");
const User = require("./models/User");

const models = [
  { m: Category, name: "Category" },
  { m: Answer, name: "Answer" },
  { m: CustomQuestion, name: "CustomQuestion" },
  { m: User, name: "User" },
  { m: Event, name: "Event" },
  { m: Question, name: "Question" },
  { m: Response, name: "Response" },
  { m: Survey, name: "Survey" },
];

console.log("Start importing...");

models.reduce(
  (prev, model) =>
    prev
      .then(() => model.m.source.list())
      .then(collection =>
        Promise.all(
          collection.entities
            .map(doc => new model.m.own(doc))
            .map(doc => doc.save()),
        ),
      )
      .then(() => console.info(`${model.name} imported successfull`))
      .catch(err => console.error(`${model.name} importing failure\n`, err)),
  Promise.resolve(),
);
