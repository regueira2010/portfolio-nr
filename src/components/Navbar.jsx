import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#featured-project' },
    { name: 'Certificaciones', href: '#certifications' },
    { name: 'GitHub', href: '#github-portfolio' },
    { name: 'Contacto', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-aws to-aws/70 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-dark-bg font-bold text-lg">{personalInfo.initials}</span>
            </div>
            <div className="hidden md:block">
              <p className="text-text-primary font-semibold text-sm">{personalInfo.shortName}</p>
              <p className="text-aws text-xs">Full Stack & Cloud</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-text-secondary hover:text-aws transition-colors duration-300 text-sm font-medium relative group"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-aws transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary text-2xl focus:outline-none"
            aria-label="Menú de navegación"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-3 space-y-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block text-text-secondary hover:text-aws transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-card-bg"
                initial={{ x: -20, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="h-0.5 bg-gradient-to-r from-aws via-aws/50 to-transparent origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.nav>
  );
};

export default Navbar;