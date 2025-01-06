

import React from "react";
import Heading2 from "./Heading2";


const ContactSection = () => {
 
  
  return (
    <div className="min-h-screen mx-8 py-12 ">
      <div className="text-center mb-12">
        <Heading2 text="Contact Us"  />
        <p className="text-gray-50 mt-2 text-xl">We’d love to hear from you!</p>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Address",
            detail: "123 Parenting St, Family City, Parentland",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75h-9a3 3 0 00-3 3v10.5a3 3 0 003 3h9a3 3 0 003-3V6.75a3 3 0 00-3-3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9M7.5 12h4.5"
                />
              </svg>
            ),
          },
          {
            title: "Phone",
            detail: "+1 800 123 4567",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
                />
              </svg>
            ),
          },
          {
            title: "Email",
            detail: "contact@parentingwebsite.com",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 8.625v6.75M2.25 15.375l9.375-6 9.375 6M11.625 6.375L2.25 12.375"
                />
              </svg>
            ),
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-lg text-white bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg flex items-start gap-4 "
          >
            <div>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-pink-200 to-purple-300 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
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
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-pink-500 outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-purple-600 hover:to-pink-500 transition"
        >
          Submit
        </button>
     
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
