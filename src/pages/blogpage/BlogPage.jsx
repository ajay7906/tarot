














import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ title, description, image }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-purple-700 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {expanded ? description : `${description.slice(0, 100)}...`}
        </p>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="text-purple-700 hover:text-purple-500 transition-all duration-300 ease-in-out"
        >
          {expanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://tarotbydeepa.com:4000/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">{error}</div>;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Tarot Blogs</h2>
          <p className="text-lg text-gray-600">Read our latest blogs on Tarot and spiritual journeys to get deeper insights and wisdom.</p>
        </motion.div>

        {/* Blog Cards */}
        <div className="flex flex-wrap justify-center">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id || index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <BlogCard
                title={blog.title}
                description={blog.content || blog.description}
                image={blog.image || "https://via.placeholder.com/500x400"}
              />
            </motion.div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-12">
          <button className="px-4 py-2 bg-purple-700 text-white rounded-full mr-2 hover:bg-purple-600 transition-all duration-300 ease-in-out">
            Previous
          </button>
          <button className="px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-600 transition-all duration-300 ease-in-out">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;