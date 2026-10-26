const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'regueira2010';
const API_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

const GITHUB_REPOS_API = `${API_URL}/users/${USERNAME}/repos`;
const GITHUB_USER_API = `${API_URL}/users/${USERNAME}`;

const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutos

const getFromCache = (key) => {
  try {
    const cached = sessionStorage.getItem(key);
    if (!cached) return null;
    const { timestamp, data } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL_MS) {
      return data;
    }
    sessionStorage.removeItem(key);
  } catch (e) {
    // SessionStorage no disponible o error de parseo
  }
  return null;
};

const saveToCache = (key, data) => {
  try {
    sessionStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }));
  } catch (e) {
    // Cuota excedida o almacenamiento deshabilitado
  }
};

export const fetchGitHubRepos = async () => {
  const cacheKey = `gh_repos_${USERNAME}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(GITHUB_REPOS_API);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    const repos = await response.json();
    
    // Filter out forks if needed and sort
    if (!Array.isArray(repos)) return [];
    let filteredRepos = repos.filter(repo => !repo.fork);
    
    // Sort by stars (desc) and then by updated date
    filteredRepos.sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
    
    saveToCache(cacheKey, filteredRepos);
    return filteredRepos;
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
};

export const fetchGitHubStats = async () => {
  const cacheKey = `gh_stats_${USERNAME}`;
  const cached = getFromCache(cacheKey);
  if (cached) return cached;

  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(GITHUB_USER_API),
      fetch(GITHUB_REPOS_API)
    ]);
    
    const userData = userResponse.ok ? await userResponse.json() : {};
    const reposData = reposResponse.ok ? await reposResponse.json() : [];
    
    const totalStars = Array.isArray(reposData) 
      ? reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0)
      : 0;
    const totalForks = Array.isArray(reposData)
      ? reposData.reduce((sum, repo) => sum + repo.forks_count, 0)
      : 0;
      
    const result = {
      publicRepos: userData.public_repos || 0,
      totalStars,
      totalForks,
      followers: userData.followers || 0
    };

    saveToCache(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return {
      publicRepos: 0,
      totalStars: 0,
      totalForks: 0,
      followers: 0
    };
  }
};

export const filterReposByLanguage = (repos, language) => {
  if (language === 'all') return repos;
  return repos.filter(repo => repo.language === language);
};

export const getUniqueLanguages = (repos) => {
  const languages = new Set();
  if (Array.isArray(repos)) {
    repos.forEach(repo => {
      if (repo.language) {
        languages.add(repo.language);
      }
    });
  }
  return ['all', ...Array.from(languages)];
};