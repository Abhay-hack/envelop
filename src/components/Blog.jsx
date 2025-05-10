import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching Markdown files from posts/ directory
    const loadPosts = async () => {
      const postFiles = ['sample-post.md']; // Add more posts here
      const loadedPosts = await Promise.all(
        postFiles.map(async (file) => {
          const response = await fetch(`/posts/${file}`);
          const content = await response.text();
          return { title: file.replace('.md', ''), content };
        })
      );
      setPosts(loadedPosts);
    };
    loadPosts();
  }, []);

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
    <section id="blog" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="space-y-8">
          {posts.map((post) => (
            <motion.div
              key={post.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;