import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { featuredProjects } from '../data/portfolioData';

const FeaturedProject = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const projects = featuredProjects;

  return (
    <section id="featured-project" className="py-20 bg-gradient-premium">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-aws font-semibold text-sm uppercase tracking-wider">Proyectos Destacados</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Casos de <span className="text-gradient">Estudio Reales</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              Proyectos prácticos desarrollados con tecnologías modernas del lado del cliente y servidor,
              aplicando buenas prácticas de diseño de software y arquitectura limpia.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-card-bg rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-gray-800 card-hover relative overflow-hidden group"
              >
                {/* Background decorative logo */}
                <div className="absolute -right-8 -bottom-8 opacity-5 text-text-primary group-hover:opacity-10 transition-opacity">
                  <project.logo className="w-48 h-48" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-dark-bg text-aws text-xs font-semibold rounded-full uppercase tracking-wider">
                      {project.type}
                    </span>
                    <project.logo className={`${project.logoColor} text-3xl`} />
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-1">
                    {project.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-aws mb-4">
                    {project.subtitle}
                  </h4>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3">
                      Características
                    </h5>
                    <ul className="space-y-2">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-text-secondary text-sm">
                          <FaCheckCircle className="text-aws mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h5 className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3">
                      Tech Stack
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 bg-dark-bg rounded-lg text-text-secondary text-xs border border-gray-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-aws hover:text-aws/80 transition-colors font-medium"
                      >
                        <link.icon className="text-base" />
                        {link.label}
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    ))}
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

export default FeaturedProject;