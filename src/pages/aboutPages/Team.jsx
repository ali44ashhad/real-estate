import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const Team = () => {
    const members = [
      { name: "Ellie Holmes", role: "SALES ADVISOR", img: "https://i.pravatar.cc/150?u=1" },
      { name: "Tiana Ray", role: "HOME INSPECTOR", img: "https://i.pravatar.cc/150?u=2" },
      { name: "Kevin Wels", role: "MANAGER", img: "https://i.pravatar.cc/150?u=3" },
      { name: "Chase Wales", role: "AGENT", img: "https://i.pravatar.cc/150?u=4" },
    ];
  
    return (
      <motion.section className="py-20 bg-white px-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {members.map((m, i) => (
            <motion.div key={i} className="flex items-center gap-6 group cursor-pointer" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
              <img 
                src={m.img} 
                className="w-24 h-24 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                alt={m.name} 
              />
              <div className="space-y-1">
                <motion.h4 className="text-xl font-bold text-gray-900 flex items-center gap-2" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                  {m.name} <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest bg-gray-100 px-2 py-0.5 rounded">{m.role}</span>
                </motion.h4>
                <motion.p className="text-sm text-gray-500 italic leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                  "Ut vix primis tractatos. Ad est alterum epicurei accusamus. Duo per id his qualisque deseruisse reformidans ex."
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Pagination dots simulation */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-[#e2bc8a]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>
      </motion.section>
    );
  };
  
  export default Team;