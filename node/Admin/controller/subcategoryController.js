const subCategory = require("../model/subcategoryModel");

const subcategoryController = {
  async store(req, res, next) {
    let add;
    try {
      const { category, subcategory } = req.body;

      add = await subCategory.create({
        category,
        subcategory,
        subimage: "upload/subcategory/image/" + req.file.filename,
      });
    } catch (error) {
      res.status(401).json({ error: " Server Error ", serverError: error });
    }
    res.status(200).json(add);
  },

  async show(req, res, next) {
    let display;
    try {
      display = await subCategory.find().populate("category");
    } catch (error) {
      res.status(401).json({ error: "Server Error ", serverError: error });
    }
    res.status(200).json(display);
  },
  async findbycategory(req, res) {
    let find;
    try {
      const { id } = req.params;
      // Find subcategories that belong to the specified category ID
      find = await subCategory.find({ category: id }).populate("category");
      console.log(find);
    } catch (error) {
      res.status(500).json({ error: "Server error", serverError: error });
    }
    res.status(200).json(find);
  },

  async findbysubcategory(req, res) {
    let products;
    try {
      const { id } = req.params;
      products = await subCategory.find({ _id: id });
    } catch (error) {
      res.status(500).json({ error: "Server error", serverError: error });
    }
    res.status(200).json(products);
  },

  async getSubCatsWithProducts(req, res, next) {
    let display;
    try {
      display = await subCategory.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "_id",
      foreignField: "subcategory",
      as: "products"
    }
  }
])
     } catch (error) {
      res.status(401).json({ error: "Server Error ", serverError: error });
    }
    res.status(200).json(display);
  },
};

module.exports = subcategoryController;
