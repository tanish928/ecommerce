import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Add your authentication logic here
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-16">
        <div>
          <h2 className="text-2xl font-bold text-center text-white mb-6">Login to Your Account</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-white">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 mt-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button with hover effect */}
          <div className="flex justify-center">
  <button
    type="submit"
    className="w-60 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark hover:scale-105 hover:shadow-lg transition-all duration-300"
  >
    Login
  </button>
</div>

          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-300">
              Don't have an account? <a href="/signup" className="text-primary hover:underline">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
