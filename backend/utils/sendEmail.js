const nodemailer = require("nodemailer");

const sendEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Parking System Verification",
        html: `<p>Your verification code is <b>${token}</b></p>`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
