



// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../../context/useContext';
// import { motion } from 'framer-motion';
// import axios from 'axios';

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login, logout } = useAuth();

//   const handleLogout = () => {
//     logout();
//     localStorage.removeItem('authToken');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     handleLogout(); // Clear any existing auth state
//     setMessage('');
//     setLoading(true);

//     try {
//       if (isLogin) {
//         // Call login API
//         const response = await axios.post('http://88.222.213.80:5000/api/signin', { email, password });
//         console.log('Login response:', response.data);

//         const token = response.data.token;

//         if (token) {
//           localStorage.setItem('authToken', token);
//           console.log('Token stored in localStorage:', token);
//           login(token, email);
//           const { from } = location.state || { from: { pathname: '/' } };
//           navigate(from.pathname, { replace: true });
//         } else {
//           setMessage('No token received from server');
//         }
//       } else {
//         // Call signup API
//         const response = await axios.post('http://88.222.213.80:5000/api/signup', { name: username, email, password });
//         console.log('Signup response:', response.data);
//         console.log(response);
        
//         if (response.status === 201) {
//           setIsLogin(true); // Switch to login form after successful signup
//           setUsername('');
//           setPassword('');
//           // Keep the email filled in for convenience
//           setMessage('Sign up successful! Please log in with your new account.');
//         } else {
//           setMessage(response.data.message || 'Failed to sign up');
//         }
//       }
//     } catch (err) {
//       console.error('API call error:', err.response ? err.response.data : err.message);
//       setMessage(err.response ? err.response.data.message : 'Something went wrong. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//     setUsername('');
//     setPassword('');
//     setEmail('');
//     setMessage('');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 p-4">
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
//       >
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//         >
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             {isLogin ? 'Sign in to your account' : 'Create a new account'}
//           </h2>
//         </motion.div>

//         {message && (
//           <div className={`text-center font-bold mb-4 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
//             {message}
//           </div>
//         )}

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             {!isLogin && (
//               <motion.div
//                 initial={{ opacity: 0, x: -50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//               >
//                 <label htmlFor="username" className="sr-only">Username</label>
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
//                   placeholder="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </motion.div>
//             )}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.7, duration: 0.5 }}
//             >
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.8, duration: 0.5 }}
//             >
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </motion.div>
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9, duration: 0.5 }}
//           >
//             <button
//               type="submit"
//               disabled={loading}
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
//             >
//               <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                 <svg className="h-5 w-5 text-teal-500 group-hover:text-teal-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
//                   <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//                 </svg>
//               </span>
//               {loading ? 'Processing...' : isLogin ? 'Sign in' : 'Sign up'}
//             </button>
//           </motion.div>
//         </form>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 0.5 }}
//           className="text-center mt-4"
//         >
//           <button
//             onClick={toggleForm}
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors duration-300"
//           >
//             {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
//           </button>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default AuthForm;





















































import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/useContext';
import { motion } from 'framer-motion';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, logout } = useAuth();

  const handleLogout = () => {
    logout();
    localStorage.removeItem('authToken');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLogout(); // Clear any existing auth state
    setLoading(true);

    try {
      if (isLogin) {
        toast.success('Successfully logged in!', {
          duration: 3000,
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });
        // Call login API
        const response = await axios.post('http://88.222.213.80:5000/api/signin', { email, password });
        console.log('Login response:', response.data);

        const token = response.data.token;

        if (token) {
          localStorage.setItem('authToken', token);
          console.log('Token stored in localStorage:', token);
          login(token, email);
          
          toast.success('Successfully logged in!', {
            duration: 3000,
            style: {
              background: '#10B981',
              color: '#fff',
            },
          });
          
          const { from } = location.state || { from: { pathname: '/' } };
          navigate(from.pathname, { replace: true });
        } else {
          toast.error('No token received from server', {
            duration: 3000,
          });
        }
      } else {
        // Call signup API
        const response = await axios.post('http://88.222.213.80:5000/api/signup', { name: username, email, password });
        console.log('Signup response:', response.data);
        
        if (response.status === 201) {
          setIsLogin(true); // Switch to login form after successful signup
          setUsername('');
          setPassword('');
          // Keep the email filled in for convenience
          toast.success('Account created successfully! Please log in.', {
            duration: 3000,
            style: {
              background: '#10B981',
              color: '#fff',
            },
          });
        } else {
          toast.error(response.data.message || 'Failed to sign up', {
            duration: 3000,
          });
        }
      }
    } catch (err) {
      console.error('API call error:', err.response ? err.response.data : err.message);
      toast.error(err.response ? err.response.data.message : 'Something went wrong. Please try again later.', {
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500 p-4">
    
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Sign in to your account' : 'Create a new account'}
          </h2>
        </motion.div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-150 ease-in-out"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-teal-500 group-hover:text-teal-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              {loading ? 'Processing...' : isLogin ? 'Sign in' : 'Sign up'}
            </button>
          </motion.div>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-4"
        >
          <button
            onClick={toggleForm}
            className="text-sm text-teal-600 hover:text-teal-500 transition-colors duration-300"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthForm;