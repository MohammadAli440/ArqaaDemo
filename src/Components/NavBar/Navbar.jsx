import { NavLink } from "react-router-dom";
import {
  Call,
  Email,
  FaceBook,
  Instagram,
  LinkedIn,
  Twitter,
} from "../../images";

const Navbar = () => {
  return (
    <nav className="hidden md:flex w-full h-14 bg-[#434E24] justify-between items-center px-4">
      {/* Social Media Section */}
      <div className="flex items-center gap-2 ml-4">
        {[
          { icon: FaceBook, url: "https://facebook.com", alt: "Facebook" },
          { icon: Twitter, url: "https://twitter.com", alt: "Twitter" },
          { icon: Instagram, url: "https://instagram.com", alt: "Instagram" },
          { icon: LinkedIn, url: "https://linkedin.com", alt: "LinkedIn" },
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
              className="w-5 h-5 transform transition-all duration-300 group-hover:scale-110 group-hover:opacity-80"
            />
          </NavLink>
        ))}
      </div>

      {/* Contact Information Section */}
      <div className="flex items-center gap-2 mr-4">
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
            className="group flex items-center space-x-1"
          >
            <img
              src={contact.icon}
              alt={contact.alt}
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-sm font-medium text-[#fff] transition-colors duration-300 group-hover:opacity-80">
              {contact.text}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
