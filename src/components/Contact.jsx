import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => setStatus('Failed to send message.'));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-lg mb-2"><strong>Email:</strong> your.email@example.com</p>
            <p className="text-lg mb-2"><strong>Phone:</strong> +91-123-456-7890</p>
            <p className="text-lg mb-2"><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:underline">yourusername</a></p>
            <p className="text-lg mb-2"><strong>GitHub:</strong> <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">yourusername</a></p>
            <p className="text-lg mb-2"><strong>Telegram:</strong> <a href="https://t.me/yt_qaBot" className="text-blue-500 hover:underline">@yt_qaBot</a></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glassmorphism p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700"
                  rows="5"
                  required
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Send Message"
              >
                Send
              </button>
              {status && <p className="text-lg" role="alert">{status}</p>}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;