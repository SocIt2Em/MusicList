const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;
const User = new Schema({
  username: String,
  password: { type: String, select: false },
  firstName: String,
  lastName: String,
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
