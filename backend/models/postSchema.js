const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    fullname : {
      type: String
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: false
    },
    date: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    localStorage: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    image: {
      type: String, 
      required: true,
    },
  }, { timestamps: true });
  
  const Totalposts = mongoose.model('totalBlogs', postSchema);
  module.exports = Totalposts; 