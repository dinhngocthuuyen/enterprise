const {Post} = require('./post.model');
const {Contribution} = require('./contribution.model');
const {Role} = require("./role.model");
const {Student} = require("./student.model");
const {User} = require("./user.model");
const {Coordinator} = require("./coordinator.model");
module.exports = {
  Post,
  Contribution,
  Coordinator,
  User,
  Role,
  Student,
}
