import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800">
      <motion.div style={{ y }} className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        <img
          src="/profile.jpg"
          alt="Your Name"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          loading="eager"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <h2 className="text-2xl md:text-3xl mb-6">Full-Stack Developer / Data Science Student</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Passionate about building scalable web applications and leveraging data science to solve real-world problems.
        </p>
        <div className="space-x-4">
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Contact Me"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-block border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            aria-label="Download Resume"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;