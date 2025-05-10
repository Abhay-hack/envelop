import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">Biography</h3>
            <p className="text-lg">
              I'm a dedicated Full-Stack Developer and Data Science student with a strong foundation in building robust applications and analyzing data. My journey in tech started with a curiosity for solving problems, leading me to pursue a BCA and currently a BTech in CSE with a focus on Data Science.
            </p>
            <p className="text-lg mt-4">
              Based in [Your Location], I enjoy exploring new technologies, contributing to open-source projects, and participating in hackathons. My soft skills include teamwork, adaptability, and effective communication.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <ul className="list-disc list-inside text-lg">
              <li>BCA - [Your College Name], [Year]</li>
              <li>BTech CSE (Data Science) - [Your College Name], [Year - Present]</li>
            </ul>
            <h3 className="text-2xl font-semibold mt-6 mb-4">Interests</h3>
            <p className="text-lg">AI/ML, Web Development, Cloud Computing, Open-Source Contributions</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;