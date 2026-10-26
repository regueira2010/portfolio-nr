import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy loading para componentes debajo del pliegue (LCP optimizado)
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const FeaturedProject = lazy(() => import('./components/FeaturedProject'));
const Certifications = lazy(() => import('./components/Certifications'));
const GitHubPortfolio = lazy(() => import('./components/GitHubPortfolio'));
const GitHubStats = lazy(() => import('./components/GitHubStats'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <Hero />
      <Suspense fallback={
        <div className="flex justify-center items-center py-20 bg-dark-bg">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-aws" />
        </div>
      }>
        <About />
        <Skills />
        <Experience />
        <FeaturedProject />
        <Certifications />
        <GitHubPortfolio />
        <GitHubStats />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;