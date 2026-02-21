import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content: "Finding a dream home was effortless with LuxeEstate. Their attention to detail is unmatched."
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    content: "The property management team has been incredible. Professionalism at every step."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    content: "Their market analysis and sourcing process are top-tier. Highly recommended."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    content: "As an architect, I appreciate their focus on structural integrity and modern design."
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    // Determines how far to slide (adjust 400 based on card width + gap)
    const scrollAmount = direction === 'left' ? -400 : 400;
    
    current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <motion.section
      className="py-24 bg-gray-50 px-6 relative"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={blockVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 className="text-4xl font-bold font-serif" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Client Stories</motion.h2>
            <div className="w-12 h-1 bg-blue-700 mt-2"></div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              className="min-w-[320px] md:min-w-[450px] bg-white p-10 rounded-3xl shadow-sm border border-gray-100 snap-center flex-shrink-0"
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={i}
            >
              <FaQuoteLeft className="text-blue-100 text-4xl mb-6" />
              <motion.p className="text-gray-600 text-lg italic mb-8 leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                "{item.content}"
              </motion.p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100" 
                />
                <div>
                  <motion.h4 className="font-bold text-gray-900" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{item.name}</motion.h4>
                  <motion.p className="text-sm text-blue-700 uppercase tracking-widest" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{item.role}</motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;