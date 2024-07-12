const Wishlist = require("../model/wishlistModel");


const wishlistController = {
  async addToWishlist(req, res) {
    try {
      const { userId, productId } = req.body;

      const existingWishlistItem = await Wishlist.findOne({
        userId,
        productId,
      });
      if (existingWishlistItem) {
        return res
          .status(400)
          .json({ error: "Product is already in the wishlist" });
      }

      const newWishlistItem = await Wishlist.create({ userId, productId });
      res.status(200).json(newWishlistItem);
    } catch (error) {
      res.status(500).json({ error: "Server Error", serverError: error });
    }
  },

  async removeFromWishlist(req, res) {
    try {
      const { userId, productId } = req.body;
      const removedWishlistItem = await Wishlist.findOneAndDelete({
        userId,
        productId,
      });
      if (!removedWishlistItem) {
        return res.status(404).json({ error: "Product not found in wishlist" });
      }
      res.json({status:200, message: "Product removed from wishlist" });
    } catch (error) {
      res.json({ status:500,error: "Server Error", serverError: error });
    }
  },

  async getWishlist(req, res) {
    try {
      const { userId } = req.params;
      const wishlistItems = await Wishlist.find({ userId }).populate(
        "productId"
      );
      res.status(200).json(wishlistItems);
    } catch (error) {
      res.status(500).json({ error: "Server Error", serverError: error });
    }
  },
};

module.exports = wishlistController;
