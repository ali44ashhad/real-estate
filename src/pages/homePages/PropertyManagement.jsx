import React from 'react';
import { motion } from 'framer-motion';
import property3 from '../../assets/homeImages/project3.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const services = [
  { 
    title: "Tenant Screening", 
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=400", 
    desc: "Rigorous background checks to find reliable occupants for your luxury units.",
    content: "We carefully select trustworthy tenants so your property remains secure, profitable, and stress-free. Because the right tenant builds long-term success."
  },
  { 
    title: "Rent Collection", 
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400", 
    desc: "Automated systems for timely, secure, and hassle-free financial management.",
    content: "Experience seamless rent collection with reliable systems that protect your cash flow and maximize returns — ensuring consistent income without complications."
  },
  { 
    title: "Property Maintenance", 
    image: property3, 
    desc: "Elite 24/7 maintenance support to keep your assets in pristine condition.",
    content: "Protect and preserve your investment with proactive maintenance solutions that maintain value, enhance appeal, and deliver peace of mind year-round."
  },
  { 
    title: "Legal Compliance", 
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400", 
    desc: "Ensuring all properties meet evolving local and federal real estate laws.",
    content: "Stay confident knowing your properties meet every legal standard. We handle the complexities so you can focus on growing your real estate success."
  },
  { 
    title: "Portfolio Management", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400", 
    desc: "Strategic planning and reporting to grow your global real estate wealth.",
    content: "Empower your investment journey with strategic insights and data-driven decisions that expand your portfolio and unlock sustainable growth."
  },
  { 
    title: "Leasing Services", 
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400", 
    desc: "Professional marketing and staging to minimize vacancy rates efficiently.",
    content: "Attract the right tenants faster with professional marketing and expert staging that elevates your property’s appeal and reduces vacancy time."
  }
];

const PropertyManagement = () => {
  return (
    <motion.section
      className="py-24 bg-gray-50 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={blockVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span className="text-blue-700 font-bold tracking-[0.2em] uppercase text-sm block" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Services</motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Property Management</motion.h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={blockVariants}
              custom={i}
            >
              {/* Image Header */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <motion.h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-700 transition-colors" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                  {s.title}
                </motion.h3>
                <motion.p className="text-gray-600 leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                  {s.desc}
                </motion.p>
                <div className="mt-6 flex items-center text-gray-700 font-semibold text-sm tracking-wider cursor-pointer">
                  {s.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PropertyManagement;