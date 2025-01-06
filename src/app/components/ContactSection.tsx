"use client"

import React, { useState } from "react";
import Heading2 from "./Heading2";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Display success alert
    alert("Submission successful!");

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen mx-8 py-12">
      <div className="text-center mb-12">
        <Heading2 text="Contact Us" />
        <p className="text-gray-50 mt-2 text-xl">We’d love to hear from you!</p>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Same contact info code */}
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-pink-200 to-purple-300 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 text-black rounded-md p-2 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-purple-600 hover:to-pink-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
