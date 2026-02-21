import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const Stats = () => {
    const data = [
      { label: "Median sold price", value: "$980k" },
      { label: "Properties sold", value: "24" },
      { label: "Median leased price", value: "$680k" },
      { label: "Properties leased", value: "95" },
      { label: "Sales & rental transactions", value: "$522k" },
    ];
  
    return (
      <motion.section className="py-12 bg-blue-50/50 px-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {data.map((stat, i) => (
            <motion.div key={i} className="space-y-2" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
              <motion.h3 className="text-3xl font-bold text-[#1a365d]" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{stat.value}</motion.h3>
              <motion.p className="text-xs uppercase tracking-widest text-gray-500 font-semibold" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };
  
  export default Stats;