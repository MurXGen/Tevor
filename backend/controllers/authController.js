// backend/controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const sendEmail = require("../utils/sendEmail");
const generateOTPTemplate = require("../utils/otpTemplate");  // Import OTP template

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    newUser.otp = otp;
    newUser.otpExpiry = Date.now() + 10 * 60 * 1000;
    await newUser.save();

    const htmlContent = generateOTPTemplate(otp);  // Use template to generate HTML content
    await sendEmail(email, "Verify your account - Tevor", htmlContent);

    res.status(201).json({ message: "OTP sent to email" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
};
