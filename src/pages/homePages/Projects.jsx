import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const Projects = () => {
    const projects = [
      { title: "Azure Heights", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",  content: "We provide expert property buying and selling services, ensuring smooth transactions with complete transparency and market insight." },

      { title: "Emerald Villas", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800", content: "Our property management solutions help owners maximize returns while maintaining high standards of care and tenant satisfaction." },

      { title: "Skyline Suites", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800", content: "With deep market research and investment guidance, we help clients make confident and profitable real estate decisions." },
    ];
  
    return (
      <motion.section
        className="py-20 bg-gray-50 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={blockVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 className="text-4xl font-bold mb-12 text-center" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Featured Projects</motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                variants={blockVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                custom={i}
              >
                <div className="overflow-hidden h-64">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.title} />
                </div>
                <div className="p-6">
                  <motion.h3 className="text-xl font-bold mb-4" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{p.title}</motion.h3>
                  <motion.p className="text-gray-600 text-sm leading-relaxed" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={i}>{p.content}</motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };
  export default Projects;