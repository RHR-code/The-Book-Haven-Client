import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        style={{ backgroundColor: "#1a535c" }}
        className="text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">We'd love to hear from you</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div
              style={{ backgroundColor: "#4ecdc4" }}
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#1a535c" }}>
              Email
            </h3>
            <p className="text-gray-600">support@bookhaven.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div
              style={{ backgroundColor: "#4ecdc4" }}
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FaPhone className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#1a535c" }}>
              Phone
            </h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div
              style={{ backgroundColor: "#4ecdc4" }}
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: "#1a535c" }}>
              Address
            </h3>
            <p className="text-gray-600">123 Book Street, Reading City</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2
            className="text-3xl font-bold mb-6 text-center"
            style={{ color: "#1a535c" }}
          >
            Send Us a Message
          </h2>

          {submitted && (
            <div
              style={{ backgroundColor: "#4ecdc4" }}
              className="text-white px-4 py-3 rounded-lg mb-6 text-center"
            >
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-opacity-50"
                  style={{ focusBorderColor: "#4ecdc4" }}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              style={{ backgroundColor: "#1a535c" }}
              className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
