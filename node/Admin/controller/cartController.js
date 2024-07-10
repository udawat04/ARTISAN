const Cart = require("../model/cartModel");


const cartController = {
  async addToCart(req, res, next) {
    try {
      const { userId, productId, quantity } = req.body;
      const existingItem = await Cart.findOne({ userId, productId });
      if (existingItem) {
        existingItem.quantity += quantity;
        await existingItem.save();
        res.status(200).json(existingItem);
      } else {
        const cartItem = await Cart.create({
          userId,
          productId,
          quantity,
        });
        res.status(200).json(cartItem);
      }
    } catch (error) {
      res.status(500).json({ error: "Server Error", serverError: error });
    }
  },

  async getCartItems(req, res, next) {
    try {
      const { userId } = req.params;
       const cartItems = await Cart.find({ userId }).populate({
         path: "productId",
         populate: [
           { path: "category"},
           { path: "subcategory"},
         ],
       });
      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ error: "Server Error", serverError: error });
    }
  },

  async updateCartItem(req, res, next) {
    try {
      const { userId, productId, quantity } = req.body;
      const cartItem = await Cart.findOneAndUpdate(
        { userId, productId },
        { $set: { quantity } },
        { new: true }
      );
      res.status(200).json(cartItem);
    } catch (error) {
      res.status(500).json({ error: "Server Error", serverError: error });
    }
  },

  async removeCartItem(req, res, next) {
    try {
      const { userId, productId } = req.body;
      await Cart.findOneAndDelete({ userId, productId });
      res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
      res.status(500).json({ error: "Server Error", serverError: error });
    }
  },
};

module.exports = cartController;
