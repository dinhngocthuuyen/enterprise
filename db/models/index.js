const {Post} = require('./post.model');
const {Contribution} = require('./contribution.model');
const {Role} = require("./role.model");
const {Student} = require("./student.model");
const {User} = require("./user.model");
const {Coordinator} = require("./coordinator.model");
const {Message} = require("./messages.model");
const {Faculty} = require("./faculty.model");
const {Comment} = require("./comment.model");

module.exports = {
  Post,
  Contribution,
  Coordinator,
  User,
  Role,
  Faculty,
  Student,
  Message,
  Comment
}
