import React from 'react';
import { motion } from 'framer-motion';
import propertyLayout from '../../assets/projectsImages/layout.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';
import imageSlider from '../../assets/projectsImages/slider.png'
import customContent from '../../assets/projectsImages/custom.jpg'
import smartFilters from '../../assets/projectsImages/smart-filter.png'


const ProjectFeatures = () => {
  const features = [
    { title: "Property Layouts", desc: "Choose from different grid or list views for your properties.", img: propertyLayout },
    { title: "Image Sliders", desc: "Enable image sliders so users can scroll through property photos.", img: imageSlider },
    { title: "Custom Content", desc: "Choose which details to show like price, address, or size.", img: customContent },
    { title: "Smart Filters", desc: "Add custom fields to show specific amenities or info.", img: smartFilters },
  ];

  return (
    <motion.section className="bg-[#f8fafc] py-24 px-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
            Advanced Property Management
          </motion.h2>
          <motion.p className="text-gray-500 max-w-2xl mx-auto" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
            Powerful features designed to help you build and manage your dream real estate portfolio efficiently.
          </motion.p>
        </div>

        {/* Top 4 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {features.map((feature, i) => (
            <motion.div key={i} className="text-center space-y-4 px-4" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center p-4">
                  <img src={feature.img} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
              <motion.h4 className="text-lg font-bold text-[#1a365d]" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{feature.title}</motion.h4>
              <motion.p className="text-gray-600 text-sm leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{feature.desc}</motion.p>
            </motion.div>
          ))}
        </div>

        {/* Featured Feature with Blue Blob Backdrop from image_631657.png */}
        <motion.div className="relative flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl shadow-sm overflow-hidden" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
          {/* Subtle Blue Blob Shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="w-full lg:w-1/2 relative">
             {/* Replace with your actual project UI screenshot */}
             <div className="bg-gray-100 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
               <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800" alt="Agent UI" className="w-full" />
             </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <motion.div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
              Agent Display Options
            </motion.div>
            <motion.h3 className="text-3xl font-bold text-[#1a365d]" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>Agent Information</motion.h3>
            <motion.p className="text-gray-600 text-lg leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={3}>
              Choose whether to display the agent's name, photo, or both on the 
              property card. You can also hide the agent section entirely or use 
              custom icons to match your site's branding.
            </motion.p>

            <motion.p className="text-gray-600 text-lg leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={3}>
            Control the visibility of agent details on property cards. Show agent information, display custom branding icons, or remove the section completely to match your website’s design style.
            </motion.p>
            
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectFeatures;