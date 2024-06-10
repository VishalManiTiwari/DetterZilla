import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignupSigninButtons = () => {
  return (
    <div className="flex gap-4">
      <div>
      <Link to="/signup">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-blue-500 text-white rounded-md transition-all duration-300 ease-in-out"
        >
          Sign Up
        </motion.button>
      </Link>
      </div>
       <div>
       <Link to="/signin">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-green-500 text-white rounded-md transition-all duration-300 ease-in-out"
        >
          Sign In
        </motion.button>
      </Link>
       </div>
      
    </div>
  );
};

export default SignupSigninButtons;
