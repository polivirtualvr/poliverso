const mongoose = require('mongoose');
const { userSchema } = require('/schemas/User');

const userModel = mongoose.model('User', userSchema);

module.exports = {
  userModel
};