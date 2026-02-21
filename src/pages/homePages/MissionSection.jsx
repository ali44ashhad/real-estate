import React from 'react';
import { motion } from 'framer-motion';
import mission1 from '../../assets/homeImages/mission1.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const MissionSection = () => {
  const steps = [
    { 
      num: "01", 
      title: "Analyze Requirements", 
      image: mission1,
      text: "We begin with a personalized consultation to understand your unique needs and lifestyle preferences.",
      tag: "Discovery",
      content : "We begin with a personalized consultation to understand your unique needs and lifestyle preferences."
    },
    { 
      num: "02", 
      title: "Global Sourcing", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
      text: "Our experts curate the finest properties across the globe, ensuring every option meets our rigorous standards.",
      tag: "Selection",
      content : "Our experts curate the finest properties across the globe, ensuring every option meets our rigorous standards."
    },
    { 
      num: "03", 
      title: "Final Handover", 
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
      text: "From legal paperwork to the final key exchange, we ensure a seamless and prestigious transition.",
      tag: "Completion",
      content : "From legal paperwork to the final key exchange, we ensure a seamless and prestigious transition."
    }
  ];

  return (
    <motion.section
      className="py-24 bg-white px-6 overflow-hidden font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={blockVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Our Mission</motion.h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mt-4"></div>
        </div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={blockVariants}
              custom={i}
            >
              
              {/* Image Side with Hover Effects */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="relative group cursor-pointer">
                  
                  {/* Background Number (Stays Static) */}
                  <span className="text-[10rem] md:text-[14rem] font-black text-gray-50 leading-none absolute -top-10 left-1/2 -translate-x-1/2 z-0">
                    {step.num}
                  </span>

                  {/* Image Container with Outer Ring Hover */}
                  <div className="relative z-10">
                    {/* The Outer Animated Ring */}
                    <div className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-700/20 group-hover:border-blue-700 group-hover:rotate-90 transition-all duration-700 ease-in-out"></div>
                    
                    {/* The Main Circular Image */}
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      />
                      {/* Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <span className="text-white font-bold tracking-widest text-xs uppercase bg-blue-700 px-4 py-2 rounded-full shadow-lg">
                           {step.tag}
                         </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <motion.h3 className="text-3xl font-bold text-gray-900 mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{step.title}</motion.h3>
                <motion.p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                  {step.text}
                </motion.p>
                <button className="mt-8 text-gray-700 text-left font-thin flex gap-2 hover:gap-4 transition-all mx-auto lg:mx-0">
                  {step.content}
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MissionSection;