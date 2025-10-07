require("dotenv").config();
const Razorpay = require("razorpay");

if (!process.env.RAZORPAY_KEY || !process.env.RAZORPAY_SECRET) {
    throw new Error("Razorpay credentials are missing");
}

// console.log("RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY);
// console.log("RAZORPAY_SECRET:", process.env.RAZORPAY_SECRET);

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});