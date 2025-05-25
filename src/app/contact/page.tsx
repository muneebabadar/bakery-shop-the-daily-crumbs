'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., API call)
    alert('Message sent! (This is a placeholder)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#fef9fb] px-4 py-16 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10">
        <h1 className="text-3xl font-bold text-[#c682b9] mb-6 text-center">Contact Us</h1>

        {/* Contact Info */}
        <div className="mb-10 text-center space-y-2 text-gray-700">
          <p><strong>Email:</strong> hello@dailycrumbs.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Sugar Lane, Crumbletown, CA 90210</p>
          <p><strong>Hours:</strong> Mon–Sat: 8am – 6pm | Sun: 9am – 3pm</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c682b9]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c682b9]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c682b9]"
          />
          <button
            type="submit"
            className="w-full rounded-full bg-[#c682b9] text-white font-semibold py-2 hover:bg-[#a85c9f] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
