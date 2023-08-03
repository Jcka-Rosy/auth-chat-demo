const mongoose = require('mongoose');
const loginSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
},
  { timestamps: true });

const LoginedUser = mongoose.model('users', loginSchema);
module.exports = LoginedUser;