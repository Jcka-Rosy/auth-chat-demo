const mongoose = require('mongoose');
const registerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please add the user email address"],
    unique: [true, "Email address already taken"],
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    default:0,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
  gender: String,
  dob: String,
  agreement: Boolean,
},
  { timestamps: true });

const User = mongoose.model('users', registerSchema);
module.exports = User;

