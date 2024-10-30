// backend/utils/sendEmail.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (to, subject, htmlContent) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Tevor Support" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: htmlContent,  // Updated to support HTML content
  });
};

module.exports = sendEmail;
