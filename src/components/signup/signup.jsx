import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiMail } from 'react-icons/fi';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/08/05/00/12/girl-2581913_1280.jpg')",
      }}
    >
      <div className="w-full max-w-md p-8 bg-opacity-40 shadow-lg">
      {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-1">Sign In</h1>
        <p className="text-sm text-gray-600 mb-6">
          Sign in with your email address
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign In Button */}
          <div className="flex justify-center mb-4">
            <button
              type="submit"
              className="w-full py-3 text-white rounded-lg bg-blue-600 hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
          </div>

          {/* Divider below Sign In button */}
          <div className="border-t border-gray-300 my-4" />
        </form>

        {/* "Or continue with" */}
        <p className="text-sm text-gray-600 mb-4 text-center">
          or continue with
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-4">
          <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg transition bg-white hover:bg-gray-100">
            <FcGoogle className="text-xl" />
            <span className="text-sm text-gray-700">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg transition bg-white hover:bg-gray-100">
            <FiMail className="text-xl text-gray-600" />
            <span className="text-sm text-gray-700">Email</span>
          </button>
        </div>

        {/* Terms and Conditions */}
        <div className="border-t border-gray-300 pt-4">
          <p className="text-xs text-center text-gray-500">
            By registering, you agree to our{' '}
            <span className="text-blue-600 underline cursor-pointer">
              Terms and Conditions
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
