import React, { useState } from 'react';

import Navbar from '../component/navbar';
import Footer from '../component/footer';
import { login } from '../service';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    keepLoggedIn: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Handle login logic here
      console.log('Form submitted:', formData);
      const response = await login(formData.email, formData.password);
      console.log(response);
      localStorage.setItem('token', response.token);
      alert(response.message);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="min-w-2xl mx-auto mt-12 p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl text-gray-800 mb-8">
            Please Login to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">
                  E-mail*
                </label>
                <a
                  href="/signup"
                  className="text-sm text-rose-500 hover:text-rose-600 hover:underline">
                  Don't have an Account yet?
                </a>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                     bg-gray-50 focus:outline-none focus:ring-2 
                     focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">
                  Password*
                </label>
                <a
                  href="/forgot-password"
                  className="text-sm text-rose-500 hover:text-rose-600 hover:underline">
                  Forgot Your Password ?
                </a>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                     bg-gray-50 focus:outline-none focus:ring-2 
                     focus:ring-rose-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="keepLoggedIn"
                name="keepLoggedIn"
                checked={formData.keepLoggedIn}
                onChange={handleChange}
                className="w-4 h-4 text-rose-500 border-gray-300 rounded 
                     focus:ring-rose-500"
              />
              <label htmlFor="keepLoggedIn" className="text-sm text-gray-700">
                Please keep me logged in
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-2 px-4 rounded-md
                   hover:bg-rose-600 focus:outline-none focus:ring-2 
                   focus:ring-rose-500 focus:ring-offset-2 
                   transition-colors duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default Login;