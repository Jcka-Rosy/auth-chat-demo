const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
    author: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },{ timestamps: true });
  
  const CommentData = mongoose.model('commentboxs', CommentSchema);
module.exports = CommentData;
  