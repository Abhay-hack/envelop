import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import MouseTrail from './components/MouseTrail';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Header />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <MouseTrail />
      <AnimatePresence>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Blog />
          <Contact />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;