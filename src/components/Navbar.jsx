import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "EMI Calculator", path: "/emi-calculator" },
    { name: "Property Management", path: "/property-management" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed w-full z-50 bg-white shadow-sm border-b border-gray-100"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div className="text-2xl font-bold tracking-tighter text-gray-900" whileHover={{ scale: 1.02 }}>
        <Link to="/">
        Real<span className="text-[#1447E6]">ESTATE</span>

        </Link>
        </motion.div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
          {navLinks.map((link, i) => (
            <motion.li key={link.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
              <Link to={link.path} className="hover:text-[#1447E6] transition-colors cursor-pointer">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Toggle Icon */}
        <HiMenuAlt3 className="md:hidden text-3xl cursor-pointer text-black" onClick={() => setIsOpen(true)} />
      </div>

      {/* Dark Overlay - This covers the background content */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/60 z-[60] md:hidden" 
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
      </AnimatePresence>
      
      {/* Sidebar - FORCED WHITE BACKGROUND */}
      <motion.div
        className="fixed top-0 right-0 h-full w-[60%] !bg-white z-[100] shadow-2xl md:hidden"
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        
        {/* We add a div with a solid white bg again just to be 100% sure */}
        <div className="bg-white h-full p-8 flex flex-col">
          
          {/* Close Button */}
          <HiX className="text-3xl self-end mb-10 cursor-pointer text-black" onClick={() => setIsOpen(false)} />
          
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-gray-300 pb-4">
                <Link
                  to={link.path}
                  className="text-lg font-bold text-black hover:text-[#1447E6] transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

           
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;