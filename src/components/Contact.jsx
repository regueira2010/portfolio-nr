import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaCopy, FaExternalLinkAlt } from 'react-icons/fa';
import { contactInfo, personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-premium">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contacto <span className="text-gradient">Profesional</span>
          </h2>
          
          <p className="text-text-secondary text-center mb-12">
            ¿Interesado en colaborar? Contáctame a través de cualquiera de estos medios
          </p>
          
          <div className="space-y-4 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-card-bg rounded-xl p-4 flex items-center justify-between group card-hover"
              >
                <div className="flex items-center gap-4">
                  <div className={`${info.color} text-2xl`}>
                    <info.icon />
                  </div>
                  <div>
                    <p className="text-text-secondary text-sm">{info.label}</p>
                    <p className="text-text-primary font-medium">{info.value}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => copyToClipboard(info.value.replace('/', ''))}
                    className="p-2 rounded-lg bg-dark-bg hover:bg-aws/20 transition-colors"
                    title="Copiar"
                    aria-label={`Copiar ${info.label}`}
                  >
                    <FaCopy className="text-text-secondary text-sm" />
                  </button>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-dark-bg hover:bg-aws/20 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-text-secondary text-sm" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            >
              ¡Copiado al portapapeles!
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <a
              href={`mailto:${personalInfo.email}?subject=Contacto%20profesional%20con%20${encodeURIComponent(personalInfo.shortName)}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-aws hover:bg-aws/90 text-dark-bg font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaCalendarAlt />
              Agendar conversación
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12 pt-8 border-t border-gray-800"
          >
            <p className="text-text-secondary text-sm">
              © {new Date().getFullYear()} {personalInfo.name} — {personalInfo.tagline}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;