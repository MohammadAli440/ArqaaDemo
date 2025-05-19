import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Call,
  Email,
  FaceBook,
  Instagram,
  LinkedIn,
  Logo,
  Twitter,
} from "../../images";
import Navbar from "../NavBar/Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/products", label: "Products" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <Navbar />
      <header className="bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <NavLink to="/" className="flex items-center">
                <img src={Logo} alt="Logo" className="h-12 w-auto" />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 
                     hover:-translate-y-0.5 ${
                       isActive
                         ? "text-[#6B8E23]"
                         : "text-black hover:text-[#6B8E23]"
                     }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 
                hover:text-[#6B8E23] transition-colors duration-300 
                focus:outline-none focus:ring-2 focus:ring-[#6B8E23] focus:ring-offset-2"
              >
                {/* Hamburger icon */}
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}  
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#434E24] sm:px-3 rounded-lg shadow-lg mt-1">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[#6B8E23]"
                        : "text-white hover:text-[#6B8E23]"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Social Media Section */}
              <div className="flex items-center gap-2 px-3 py-2 border-t border-gray-100">
                {[
                  {
                    icon: FaceBook,
                    url: "https://facebook.com",
                    alt: "Facebook",
                  },
                  { icon: Twitter, url: "https://twitter.com", alt: "Twitter" },
                  {
                    icon: Instagram,
                    url: "https://instagram.com",
                    alt: "Instagram",
                  },
                  {
                    icon: LinkedIn,
                    url: "https://linkedin.com",
                    alt: "LinkedIn",
                  },
                ].map((social) => (
                  <NavLink
                    key={social.alt}
                    to={social.url}
                    className="group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={social.icon}
                      alt={social.alt}
                      className="w-4 h-4 transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
                    />
                  </NavLink>
                ))}
              </div>

              {/* Contact Information Section */}
              <div className="flex gap-2 text-white px-3 py-2 border-t border-gray-100">
                {[
                  {
                    icon: Call,
                    url: "tel:+11234567890",
                    text: "+1 12345 67890",
                    alt: "Call",
                  },
                  {
                    icon: Email,
                    url: "mailto:arqaamultipack@gmail.com",
                    text: "arqaamultipack@gmail.com",
                    alt: "Email",
                  },
                ].map((contact) => (
                  <NavLink
                    key={contact.alt}
                    to={contact.url}
                    className="group flex items-center space-x-1.5"
                  >
                    <img
                      src={contact.icon}
                      alt={contact.alt}
                      className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-xs font-medium text-white transition-colors duration-300 group-hover:text-[#6B8E23]">
                      {contact.text}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
