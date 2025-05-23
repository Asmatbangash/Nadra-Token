import React from "react";

function Contact() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6">
      <div className=" rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white">
              Email
            </label>
            <input
              type="email"
              className="w-full text-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-white">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
