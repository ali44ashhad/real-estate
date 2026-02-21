import React from 'react'
import { motion } from 'framer-motion'
import leftImage from '../../assets/homeImages/home-second-image.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants'

const About = () => {
  return (
    <>
    <motion.section
      className="py-20 px-6 bg-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={blockVariants}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <motion.div
          className="w-full lg:w-1/2 relative group"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={blockVariants}
          custom={0}
        >
          <div className="absolute -inset-4 border-2 border-blue-700/20 translate-x-4 translate-y-4 rounded-lg group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
          <img 
            src={leftImage} 
            alt="Luxury Apartment" 
            className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <motion.h4 className="text-blue-700 font-bold uppercase tracking-widest text-sm" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>About Our Apartments</motion.h4>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
            Elevating the Standard of <span className="text-blue-700">Urban Living</span>
          </motion.h2>
          <motion.p className="text-gray-600 leading-relaxed text-lg" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
            Our luxury apartments are designed with a focus on sophistication and comfort. Located in the heart of the city, we provide residents with world-class amenities, stunning architectural views, and a community built on exclusivity.
          </motion.p>
          <motion.div className="grid grid-cols-2 gap-6 pt-4 text-center md:text-left" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants} custom={3}>
            <div><h3 className="text-3xl font-bold text-blue-700">1.2k+</h3><p className="text-gray-500">Premium Units</p></div>
            <div><h3 className="text-3xl font-bold text-blue-700">98%</h3><p className="text-gray-500">Client Satisfaction</p></div>
          </motion.div>
        
        </div>
      </div>
    </motion.section>
    </>
  )
}

export default About
