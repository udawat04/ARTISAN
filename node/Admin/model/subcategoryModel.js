const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const { BASE_URL } = require("../../config");

const subcategoryController = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    subcategory: { type: String },
    subimage: {
      type: String,
      get: (subimage) => {
        return `${BASE_URL}${subimage}`;
      },
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const subCategory = mongoose.model("subCategory", subcategoryController);

module.exports = subCategory;
