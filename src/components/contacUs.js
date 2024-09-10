import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageSquare,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 py-12 mt-12">
      {" "}
      {/* Added mt-12 for margin */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Form */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="3"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-orange-500 text-sm"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 text-sm font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Socials */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Information
          </h2>
          <div className="space-y-3 text-gray-600 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin size={20} className="text-orange-500" />
              <span>Khemisset </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={20} className="text-orange-500" />
              <span>+212 623291349</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={20} className="text-orange-500" />
              <span>elharchaouisifeddine@gmail.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <h2 className="text-2xl font-semibold text-gray-800">Follow Us</h2>
          <div className="flex space-x-4 text-gray-600">
            <a
              href="https://www.instagram.com/hr__saif"
              className="hover:text-orange-500 transition duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.instagram.com/hr__saif"
              className="hover:text-orange-500 transition duration-300"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/hr__saif"
              className="hover:text-orange-500 transition duration-300"
            >
              <MessageSquare size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
