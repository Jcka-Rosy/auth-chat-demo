const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    category: {
      type: Array,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Categories", CategorySchema);
module.exports = Category;
