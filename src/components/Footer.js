import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-6">
        {/* Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="https://seeklogo.com/images/S/swiggy-logo-E7548BE9FF-seeklogo.com.png"
              alt="Swiggy Logo"
              className="h-12 w-auto "
            />
          </div>

          {/* Nav Links */}
          <div className="flex space-x-8 text-sm">
            <a
              href="/"
              className="hover:text-white transition duration-300 transform hover:scale-105"
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-white transition duration-300 transform hover:scale-105"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="hover:text-white transition duration-300 transform hover:scale-105"
            >
              Contact us
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-xl">
            <a
              href="https://www.facebook.com/profile.php?id=61556404517794&mibextid=ZbWKwL"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com/hr__saif"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/hr__saif"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/ELHARCHAOUI-SIFEDDINE"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://wa.me/212623291349"
              className="text-gray-400 hover:text-white transition duration-300 transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Privacy & Terms */}
          <div className="flex space-x-6 text-sm">
            <a
              href="#"
              className="hover:text-white transition duration-300 transform hover:scale-105"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition duration-300 transform hover:scale-105"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition duration-300 transform hover:scale-105"
            >
              Cookie Policy
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs">
            © 2024 SIF-EDDINE EL HARCHAOUI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
