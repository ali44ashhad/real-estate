import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../utils/useScrollAnimation';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const FlexibleEMI = () => {
    const [sectionRef] = useScrollAnimation({ threshold: 0.2 });
    
    const features = [
      'Zero Foreclosure Charges',
      'Annual Repayment Holidays',
      'Custom Payment Schedules',
      'Prepayment Benefits',
      'Investment Portfolio Optimization'
    ];
    
    return (
      <motion.section ref={sectionRef} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#FAFAFA] via-white to-[#FAFAFA]" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Side: Content */}
            <div className="lg:w-1/2">
              <motion.span className="text-[#1447E6] font-bold tracking-[0.2em] uppercase text-sm mb-4 block" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Investment Strategy</motion.span>
              <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6 leading-tight" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
                Flexible Financing for <br />
                <span className="text-[#1447E6]">Luxury Property Investment</span>
              </motion.h2>
              <motion.p className="text-lg md:text-xl text-[#6B7280] leading-relaxed mb-8" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
                Adapt your EMI to match your financial growth. Our flexible payment plans are designed for real estate 
                investors and luxury property buyers who need adaptable financing solutions. Increase payments during 
                peak earning years or reduce them during initial investment phases.
              </motion.p>
              
              <ul className="space-y-4 mb-10">
                {features.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center text-[#1F2937] font-semibold text-base md:text-lg"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <span className="w-8 h-8 bg-gradient-to-br from-[#1447E6] to-[#1447E6] text-[#0A2540] rounded-full flex items-center justify-center mr-4 text-sm font-bold shadow-md flex-shrink-0">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
             
            </div>
  
            {/* Right Side: Premium Image Block */}
            <motion.div className="lg:w-1/2 w-full" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants} custom={1}>
              <div className="relative">
                {/* Premium Decorative Elements */}
                {/* <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-[60px] translate-x-4 translate-y-4 -z-10 opacity-20"></div> */}
                <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-gradient-to-br from-[#1E3A5F] to-[#1E40AF] rounded-[50px] -translate-x-4 -translate-y-4 -z-10 opacity-10"></div>
                
                {/* Main Image */}
                <div className="relative rounded-[50px] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                    alt="Luxury Real Estate Investment" 
                    className="w-full h-[500px] md:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/40 to-transparent"></div> */}
                  
                  {/* Premium Badge */}
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
                    <p className="text-sm text-[#6B7280] mb-1">Investment Value</p>
                    <p className="text-2xl font-bold text-[#0A2540]">Premium Properties</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default FlexibleEMI;