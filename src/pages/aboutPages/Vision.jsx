import { motion } from 'framer-motion';
import visionImage from '../../assets/aboutImages/about-vision-img.jpg'
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const Vision = () => {
    return (
      <motion.section className="py-16 md:py-24 bg-white px-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div className="w-full md:w-1/2" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
            <img 
              src={visionImage}
              alt="Vision" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
          <div className="w-full md:w-1/2 space-y-6">
            <motion.h2 className="text-4xl font-bold text-[#1a365d]" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Vision</motion.h2>
            <motion.p className="text-gray-600 leading-relaxed text-lg" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={2}>
              Maxim saepe instructor mei ei, sanctus assueverit per at, ad eam veri putant nonumes. Id duo modo quidam maluisset, ut tractatos intellegat. No electram repudiandae qui, sa soluta meliore accumsan vel, est veniam populo ea.
            </motion.p>
            <p className="px-2 py-3 bg-[#f9f4ee] text-[#b68a5a] font-semibold rounded-lg inline-block">
  Explore our exclusive solutions designed to maximize your property’s true potential.
</p>
          </div>
        </div>
      </motion.section>
    );
  };
  
  export default Vision;