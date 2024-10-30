// backend/utils/otpTemplate.js

function generateOTPTemplate(otp) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #444; text-align: center;">Welcome to Tevor!</h2>
      <p style="color: #333;">Hi there,</p>
      <p style="color: #333;">
        Thank you for signing up! To complete your registration, please use the following One-Time Password (OTP):
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <span style="font-size: 24px; font-weight: bold; color: #555;">${otp}</span>
      </div>
      <p style="color: #333;">
        This OTP is valid for 10 minutes. Please do not share it with anyone.
      </p>
      <p style="color: #333;">Thanks,<br>The Tevor Team</p>
      <footer style="text-align: center; font-size: 12px; color: #999; margin-top: 20px;">
        © 2024 Tevor. All rights reserved.
      </footer>
    </div>
  `;
}

module.exports = generateOTPTemplate;
