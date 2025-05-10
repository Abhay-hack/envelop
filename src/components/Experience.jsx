import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'AI/ML Intern',
      company: 'IBM',
      duration: '[Month Year] - [Month Year]',
      description: 'Developed machine learning models for predictive analytics.',
    },
    {
      role: 'Campus Ambassador',
      company: 'IIT Indore',
      duration: '[Month Year] - [Month Year]',
      description: 'Promoted tech events and workshops on campus.',
    },
    {
      role: 'Project Admin',
      company: 'SWOC',
      duration: '[Month Year] - [Month Year]',
      description: 'Managed open-source projects and mentored contributors.',
    },
    {
      role: 'SIH Internal Hackathon',
      company: 'Smart India Hackathon',
      duration: '[Year]',
      description: 'Selected for innovative project submission.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience & Achievements</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              whileHover={{ rotateY: 5 }}
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-lg">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
              <p className="text-lg mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;