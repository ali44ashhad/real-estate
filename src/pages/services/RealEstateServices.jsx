import React from 'react';
import { motion } from 'framer-motion';
import serviceImage1 from '../../assets/servicesImages/property-management1.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';
import serviceImage2 from '../../assets/servicesImages/residential-sales.jpg'
import serviceImage3 from '../../assets/servicesImages/real-estate.jpg'
import serviceImage4 from '../../assets/servicesImages/commercial-leasing.jpg'
import serviceImage5 from '../../assets/servicesImages/investment.jpg'
import serviceImage6 from '../../assets/servicesImages/mortage.jpg'


const RealEstateServices = () => {
  // Service data based on typical real estate needs and the design style of image_62a95c.png
  const services = [
    {
      title: "Property Management",
      listings: "Comprehensive oversight",
      image: serviceImage1,
    },
    {
      title: "Residential Sales",
      listings: "Market-leading expertise",
      image: serviceImage2,
    },
    {
      title: "Commercial Leasing",
      listings: "Strategic business locations",
      image: serviceImage3,
    },
    {
      title: "Real Estate Appraisal",
      listings: "Accurate asset valuation",
      image: serviceImage4,
    },
    {
      title: "Investment Consulting",
      listings: "Portfolio growth strategies",
      image: serviceImage5,
    },
    {
      title: "Mortgage Services",
      listings: "Tailored financial solutions",
      image: serviceImage6,
    },
  ];

  return (
    <motion.section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
      {/* Header Section following image_62a95c.png style */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div className="md:w-1/2">
          <motion.div className="flex items-center gap-2 mb-4" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
            <span className="w-2 h-2 rounded-full border border-orange-500"></span>
            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Our Services</span>
          </motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] leading-tight" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
            Comprehensive Solutions <br /> For Your Property Journey
          </motion.h2>
        </div>
        
        <div className="md:w-1/3 border-l-2 border-orange-500 pl-8">
          <motion.p className="text-gray-600 text-lg" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
            Whether you are buying your first home, managing a commercial portfolio, 
            or seeking high-yield investments, our dedicated team provides the 
            expertise you need to move forward with confidence.
          </motion.p>
        </div>
      </div>

      {/* Services Grid matching the layout of image_62a95c.png */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div key={index} className="group cursor-pointer" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={index}>
            {/* Image Container with rounded corners from the reference */}
            <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[0.5rem] rounded-bl-[0.5rem] mb-4 aspect-[4/3]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Text Content */}
            <div className="space-y-1">
              <motion.h3 className="text-xl font-bold text-[#1a365d] group-hover:text-orange-500 transition-colors" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={index}>
                {service.title}
              </motion.h3>
              <motion.p className="text-gray-500 text-sm" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={index}>
                {service.listings}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default RealEstateServices;