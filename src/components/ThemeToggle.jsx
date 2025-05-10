import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-20 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </motion.button>
  );
};

export default ThemeToggle;