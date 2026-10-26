import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt } from 'react-icons/fa';
import { experiences } from '../data/portfolioData';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Trayectoria <span className="text-gradient">Profesional</span>
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-aws to-transparent" />
                )}
                
                <div className="flex gap-6">
                  {/* Timeline icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-card-bg rounded-full flex items-center justify-center border-2 border-aws shadow-lg">
                      <exp.icon className={`${exp.color} text-2xl`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card-bg rounded-2xl p-6 card-hover">
                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                      <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-aws">
                        <FaCalendarAlt className="text-sm" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-text-secondary">
                          <span className="text-aws mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;