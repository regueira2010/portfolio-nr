import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaClock, FaGitAlt } from 'react-icons/fa';
import { fetchGitHubStats } from '../services/githubService';

const GitHubStats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stats, setStats] = useState({
    publicRepos: 0,
    totalStars: 0,
    totalForks: 0,
    followers: 0
  });

  const username = import.meta.env.VITE_GITHUB_USERNAME || 'regueira2010';

  const [langsImg, setLangsImg] = useState(
    `https://github-readme-stats.shion.dev/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=1E293B&title_color=FF9900&text_color=F8FAFC`
  );
  const [langsFailed, setLangsFailed] = useState(false);

  const [streakImg, setStreakImg] = useState(
    `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=1E293B&ring=FF9900&fire=FF9900&currStreakLabel=FF9900`
  );
  const [streakFailed, setStreakFailed] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchGitHubStats();
      setStats(data);
    };
    
    fetchUserData();
  }, []);

  // Update image endpoints when username changes dynamically (if it does)
  useEffect(() => {
    setLangsImg(`https://github-readme-stats.shion.dev/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=1E293B&title_color=FF9900&text_color=F8FAFC`);
    setStreakImg(`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=1E293B&ring=FF9900&fire=FF9900&currStreakLabel=FF9900`);
    setLangsFailed(false);
    setStreakFailed(false);
  }, [username]);

  const statCards = [
    { icon: FaCode, label: 'Repositorios', value: stats.publicRepos, color: 'text-blue-400' },
    { icon: FaGitAlt, label: 'Stars Totales', value: stats.totalStars, color: 'text-yellow-400' },
    { icon: FaUsers, label: 'Seguidores', value: stats.followers, color: 'text-green-400' },
    { icon: FaClock, label: 'Forks', value: stats.totalForks, color: 'text-purple-400' }
  ];

  return (
    <section id="github-stats" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Estadísticas <span className="text-gradient">GitHub</span>
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {statCards.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-card-bg rounded-xl p-6 text-center card-hover"
              >
                <stat.icon className={`${stat.color} text-4xl mx-auto mb-3`} />
                <div className="text-3xl font-bold text-text-primary mb-1">{stat.value}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* GitHub Readme Stats Integration */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-card-bg rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">Lenguajes más usados</h3>
              {!langsFailed ? (
                <img
                  src={langsImg}
                  alt="Top Languages"
                  className="w-full rounded-lg"
                  loading="lazy"
                  onError={() => {
                    if (langsImg.includes('shion.dev')) {
                      // Try primary vercel app as fallback
                      setLangsImg(`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=1E293B&title_color=FF9900&text_color=F8FAFC`);
                    } else {
                      setLangsFailed(true);
                    }
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-text-secondary text-sm">
                  <span>No se pudieron cargar las estadísticas desde GitHub.</span>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {['JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS', 'SQL'].map((lang) => (
                      <span key={lang} className="px-2.5 py-1 bg-dark-bg rounded-lg text-xs border border-gray-800">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-card-bg rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">Racha de contribuciones</h3>
              {!streakFailed ? (
                <img
                  src={streakImg}
                  alt="GitHub Streak"
                  className="w-full rounded-lg"
                  loading="lazy"
                  onError={() => {
                    setStreakFailed(true);
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-text-secondary text-sm text-center">
                  <span>Racha de contribuciones en GitHub activa</span>
                  <div className="mt-4 text-aws text-xs font-semibold uppercase tracking-wider">
                    Usuario: {username}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;