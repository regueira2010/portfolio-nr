import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaStar, FaCodeBranch, FaCalendarAlt, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { fetchGitHubRepos, filterReposByLanguage, getUniqueLanguages } from '../services/githubService';

const GitHubPortfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [languages, setLanguages] = useState(['all']);
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      const data = await fetchGitHubRepos();
      setRepos(data);
      setFilteredRepos(data);
      setLanguages(getUniqueLanguages(data));
      setLoading(false);
    };
    loadRepos();
  }, []);

  useEffect(() => {
    setFilteredRepos(filterReposByLanguage(repos, selectedLanguage));
  }, [selectedLanguage, repos]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <section id="github-portfolio" className="py-20 bg-gradient-premium">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            GitHub <span className="text-gradient">Portfolio</span>
          </h2>
          
          {/* Filter Section */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-card-bg rounded-lg px-4 py-2">
              <FaFilter className="text-aws" />
              <span className="text-text-secondary">Filtrar por:</span>
            </div>
            {languages.map(lang => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedLanguage === lang
                    ? 'bg-aws text-dark-bg font-semibold'
                    : 'bg-card-bg text-text-secondary hover:bg-aws/20'
                }`}
              >
                {lang === 'all' ? 'Todos' : lang}
              </button>
            ))}
          </div>
          
          {/* Repos Grid */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aws" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredRepos.slice(0, 6).map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card-bg rounded-xl p-6 card-hover"
                  >
                    <h3 className="text-lg font-bold text-text-primary mb-2 truncate">
                      {repo.name}
                    </h3>
                    
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                      {repo.description || 'Sin descripción disponible'}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      {repo.language && (
                        <span className="text-xs bg-aws/10 text-aws px-2 py-1 rounded-full">
                          {repo.language}
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-text-secondary text-sm">
                        <FaStar className="text-yellow-400" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-text-secondary text-sm">
                        <FaCodeBranch />
                        <span>{repo.forks_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-text-secondary text-sm">
                        <FaCalendarAlt />
                        <span>{formatDate(repo.updated_at)}</span>
                      </div>
                    </div>
                    
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-aws hover:text-aws/80 transition-colors"
                    >
                      Ver Proyecto <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubPortfolio;