import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/homePages/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PropertyHero from './pages/propertyManagement/PropertyHero';
import AboutHero from './pages/aboutPages/AboutHero';
import ServiceHero from './pages/services/ServiceHero';
import ProjectHero from './pages/projects/ProjectHero';
import EMIhero from './pages/emiCalculator/EMIhero';
import ContactHero from './pages/contact/ContactHero';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // loader duration

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emi-calculator" element={<EMIhero />} />
        <Route path="/property-management" element={<PropertyHero />} />
        <Route path="/contact" element={<ContactHero />} />
        <Route path="/about" element={<AboutHero />} />
        <Route path="/services" element={<ServiceHero />} />
        <Route path="/projects" element={<ProjectHero />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;