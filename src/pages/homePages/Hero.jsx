import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import About from './About';
import MissionSection from './MissionSection';
import ContactForm from './ContactForm';
import PropertyManagement from './PropertyManagement';
import Testimonials from './Testimonial';
import { headingVariants, paraVariants } from '../../utils/motionVariants';
import { Link } from 'react-router-dom';

const Hero = () => {
  const slides = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1920",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    
    <section className="relative h-screen overflow-hidden">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={s} className="w-full h-full object-cover" alt="Luxury Home" />
        </div>
      ))}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-white mb-6"
        variants={headingVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Your Dreams Our Mission
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto text-center leading-relaxed"
        variants={paraVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        We connect you with exceptional properties that match your lifestyle and investment goals.
        With expert guidance, market insight, and personalized service, we make every step of your
        real estate journey smooth, transparent, and rewarding.
      </motion.p>

        <Link to="/contact">
        <motion.button
          className="mt-5 px-8 py-4 bg-blue-700 text-white font-bold rounded-sm hover:bg-blue-800 hover:shadow-[0_0_20px_rgba(29,78,216,0.5)] transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          CONTACT US
        </motion.button>

        </Link>
      </div>
    </section>



{/* projects section */}
<Projects />
<About/>
<PropertyManagement/>

<MissionSection/>
<Testimonials/>
<ContactForm/>





    </>
  );
};

 export default Hero;