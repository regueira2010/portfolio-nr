import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={cardVariants} className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Habilidades <span className="text-gradient">Técnicas</span>
          </motion.h2>
          
          <motion.p variants={cardVariants} className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            Un perfil híbrido que combina experiencia en infraestructura con desarrollo fullstack moderno
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-card-bg rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-2">
                  <category.icon className={`${category.color} text-3xl`} />
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-text-secondary text-sm mb-6">{category.subtitle}</p>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center justify-between p-2 bg-dark-bg/50 rounded-lg hover:bg-dark-bg transition-all duration-300 group">
                      <div className="flex items-center gap-2">
                        <skill.icon className={`${category.color} text-lg group-hover:scale-110 transition-transform`} />
                        <span className="text-text-primary text-sm">{skill.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        skill.level === 'Experto' ? 'bg-green-500/20 text-green-400' :
                        skill.level === 'Avanzado' ? 'bg-blue-500/20 text-blue-400' :
                        skill.level === 'Intermedio' ? 'bg-yellow-500/20 text-yellow-400' :
                        skill.level === 'Certificado' ? 'bg-aws/20 text-aws' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;