const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { BASE_URL } = require("../../config");

const productSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    subcategory: { type: Schema.Types.ObjectId, ref: "subCategory" },
    name: { type: String },
    price: { type: Number },
    producttype: { type: String },

    prodimage: {
      type: String,
    },
    slider:{
      type:[String],
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
