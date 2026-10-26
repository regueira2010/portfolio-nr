import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg/95 to-dark-bg/90" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-aws/5 via-aws/10 to-transparent blur-3xl animate-pulse" />
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 inline-block"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-aws to-aws/50 p-1 shadow-2xl animate-glow">
              <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center overflow-hidden">
                <span className="text-6xl font-bold text-gradient">{personalInfo.initials}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl text-aws font-semibold mb-3 tracking-wide"
          >
            {personalInfo.tagline}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-gray-300 font-medium mb-4 flex items-center justify-center gap-2"
          >
            <FaMapMarkerAlt className="text-aws text-xs" />
            <span>{personalInfo.location}</span>
            <span className="text-gray-500">•</span>
            <span className="text-text-secondary">{personalInfo.subtitle}</span>
          </motion.p>
          
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <FaGithub /> Ver GitHub
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 bg-aws hover:bg-aws/80 text-dark-bg font-semibold rounded-lg flex items-center gap-2 transition-all duration-300"
            >
              <FaEnvelope /> Contactar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-aws rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;