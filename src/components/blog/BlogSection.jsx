import React from 'react';
import { motion } from 'framer-motion';

const BlogPost = ({ title, excerpt, image }) => (
  <motion.div 
    whileHover={{ scale: 1.03 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
      <p className="text-gray-600">{excerpt}</p>
      <a href="#" className="inline-block mt-4 text-purple-600 hover:text-purple-800">Read More →</a>
    </div>
  </motion.div>
);

const Blog = () => {
  const posts = [
    { title: "Understanding the Major Arcana", excerpt: "Dive deep into the symbolism and meanings behind the Major Arcana cards.", image: "/api/placeholder/400/300" },
    { title: "Tarot Spreads for Beginners", excerpt: "Learn simple yet powerful tarot spreads to kickstart your journey.", image: "/api/placeholder/400/300" },
    { title: "The History of Tarot", excerpt: "Explore the fascinating origins and evolution of tarot through the ages.", image: "/api/placeholder/400/300" }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-12">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <BlogPost {...post} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition duration-300"
          >
            View All Posts
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blog;