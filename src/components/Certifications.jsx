import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate } from 'react-icons/fa';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="certifications" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={cardVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Certificaciones <span className="text-gradient">Profesionales</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-card-bg rounded-xl p-6 card-hover relative overflow-hidden group"
              >
                {/* Badge effect */}
                <div className={`absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 rounded-full ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                
                <div className="flex items-start gap-4">
                  <div className={`${cert.color} text-3xl`}>
                    <cert.icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-primary mb-1">{cert.name}</h3>
                    <p className="text-text-secondary text-sm">{cert.issuer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <FaCertificate className="text-aws text-xs" />
                      <span className="text-xs text-aws font-medium">{cert.highlight || "Certificación Oficial"}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;