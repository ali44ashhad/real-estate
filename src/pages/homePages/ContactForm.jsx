import React from 'react';
import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const ContactForm = () => {
  return (
    <motion.section
      className="py-24 bg-white px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={blockVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Form Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="mb-10 text-center lg:text-left">
              <motion.span className="text-blue-700 font-bold tracking-widest uppercase text-sm block" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Contact Us</motion.span>
              <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Get In Touch</motion.h2>
              <motion.p className="text-gray-500 text-lg" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
                Schedule a private viewing or speak with our property experts today. We typically respond within 24 hours.
              </motion.p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 000-0000" 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-blue-50 rounded-2xl -z-10 group-hover:bg-blue-100 transition-colors duration-500"></div>
              
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" 
                  alt="Luxury Real Estate Support" 
                  className="w-full h-[400px] md:h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Quick Contact Badge */}
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Call us anytime</p>
                    <p className="text-gray-900 font-bold text-lg">+1 (234) 567-890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;