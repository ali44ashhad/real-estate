import React from 'react'
import { motion } from 'framer-motion'
import Vision from './Vision'
import Stats from './Stats'
import Mission from './Mission'
import PremiumBanner from './PremiumBanner'
import Team from './Team'
import aboutHero from '../../assets/aboutImages/about-bg.jpg'
import { headingVariants, paraVariants } from '../../utils/motionVariants'
import { Link } from 'react-router-dom'

const AboutHero = () => {

  return (

    <>
   <section className="relative h-[100vh] w-full overflow-hidden">
  {/* Background Image */}
  <img 
    src={aboutHero} 
    alt="About Our Real Estate Company" 
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto h-full px-6 flex items-center">
    <div className="max-w-2xl text-white space-y-6">
      
      <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight" variants={headingVariants} initial="hidden" animate="visible" custom={0}>
        About <span className="text-blue-400">Our Company</span>
      </motion.h1>

      <motion.p className="text-lg md:text-xl text-gray-200 leading-relaxed" variants={paraVariants} initial="hidden" animate="visible" custom={1}>
        We deliver trusted real estate solutions with a focus on quality,
        transparency, and long-term value for our clients.
      </motion.p>

      <motion.div className="pt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
       <Link to='/contact'>
       <button className="px-8 py-4 bg-[#1a365d] hover:bg-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg">
          Learn More
        </button>
       </Link>
      </motion.div>

    </div>
  </div>
</section>

    <Vision />
      <Stats />
      <Mission />
      <PremiumBanner />
      <Team />

      </>
  )
}

export default AboutHero