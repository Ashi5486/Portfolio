const nodemailer = require("nodemailer");
const Message = require("../models/Message");

const contactFormHandler = async (req, res) => {
  const { user_name, user_email, user_mobile, subject, message } = req.body;

  if (!user_name || !user_email || !user_mobile || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Save the message to MongoDB
    const newMessage = new Message({
      user_name,
      user_email,
      user_mobile,
      subject,
      message,
    });
    await newMessage.save();

    // Debug log for credentials
    console.log("User:", process.env.EMAIL_USER);
    console.log("Pass:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter
    await transporter.verify();
    console.log("✅ Email transporter ready");

    // Send the email
    await transporter.sendMail({
      from: `"${user_name}" <${user_email}>`,
      to: process.env.EMAIL_USER, // Send to your inbox
      subject,
      html: `
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Mobile:</strong> ${user_mobile}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ message: "Message sent and saved successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: error.message || "Something went wrong." });
  }
};

module.exports = contactFormHandler;
