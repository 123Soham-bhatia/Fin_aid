const nodemailer = require('nodemailer');
require("dotenv").config();

exports.sendEmail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "e15ae491a7b5c0",
                pass: "********aed0"
            }
        });

        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: options.email,
            subject: options.subject,
            text: options.message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email");
    }
};
