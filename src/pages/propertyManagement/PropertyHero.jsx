import React from 'react'
import { motion } from 'framer-motion'
import ManagementServices from './ManagementServices'
import TechnologySection from './TechnologySection'
import propertyHero from '../../assets/managementImages/management-bg.jpg'
import { headingVariants, paraVariants } from '../../utils/motionVariants'
import { Link } from 'react-router-dom'

const PropertyHero = () => {
  return (
    <>
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image using <img> tag */}
      <img 
        src={propertyHero}
        alt="Luxury Real Estate" 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-2xl text-white space-y-6">
        <motion.h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-left" variants={headingVariants} initial="hidden" animate="visible" custom={0}>
  Professional <span className="text-blue-400">Property Management</span>
</motion.h1>

<motion.p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl text-left" variants={paraVariants} initial="hidden" animate="visible" custom={1}>
  We handle leasing, maintenance, and tenant management with efficiency and care,
  ensuring your property delivers consistent returns and long-term value.
</motion.p>
          <motion.div className="pt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
           <Link to='/contact'>
           <button className="px-8 py-4 bg-[#1a365d] hover:bg-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg">
              Explore Listings
            </button>
           </Link>
          </motion.div>
        </div>
      </div>
    </section>
    <ManagementServices/>
    <TechnologySection/>

    </>
  )
}

export default PropertyHero