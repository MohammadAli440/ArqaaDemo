import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Logo2 } from '../../images';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const columnsRef = useRef([]);
  const copyrightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      columnsRef.current.forEach((column, index) => {
        gsap.from(column, {
          scrollTrigger: {
            trigger: column,
            start: "top 90%",
          },
          y: 50,
          opacity: 0,
          duration: 0.4,
          delay: index * 0.1,
          ease: "power3.out",
        });
      });

      gsap.from(copyrightRef.current, {
        scrollTrigger: {
          trigger: copyrightRef.current,
          start: "top 95%",
        },
        y: 30,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#434E24] text-[#F5F2EE]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Company Info Section */}
          <div ref={el => (columnsRef.current[0] = el)} className="lg:w-1/3">
            <img src={Logo2} alt="Company Logo" className="h-14 mb-6" />
            <p className="text-base leading-relaxed mb-8">
              Providing premium packaging solutions for businesses worldwide. Quality, innovation, and customer satisfaction are our top priorities.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#F5F2EE]/80 transition-all hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#F5F2EE]/80 transition-all hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#F5F2EE]/80 transition-all hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#F5F2EE]/80 transition-all hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
            {/* Pages Menu */}
            <div ref={el => (columnsRef.current[1] = el)}>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-[#F5F2EE]/20">Pages</h3>
              <ul className="space-y-4">
                <li><Link to="/" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">About Us</Link></li>
                <li><Link to="/services" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Services</Link></li>
                <li><Link to="/contact" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Contact</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div ref={el => (columnsRef.current[2] = el)}>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-[#F5F2EE]/20">Solutions</h3>
              <ul className="space-y-4">
                <li><Link to="/packaging" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Custom Packaging</Link></li>
                <li><Link to="/printing" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Printing Services</Link></li>
                <li><Link to="/design" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Design Solutions</Link></li>
                <li><Link to="/consulting" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Consulting</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div ref={el => (columnsRef.current[3] = el)}>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-[#F5F2EE]/20">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="/privacy" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Cookie Policy</Link></li>
                <li><Link to="/sitemap" className="hover:text-[#F5F2EE]/80 transition-all hover:translate-x-2 inline-block">Sitemap</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div 
          ref={copyrightRef}
          className="mt-16 pt-8 border-t border-[#F5F2EE]/20 text-center"
        >
          <p className="text-base">© 2024 Arqaa Multipack Solution. All rights reserved.</p>
          <p className="mt-2 text-sm opacity-80">Powered by Your Company Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;