import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaChevronRight } from 'react-icons/fa';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../utils/motionVariants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
  ];

  const usefulLinks = [
    { name: "EMI Calculator", path: "/emi-calculator" },
    { name: "Property Management", path: "/property-management" },
    { name: "Contact", path: "/contact" },
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: '#' },
  ];

  return (
    <motion.footer 
      className="bg-[#1a365d] text-gray-300 pt-16 pb-8 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={blockVariants}
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* About Section */}
          <motion.div className="space-y-6" variants={blockVariants} custom={0}>
            <motion.h3 className="text-white font-serif text-xl font-bold uppercase tracking-widest" variants={headingVariants}>
              About Us
            </motion.h3>
            <motion.p className="leading-relaxed text-sm text-gray-400" variants={paraVariants}>
              We provide trusted real estate solutions including buying, selling,
              property management, and financial planning for modern investors.
            </motion.p>
          </motion.div>

          {/* Company Links */}
          <motion.div className="space-y-6" variants={blockVariants} custom={1}>
            <motion.h3 className="text-white font-serif text-xl font-bold uppercase tracking-widest" variants={headingVariants}>
              Company
            </motion.h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center group hover:text-white transition-colors"
                  >
                    <FaChevronRight className="text-[10px] mr-2 text-gray-500 group-hover:text-blue-400" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Useful Links */}
          <motion.div className="space-y-6" variants={blockVariants} custom={2}>
            <motion.h3 className="text-white font-serif text-xl font-bold uppercase tracking-widest" variants={headingVariants}>
              Useful Links
            </motion.h3>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="flex items-center group hover:text-white transition-colors"
                  >
                    <FaChevronRight className="text-[10px] mr-2 text-gray-500 group-hover:text-blue-400" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div className="space-y-6" variants={blockVariants} custom={3}>
            <motion.h3 className="text-white font-serif text-xl font-bold uppercase tracking-widest" variants={headingVariants}>
              Connect With Us
            </motion.h3>
            <motion.p className="text-sm text-gray-400" variants={paraVariants}>
              Follow our social channels for the latest property updates and news.
            </motion.p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-[#1a365d] hover:border-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-gray-500 gap-4"
          variants={paraVariants}
        >
          <p>
            © {currentYear} — <span className="text-white font-semibold">ReHomes</span>. All rights reserved.
          </p>
          <p>
            Crafted with excellence for modern real estate solutions.
          </p>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;