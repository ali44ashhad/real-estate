import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../utils/useScrollAnimation';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const EMIPlans = () => {
    const [sectionRef] = useScrollAnimation({ threshold: 0.2 });
    
    const plans = [
      { 
        title: "Luxury Home Loan", 
        rate: "7.5%", 
        desc: "Premium financing for luxury properties with flexible repayment options. Perfect for high-value real estate investments and upscale residential purchases.", 
        tag: "Premium Choice",
        features: ["Up to 90% financing", "Flexible tenure up to 30 years", "Pre-approved offers"]
      },
      { 
        title: "Investment Property Plan", 
        rate: "8.2%", 
        desc: "Strategic financing solutions for real estate investors. Optimize your portfolio with competitive rates and investment-friendly terms for rental properties.", 
        tag: "Investors",
        features: ["Portfolio expansion support", "Rental income consideration", "Tax benefits guidance"]
      },
      { 
        title: "First-Time Buyer Special", 
        rate: "6.9%", 
        desc: "Exclusive rates for first-time homebuyers. Start your property journey with lower EMIs, government subsidies, and expert guidance throughout the process.", 
        tag: "Best Value",
        features: ["Subsidized interest rates", "Lower down payment", "Free legal consultation"]
      }
    ];
  
    return (
      <motion.section ref={sectionRef} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAFAFA] to-white" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span className="text-[#1447E6] font-bold tracking-[0.2em] uppercase text-sm mb-4 block" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Financing Solutions</motion.span>
            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Premium EMI Plans for Every Investor</motion.h2>
            <motion.p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              Tailored financing solutions designed for luxury property buyers, real estate investors, and first-time homebuyers. 
              Choose the plan that aligns with your investment strategy.
            </motion.p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1447E6] to-[#1447E6] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-3xl border-2 border-gray-100 hover:border-[#1447E6] transition-all duration-500 group relative overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={blockVariants}
                  custom={i}
                >
                  {/* Premium gold accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1447E6] to-[#F4D03F]"></div>
                  
                  <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-[#0A2540] text-xs px-4 py-2 rounded-full absolute top-6 right-6 font-bold shadow-md">
                    {plan.tag}
                  </span>
                  
                  <motion.h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mt-4 mb-2" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{plan.title}</motion.h3>
                  
                  <div className="my-6 pb-6 border-b border-gray-100">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#1E3A5F] to-[#1E40AF] bg-clip-text text-transparent">{plan.rate}</span>
                    <span className="text-[#6B7280] ml-2 text-lg">p.a. interest rate</span>
                  </div>
                  
                  <motion.p className="text-[#6B7280] leading-relaxed mb-6 text-base" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{plan.desc}</motion.p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-[#1F2937]">
                        <span className="text-[#D4AF37] mr-3 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-[#0A2540] to-[#1E3A5F] hover:from-[#1E3A5F] hover:to-[#0A2540] text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Select This Plan
                  </button>
                </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default EMIPlans;