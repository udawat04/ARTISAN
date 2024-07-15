
const { model } = require("mongoose");
const Product = require("../model/productModel");

const productController = {
  async index(req, res) {
    let products;
    try {
      products = await Product.find()
        .populate({
          path: "category",
          model: "Category",
        })
        .populate({
          path: "subcategory",
          model: "subCategory",
        });
    } catch (error) {
      res.status(500).json({ error: "Server error", serverError: error });
      console.log(error);
    }
    res.status(200).json(products);
  },
  async findbycategory(req, res) {
    let find;
    try {
      const { id } = req.params;
      // Find subcategories that belong to the specified category ID
      find = await Product.find({ subcategory: id }).populate("subcategory");
      console.log(find);
    } catch (error) {
      res.status(500).json({ error: "Server error", serverError: error });
    }
    res.status(200).json(find);
  },

  async store(req, res) {
    let products;
    try {
      const { category, subcategory, name, price, producttype } = req.body;

       const sliderFiles = req.files["slider"] || [];
       const sliderFileName = sliderFiles.map(
         (file) => "/upload/category/slider/" + file.filename
       );

        console.log(req.body);
      products = await Product.create({
        category,
        subcategory,
        name,
        price,
        producttype,
        prodimage: "/upload/category/prodimage/" + req.files["prodimage"][0].filename,
        slider:sliderFileName,
      });
      console.log(products);
    } catch (error) {
      res.status(404).json({ error: "Server Error", serverError: error });
    }
    res.status(201).json(products);
  },


 

  async storing(req, res) {
    let products;
    try {
      const {id} =req.params
      products = await Product.find({_id:id});
    } catch (error) {
      res.status(500).json({ error: "Server error", serverError: error });
    }
    res.status(200).json(products);
  },
  async search(req, res) {
    let products;
    try {
      const { search } = req.query;
      products = await Product.find({
        title: { $regex: search, $options: "i" },
      });
    } catch (error) {
      res.status(500).json({ error: "Server error", serverError: error });
    }
    res.status(200).json({ status: 200, products: products });
  },
  async delete(req, res, next) {
    let del;
    try {
      const { id } = req.params;
      del = await Product.findByIdAndDelete({ _id: id });
    } catch (error) {
      res.status(404).json({ error: "Server Error", srverError: error });
    }
    res.status(200).json(del);
  },
};

module.exports = productController;

