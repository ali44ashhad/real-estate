import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../utils/useScrollAnimation';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const EMIProcess = () => {
    const [sectionRef] = useScrollAnimation({ threshold: 0.1 });
    
    const steps = [
      { 
        title: "Eligibility Assessment", 
        desc: "Complete our quick eligibility check with basic financial details. Our experts analyze your profile to determine your loan limit and best financing options.",
        icon: "📋"
      },
      { 
        title: "Property Selection", 
        desc: "Browse our curated collection of luxury properties and investment opportunities. Get expert guidance to choose the perfect property that matches your goals.",
        icon: "🏠"
      },
      { 
        title: "Loan Approval", 
        desc: "Receive instant pre-approval and digital sanction within 24-48 hours. Fast-track processing for qualified applicants with competitive interest rates.",
        icon: "✅"
      },
      { 
        title: "Documentation & Handover", 
        desc: "Streamlined e-verification process with legal support. Complete documentation assistance and seamless property handover with our dedicated team.",
        icon: "📄"
      }
    ];
  
    return (
      <motion.section ref={sectionRef} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAFAFA] to-white" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span className="text-[#1447E6] font-bold tracking-[0.2em] uppercase text-sm mb-4 block" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Our Process</motion.span>
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Your Real Estate Loan Journey</motion.h2>
            <motion.p className="text-lg md:text-xl text-[#1447E6] max-w-3xl mx-auto leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              A seamless, transparent process designed to make your property financing experience smooth and stress-free.
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1447E6] to-[#1447E6] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* Premium Connector Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4AF37] via-[#1E40AF] to-[#D4AF37] -translate-y-1/2 z-0 opacity-30"></div>
            
            {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative z-10 bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-[#1447E6] flex flex-col items-center text-center transition-all duration-500 transform hover:-translate-y-2 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={blockVariants}
                  custom={i}
                >
                  {/* Premium Number Badge */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-xl relative">
                    <span className="absolute text-6xl font-black text-[#D4AF37]/10 -z-10">{i + 1}</span>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  
                  <motion.h4 className="font-bold text-[#0A2540] text-xl mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{step.title}</motion.h4>
                  <motion.p className="text-[#6B7280] text-sm leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{step.desc}</motion.p>
                  
                  {/* Decorative gold accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default EMIProcess;