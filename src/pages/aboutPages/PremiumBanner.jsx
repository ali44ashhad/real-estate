import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const PremiumBanner = () => {
    return (
      <motion.section className="relative h-[400px] flex items-center justify-start px-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover" 
            alt="Banner"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.h2 className="text-5xl md:text-6xl font-bold text-white mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
            Premium Houses <br /> and Apartments
          </motion.h2>
          <motion.p className="text-white text-lg font-medium" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
            Save your time and easily rent or sell your property
          </motion.p>
        </div>
      </motion.section>
    );
  };
  
  export default PremiumBanner;