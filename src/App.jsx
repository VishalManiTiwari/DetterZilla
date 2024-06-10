import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignupSigninButtons from './components/SignupSigninButtons';
import Signup from './components/Signup';
import Signin from './components/Signin';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-all`}>
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link to="/" className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'} hover:text-gray-300`}>
              Home
            </Link>
          </h1>
          <button className="p-2 bg-gray-800 text-white rounded-md" onClick={toggleDarkMode}>
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>
        <main className="p-4 flex flex-col items-center">
          <Routes>
            <Route path="/signup" element={<Signup darkMode={darkMode} />} />
            <Route path="/signin" element={<Signin darkMode={darkMode} />} />
            <Route path="/" element={<SignupSigninButtons />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
