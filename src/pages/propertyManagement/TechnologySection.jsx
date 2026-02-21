import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const TechnologySection = () => {
    return (
      <motion.section className="py-20 px-6 bg-[#F8FAFF]" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div className="inline-block px-4 py-2 bg-[#1447E6]/10 text-[#1447E6] rounded-full text-sm font-bold mb-6" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
              Smart Management
            </motion.div>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
              Full transparency <br/> in the palm of your hand.
            </motion.h2>
            <motion.p className="text-lg text-gray-600 mb-8" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              Our proprietary Owner Portal gives you a bird's-eye view of your portfolio performance, occupancy rates, and maintenance requests in real-time.
            </motion.p>
            <motion.div className="grid grid-cols-2 gap-6" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={3}>
              <div>
                <h5 className="text-[#1447E6] text-3xl font-bold">98%</h5>
                <p className="text-black font-medium">Occupancy Rate</p>
              </div>
              <div>
                <h5 className="text-[#1447E6] text-3xl font-bold">24hr</h5>
                <p className="text-black font-medium">Response Time</p>
              </div>
            </motion.div>
          </div>
          <motion.div className="lg:w-1/2 relative" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
            <div className="bg-black rounded-[50px] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Dashboard Preview" 
                className="opacity-80 w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>
    );
  };
  export default TechnologySection;