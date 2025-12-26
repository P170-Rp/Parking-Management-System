const nodemailer = require("nodemailer");

const sendEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
  from: `"Parking Management System" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Verify Your Parking System Account",
  html: `
  <div style="
    max-width:600px;
    margin:0 auto;
    font-family:Segoe UI, Roboto, Arial, sans-serif;
    background:#ffffff;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,0.1);
  ">
    
    <!-- Header -->
    <div style="
      background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);
      padding:20px;
      text-align:center;
      color:white;
    ">
      <h1 style="margin:0;">Parking Management System</h1>
      <p style="margin:5px 0 0;font-size:14px;">Secure Vehicle Parking</p>
    </div>

    <!-- Body -->
    <div style="padding:30px; color:#333;">
      <h2 style="margin-top:0;">Email Verification</h2>

      <p>Hello,</p>
      <p>
        Thank you for registering with <b>Parking Management System</b>.
        Please use the verification code below to complete your process.
      </p>

      <!-- Token Box -->
      <div style="
        margin:25px 0;
        padding:15px;
        background:#f4f6f8;
        border:2px dashed #2c5364;
        text-align:center;
        font-size:26px;
        font-weight:bold;
        letter-spacing:6px;
        color:#2c5364;
        border-radius:8px;
      ">
        ${token}
      </div>

      <p style="font-size:14px;color:#555;">
        ⏱ This code is valid for a limited time.  
        If you didn’t request this, please ignore this email.
      </p>

      <p style="margin-top:30px;">
        Regards,<br/>
        <b>Parking Management System Team</b>
      </p>
    </div>

    <!-- Footer -->
    <div style="
      background:#f1f1f1;
      padding:12px;
      text-align:center;
      font-size:12px;
      color:#777;
    ">
      © ${new Date().getFullYear()} Parking Management System. All rights reserved.
    </div>

  </div>
  `
};


    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
