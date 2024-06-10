import React, { useState } from 'react';

const Signin = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      alert('Signin successful!');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-all`}>
      <h2 className="text-2xl mb-4">Sign In</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        className="mb-2 p-2 border rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-2 p-2 border rounded-md"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
        onClick={handleSignin}
      >
        Sign In
      </button>
    </div>
  );
};

export default Signin;
