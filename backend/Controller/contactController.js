const nodemailer = require("nodemailer");
const Message = require("../models/Message");

const contactFormHandler = async (req, res) => {
  const { user_name, user_email, subject, message } = req.body;

  if (!user_name || !user_email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Save to MongoDB
    const newMessage = new Message({ user_name, user_email, subject, message });
    await newMessage.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${user_name}" <${user_email}>`,
      to: process.env.EMAIL_USER,
      subject,
      html: `
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent and saved successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = contactFormHandler;
