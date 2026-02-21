import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';
import management1 from '../../assets/managementImages/management1.png'
import management2 from '../../assets/managementImages/management2.png'
import management3 from '../../assets/managementImages/management3.png'
import management4 from '../../assets/managementImages/management4.png'


const ManagementServices = () => {
    const services = [
      { title: "Tenant Screening", desc: "Rigorous background checks to ensure only the most reliable residents for your property.", icon: management1, },
      { title: "Financial Reporting", desc: "Real-time owner portals with monthly statements, tax docs, and expense tracking.", icon: management2 },
      { title: "Maintenance Concierge", desc: "24/7 on-call repair teams to keep your luxury assets in pristine condition.",     icon: management3 },
      { title: "Legal Compliance", desc: "Expert handling of contracts, local laws, and eviction protections.", icon: management4 }
    ];
  
    return (
      <motion.section className="py-24 px-6 bg-white" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <motion.h2 className="text-[#1447E6] font-bold tracking-widest uppercase text-sm mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Our Expertise</motion.h2>
            <motion.h3 className="text-4xl md:text-5xl font-bold text-black max-w-2xl leading-tight" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>
              We handle the details. <br/>You enjoy the returns.
            </motion.h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} className="p-8 rounded-[35px] border border-gray-100 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 bg-white group" variants={blockVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
               <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#F0F4FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1447E6] transition-colors duration-300">
  <img
    src={s.icon}
    alt={s.title}
    className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:invert transition-all duration-300"
  />
</div>
                <motion.h4 className="text-xl font-bold text-black mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{s.title}</motion.h4>
                <motion.p className="text-gray-500 leading-relaxed text-sm" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{s.desc}</motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };
  export default ManagementServices;  