import { motion } from 'framer-motion';
import { blockVariants, headingVariants, paraVariants, viewportOnce } from '../../utils/motionVariants';

const ContactFormMap = () => {
    return (
      <motion.section className="py-20 px-6" initial="hidden" whileInView="visible" viewport={viewportOnce} variants={blockVariants}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Side: Contact Form */}
          <div className="lg:w-5/12 bg-white border border-gray-100 p-8 md:p-12 rounded-[50px] shadow-sm">
            <motion.h2 className="text-4xl font-bold text-black mb-2" variants={headingVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>Send a Message</motion.h2>
            <motion.p className="text-gray-500 mb-8" variants={paraVariants} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={1}>Tell us about your property needs.</motion.p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full p-4 bg-[#F8FAFF] rounded-2xl border-none focus:ring-2 focus:ring-[#1447E6] text-black" />
                <input type="text" placeholder="Last Name" className="w-full p-4 bg-[#F8FAFF] rounded-2xl border-none focus:ring-2 focus:ring-[#1447E6] text-black" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#F8FAFF] rounded-2xl border-none focus:ring-2 focus:ring-[#1447E6] text-black" />
              <select className="w-full p-4 bg-[#F8FAFF] rounded-2xl border-none focus:ring-2 focus:ring-[#1447E6] text-black">
                <option>Inquiry Type</option>
                <option>Property Management</option>
                <option>EMI Plans</option>
                <option>Buying/Selling</option>
              </select>
              <textarea placeholder="Your Message" rows="4" className="w-full p-4 bg-[#F8FAFF] rounded-2xl border-none focus:ring-2 focus:ring-[#1447E6] text-black"></textarea>
              
              <button className="w-full bg-[#1447E6] text-white py-5 rounded-full font-bold text-lg hover:bg-black transition-all duration-300">
                Send Inquiry
              </button>
            </form>
          </div>
  
          {/* Right Side: Map Block */}
          <div className="lg:w-7/12 min-h-[450px] relative rounded-[50px] overflow-hidden shadow-xl">
            {/* Replace SRC with your actual Google Maps Embed URL */}
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.471334756654!2d-73.985428!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1614123456789!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            
            {/* Floating Badge (Classy Detail) */}
            <div className="absolute bottom-8 left-8 bg-black text-white p-6 rounded-3xl hidden md:block">
              <p className="font-bold">Main Headquarters</p>
              <p className="text-sm text-gray-400">Open: Mon - Fri (9am - 6pm)</p>
            </div>
          </div>
  
        </div>
      </motion.section>
    );
  };
  export default ContactFormMap;