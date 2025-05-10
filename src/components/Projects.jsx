import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';

const Projects = () => {
  const projects = [
    {
      title: 'Digilekh',
      description: 'A digital platform for document management and verification.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      image: '/projects/digilekh.jpg',
      placeholder: '/projects/digilekh-low.jpg',
      github: 'https://github.com/yourusername/digilekh',
      demo: 'https://digilekh.vercel.app',
    },
    {
      title: 'Lumina',
      description: 'An AI-powered content recommendation system.',
      tech: ['Python', 'Flask', 'PostgreSQL'],
      image: '/projects/lumina.jpg',
      placeholder: '/projects/lumina-low.jpg',
      github: 'https://github.com/yourusername/lumina',
      demo: 'https://lumina.vercel.app',
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              whileHover={{ rotateY: 5 }}
            >
              <ProgressiveImage src={project.image} placeholder={project.placeholder}>
                {(src, loading) => (
                  <img
                    src={src}
                    alt={project.title}
                    className={`w-full h-48 object-cover rounded-md mb-4 ${loading ? 'blur-sm' : 'blur-none'} transition-all duration-300`}
                  />
                )}
              </ProgressiveImage>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <p className="text-sm mb-4"><strong>Tech:</strong> {project.tech.join(', ')}</p>
              <div className="flex space-x-4">
                {project.github && (
                  <a href={project.github} className="text-blue-500 hover:underline" aria-label={`GitHub repository for ${project.title}`}>GitHub</a>
                )}
                {project.demo && (
                  <a href={project.demo} className="text-blue-500 hover:underline" aria-label={`Live demo for ${project.title}`}>Demo</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;