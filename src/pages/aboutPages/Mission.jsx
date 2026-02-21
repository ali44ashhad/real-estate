import { motion } from 'framer-motion';
import missionImage from '../../assets/aboutImages/mission.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const Mission = () => {
    return (
      <motion.section className="py-16 md:py-24 bg-white px-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div className="w-full md:w-1/2" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
            <img 
              src={missionImage} 
              alt="Mission" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <motion.h2 className="text-4xl font-bold text-[#1a365d]" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Mission</motion.h2>
            <motion.p
  className="text-gray-600 leading-relaxed text-lg"
  variants={paraVariants}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOnce}
  custom={2}
>
  We deliver comprehensive real estate solutions designed to simplify ownership and maximize returns. From premium tenant management to strategic investment planning, our expert team ensures every property is managed with precision, transparency, and long-term growth in mind.
</motion.p>

<p className=" py-3 text-gray-400 font-semibold text-lg max-w-xl text-left">
  Partner with us to protect your assets, increase property value, and experience seamless real estate management tailored to your goals.
</p>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default Mission;