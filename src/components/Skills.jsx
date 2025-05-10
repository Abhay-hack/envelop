import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    'Programming Languages': ['Python', 'C', 'C++', 'JavaScript', 'PHP'],
    'Frameworks/Libraries': ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Flask'],
    Databases: ['SQL', 'MongoDB', 'PostgreSQL'],
    'Tools/Platforms': ['GitHub', 'VSCode', 'AWS', 'Docker', 'Kubernetes'],
  };

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
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="list-disc list-inside">
                {items.map((skill) => (
                  <li key={skill} className="text-lg">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;