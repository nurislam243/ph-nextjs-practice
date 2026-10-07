"use client";

import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 my-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2 border-b pb-3 border-gray-200 flex items-center gap-2">
        Get in Touch
      </h2>
      <p className="text-gray-600 mb-8">
        Have questions or feedback? Reach out to us using the form below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Details Side Panel */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4 h-fit">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Contact Information
          </h3>

          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
            <p className="text-sm font-medium text-gray-800">
              support@company.com
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
            <p className="text-sm font-medium text-gray-800">
              +1 (555) 000-1234
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase font-bold">
              Office Hours
            </p>
            <p className="text-sm font-medium text-gray-800">
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        {/* Main Form */}
        <div className="md:col-span-2">
          {isSubmitted ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-green-800">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-green-700">
                Thank you, <span className="font-medium">{formData.name}</span>.
                We will get back to you at{" "}
                <span className="font-medium">{formData.email}</span> as soon as
                possible.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow hover:shadow-md transition-all duration-200 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
