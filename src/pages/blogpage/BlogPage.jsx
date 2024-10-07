import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const blogs = [
    {
      title: "The Spiritual Power of Tarot",
      description: "Discover the deeper meaning behind Tarot readings and how they can help you in your spiritual journey. Tarot has long been used as a tool for self-reflection and spiritual growth, providing guidance and clarity. Whether you seek answers to specific questions or are simply looking to explore your inner world, Tarot readings can offer profound insights into your life.",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?crop=entropy&fit=crop&w=500&h=400",
    },
    {
      title: "Unlocking Love Through Tarot",
      description: "Learn how Tarot can help you navigate the complexities of love and relationships. Tarot readings focused on love can offer clarity on current relationships, assist in attracting new love, or provide closure for past relationships. With the help of Tarot, you can better understand the dynamics at play in your romantic life and take actionable steps towards fulfillment.",
      image: "https://images.unsplash.com/photo-1485893086445-ed75865251e6?crop=entropy&fit=crop&w=500&h=400",
    },
    {
      title: "Manifesting Career Success",
      description: "Are you struggling with your career path or seeking new opportunities? Tarot can guide you in making decisions that align with your professional goals. From career shifts to financial abundance, Tarot readings can provide the insights needed to manifest the career success you desire.",
      image: "https://images.unsplash.com/photo-1519201566418-64a93196b34f?crop=entropy&fit=crop&w=500&h=400",
    },
    {
      title: "Tarot for Personal Growth",
      description: "Personal growth is a lifelong journey. Tarot can support you in understanding your strengths, identifying areas for improvement, and unlocking new potential within yourself. This blog explores how Tarot can become a powerful tool in your personal development toolkit.",
      image: "https://images.unsplash.com/photo-1555685812-5b43b917f9c8?crop=entropy&fit=crop&w=500&h=400",
    },
    {
      title: "Healing with Tarot",
      description: "Healing goes beyond the physical realm; Tarot can assist in emotional and spiritual healing as well. Whether you're recovering from heartbreak, loss, or trauma, Tarot can offer insights and paths to help you regain balance and peace in your life.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&fit=crop&w=500&h=400",
    },
  ];

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
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {blog.description.slice(0, 100)}...
                  </p>
                  <button className="text-purple-700 hover:text-purple-500 transition-all duration-300 ease-in-out">
                    Read More
                  </button>
                </div>
              </div>
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
