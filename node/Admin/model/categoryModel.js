const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const { BASE_URL } = require("../../config");

const categoryController = new Schema(
  {
    category: { type: String },
    image: {
      type: String,
      get: (image) => {
        return `${BASE_URL}${image}`;
      },
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const Category = mongoose.model("Category",categoryController);

module.exports = Category;