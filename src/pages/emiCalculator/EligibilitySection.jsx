import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../utils/useScrollAnimation';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';
import { Link } from 'react-router-dom';


const EligibilitySection = () => {
    const [sectionRef, isSectionVisible] = useScrollAnimation({ threshold: 0.1 });
    const [ctaRef, isCtaVisible] = useScrollAnimation({ threshold: 0.2 });
    
    const cards = [
      { 
        title: "Instant Eligibility Check", 
        desc: "Get your loan eligibility assessed in under 2 minutes with our AI-powered system. Know your financing capacity instantly with basic financial details.",
        icon: "⚡",
        color: "from-[#D4AF37] to-[#F4D03F]"
      },
      { 
        title: "Premium Bank Partnerships", 
        desc: "Access exclusive rates from 20+ leading banks and financial institutions. We negotiate the best terms for luxury property financing and investment loans.",
        icon: "🏦",
        color: "from-[#1E3A5F] to-[#1E40AF]"
      },
      { 
        title: "Comprehensive Legal Support", 
        desc: "Free legal consultation and documentation assistance for all property transactions. Expert guidance on property laws, contracts, and compliance requirements.",
        icon: "⚖️",
        color: "from-[#0A2540] to-[#1E3A5F]"
      }
    ];
  
    return (
      <motion.section ref={sectionRef} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FAFAFA]" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span className="text-[#1447E6] font-bold tracking-[0.2em] uppercase text-sm mb-4 block" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Why Choose Us</motion.span>
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Your Trusted Real Estate Financing Partner</motion.h2>
            <motion.p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              Experience premium service with comprehensive support throughout your property investment journey.
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1447E6] to-[#1447E6] mx-auto mt-6"></div>
          </div>
          
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {cards.map((card, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-[#1447E6] transition-all duration-500 transform hover:-translate-y-2 group relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={blockVariants}
                  custom={i}
                >
                  {/* Premium Icon Badge */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl mb-6 flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  
                  <motion.h4 className="text-2xl font-bold text-[#0A2540] mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{card.title}</motion.h4>
                  <motion.p className="text-[#6B7280] mb-6 leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{card.desc}</motion.p>
                  
                  {/* <button className="text-[#0A2540] font-bold flex items-center group-hover:text-[#D4AF37] transition-colors">
                    Learn More 
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </button> */}
                  
                  {/* Decorative accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1447E6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
            ))}
          </div>
        
          {/* Premium CTA Section */}
          <motion.div
            ref={ctaRef}
            className="max-w-5xl mx-auto bg-gradient-to-br from-[#0A2540] via-[#1E3A5F] to-[#0A2540] rounded-[50px] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={blockVariants}
            custom={0}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#1E40AF]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
                Ready to Invest in Your Dream Property?
              </motion.h2>
              <motion.p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
                Connect with our real estate financing experts today. Get personalized loan solutions, 
                investment strategies, and exclusive property recommendations tailored to your goals.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to='/contact'>
                <button className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] hover:from-[#F4D03F] hover:to-[#D4AF37] text-[#0A2540] px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl transform">
                  Request Free Consultation
                </button>
                </Link>
                <Link to='/contact'>
                <button className="bg-transparent border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300">
                  Calculate Your EMI
                </button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center items-center gap-8 text-gray-300 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>20+ Bank Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>Free Legal Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D4AF37]">✓</span>
                  <span>24/7 Expert Assistance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };
  
  export default EligibilitySection;