import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const ContactInfo = () => {
    const info = [
      {
        title: "Visit Our Office",
        detail: "123 Skyline Tower, Financial District, New York, NY 10013",
        label: "Our Address",
        icon: "📍"
      },
      {
        title: "Call Us Anytime",
        detail: "+1 (555) 000-1234 / +1 (555) 999-5678",
        label: "Phone Number",
        icon: "📞"
      },
      {
        title: "Email Support",
        detail: "info@luxerealty.com support@luxerealty.com",
        label: "Email Address",
        icon: "✉️"
      }
    ];
  
    return (
      <motion.section className="py-16 px-6 bg-white" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {info.map((item, i) => (
            <motion.div
              key={i}
              className="group p-10 bg-[#F0F9FF] rounded-[40px] border-2 border-transparent hover:border-[#1447E6] transition-all duration-300"
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={i}
            >
              <div className="text-3xl mb-6">{item.icon}</div>
              <motion.h4 className="text-[#1447E6] font-bold uppercase tracking-widest text-xs mb-2" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                {item.label}
              </motion.h4>
              <motion.h3 className="text-2xl font-bold text-black mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{item.title}</motion.h3>
              <motion.p className="text-black/70 leading-relaxed font-medium" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>
                {item.detail}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    );
  };
  export default ContactInfo;