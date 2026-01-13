import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { fadeIn } from "../../variants";

const Contact = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_mobile: form.current.user_mobile.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        form.current.reset();
        setSuccessMsg("✅ Thanks! Your message has been sent.");
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      } else {
        setSuccessMsg("");
        toast.error("❌ Failed to send message", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMsg("");
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-black dark:text-white">CONTACT</h2>
        <div className="w-48 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-1 w-full max-w-md bg-white dark:bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300"
      >
        <h3 className="text-xl font-semibold text-black dark:text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="tel"
            name="user_mobile"
            placeholder="Your Contact Number"
            required
            pattern="[0-9]{10}"
            maxLength="10"
            title="Please enter exactly 10 digits"
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#131025] text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>

        {successMsg && (
          <p className="text-green-600 dark:text-green-400 text-center mt-4">
            {successMsg}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
