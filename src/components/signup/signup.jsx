import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Mobile:', mobile);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Left Image Section */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913_1280.jpg"
          alt="Login Visual"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-snug">
            Welcome to Urban SWagger!
          </h1>
        </div>
      </div>

      {/* Right Login Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white py-10 md:py-0">
        <div className="w-full max-w-md px-6 sm:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Sign In</h2>
          <p className="text-gray-500 mb-6">Please sign in to continue</p>

          <form onSubmit={handleLogin}>
            {/* Name */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-3 border-b border-gray-400 focus:outline-none focus:border-gray-800"
              />
            </div>

            {/* Mobile Number */}
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="w-full px-3 py-3 border-b border-gray-400 focus:outline-none focus:border-gray-800"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-3 border-b border-gray-400 focus:outline-none focus:border-gray-800"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-3 border-b border-gray-400 focus:outline-none focus:border-gray-800"
              />
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="mb-6 pb-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="accent-blue-600"
                  />
                  Remember me for 30 days
                </label>
                <button
                  type="button"
                  className="text-gray-800 hover:underline border-b border-gray-300"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition mb-3"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
