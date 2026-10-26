import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, journeyPillars } from '../data/portfolioData';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const techBadges = [
    'Java 21', 'Spring Boot 3', 'React 19', 'TypeScript', 
    'PostgreSQL', 'TDD (JUnit 5)', 'AWS Cloud', 'Docker', 
    'Hexagonal Arch', 'Node.js', 'Tailwind CSS', 'Git'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-premium">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Mi <span className="text-gradient">Trayectoria</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="bg-card-bg rounded-2xl p-8 shadow-xl">
            {personalInfo.story.map((paragraph, index) => (
              <p key={index} className="text-text-primary text-base md:text-lg leading-relaxed mb-6 last:mb-6">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
              {techBadges.map((item, index) => (
                <span key={index} className="bg-dark-bg/60 border border-gray-800 text-aws px-3 py-2 rounded-lg text-center text-sm font-medium hover:border-aws/50 transition-colors">
                  {item}
                </span>
              ))}
            </div>
            
            {/* Journey Pillars */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h3 className="text-xl font-semibold mb-6 text-center">Mis Tres Pilares</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {journeyPillars.map((pillar, idx) => (
                  <div key={idx} className="bg-dark-bg/40 p-5 rounded-xl border border-gray-800/80 text-center hover:border-aws/40 transition-colors">
                    <div className="w-16 h-16 bg-dark-bg rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-aws shadow-md">
                      <pillar.icon className="text-aws text-2xl" />
                    </div>
                    <p className="font-semibold text-text-primary text-lg">{pillar.title}</p>
                    <p className="text-aws text-xs font-semibold uppercase tracking-wider mt-1">{pillar.subtitle}</p>
                    <p className="text-text-secondary text-xs mt-2 leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;