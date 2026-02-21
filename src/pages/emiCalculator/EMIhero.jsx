import React from 'react'
import { motion } from 'framer-motion'
import EligibilitySection from './EligibilitySection'
import EMIPlans from './EMIPlans'
import EMIProcess from './EMIProcess'
import FlexibleEMI from './FlexibleEMI'
import { headingVariants, paraVariants } from '../../utils/motionVariants'
import { Link } from 'react-router-dom'
import EMICalculator from './EMIcalculator'

const EMIhero = () => {
  return (
   <>
  <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 via-[#0A2540]/70 to-transparent"></div>
      </div>
      
      {/* Premium overlay pattern */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl text-white space-y-8">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-left"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Smart <span className="">Property Financing</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-xl text-left"
          variants={paraVariants}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Plan your home purchase with flexible EMI options, expert loan guidance,
          and financing solutions tailored to your budget and long-term goals.
        </motion.p>
          
          <motion.div className="pt-4 flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
           <Link to='/contact'>
           <button className="px-10 py-4 bg-gradient-to-r from-[#1447E6] to-[#1447E6] hover:from-[#7393f4] hover:to-[#D4AF37] text-white font-bold rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
              Calculate Your EMI
            </button>
           </Link>
           
          </motion.div>
        </div>
      </div>
    </section>
<EMICalculator/>
<EMIPlans/>
<EMIProcess/>
<FlexibleEMI/>
<EligibilitySection/>
   </>
  )
}

export default EMIhero