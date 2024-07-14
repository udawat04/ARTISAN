const Razorpay = require("razorpay");
const crypto = require("crypto");

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const paymentController = {
  async creatOrder(req, res) {
    const { amount, currency, receipt, notes } = req.body;

    try {
      const order = await razorpayInstance.orders.create({
        amount: amount * 100, // Amount in paise
        currency,
        receipt,
        notes,
      });
      console.log("Order created successfully:", order);
      res.status(200).json(order);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  async verifyOrder(req, res) {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === razorpay_signature) {
      res.status(200).json({ message: "Payment verified successfully" });
    } else {
      res.status(400).json({ message: "Payment verification failed" });
    }
  },
};

module.exports = paymentController;
