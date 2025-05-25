import React from "react";

function Contact() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r p-6">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-200 mb-8 drop-shadow">
          📬 Contact Us
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-green-100 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-green-100 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-green-100 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-300"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-transform duration-300 hover:scale-105"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
