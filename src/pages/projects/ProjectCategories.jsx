import React from 'react';
import { motion } from 'framer-motion';
import singleFamily from '../../assets/projectsImages/single-family.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const ProjectCategories = () => {
  const categories = [
    { title: "Apartments", count: "5 listings", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600" },
    { title: "Commercial", count: "0 listings", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" },
    { title: "Condos", count: "3 listings", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=600" },
    { title: "Duplexes", count: "1 listing", img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&q=80&w=600" },
    { title: "Houses", count: "1 listing", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600" },
    { title: "Multi Family", count: "0 listings", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=600" },
    { title: "Residential", count: "1 listing", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600" },
    { title: "Single Family", count: "1 listing", img: singleFamily },
  ]
  return (
    <motion.section className="bg-white py-16 px-6 lg:px-12" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
      <div className="max-w-7xl mx-auto">
        {/* Header following image_62a95c.png */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16 border-l-2 border-orange-500 pl-8">
          <div className="md:w-1/2">
            <motion.div className="flex items-center gap-2 mb-3" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
              <span className="w-2 h-2 rounded-full border border-orange-500"></span>
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Categories</span>
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] leading-tight font-serif" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
              Find Your Perfect Fit <br /> In Urban Real Estate
            </motion.h2>
          </div>
          <div className="md:w-1/3 pt-6">
            <motion.p className="text-gray-600 text-lg leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              Whether you're drawn to city living or suburban retreats, our 
              comprehensive category exploration helps you navigate with confidence.
            </motion.p>
          </div>
        </div>

        {/* Grid following image_62a95c.png style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div key={i} className="group cursor-pointer" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
              <div className="relative overflow-hidden aspect-[4/3] rounded-[2rem] rounded-tr-[0.5rem] rounded-bl-[0.5rem] mb-4">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <motion.h3 className="text-xl font-bold text-[#1a365d] group-hover:text-orange-500 transition-colors" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                {cat.title}
              </motion.h3>
              <motion.p className="text-gray-500 text-sm font-medium" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{cat.count}</motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectCategories;