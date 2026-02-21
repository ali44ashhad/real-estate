import React from 'react';
import { motion } from 'framer-motion';
import serviceRightImage from '../../assets/servicesImages/mission1.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const ServiceIntro = () => {
  return (
    <motion.section className="py-20 bg-white px-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Heading and Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.div className="flex items-center gap-2" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
            <span className="w-2 h-2 rounded-full bg-blue-700"></span>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Our Dedication</span>
          </motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] leading-tight" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
            We Provide Dedicated Work For Your Future Home
          </motion.h2>
          <div className="w-20 h-1 bg-blue-700"></div>
          <motion.p className="text-gray-600 text-lg leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
            Our team is committed to providing a seamless experience. We do dedicated work 
            to ensure that every client finds a space that resonates with their lifestyle. 
            From initial consultation to final keys, our focus is on transparency, 
            professionalism, and excellence in the Portland real estate market.
          </motion.p>
          <ul className="space-y-3 pt-4">
            {['24/7 Expert Support', 'Market Leading Analysis', 'Personalized Property Sourcing'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-800 font-semibold">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Image */}
        <motion.div className="w-full lg:w-1/2" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
          <div className="relative">
            {/* Decorative Blue Box behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-700/10 rounded-2xl -z-10"></div>
            <img 
              src={serviceRightImage}
              alt="Our Dedicated Team" 
              className="w-full h-[450px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default ServiceIntro;