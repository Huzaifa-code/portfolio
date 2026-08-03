import React, { useState } from 'react';
import { NavBarBlog, BlogFooter, MangaText } from '../components/Blog';
import ErrorModal from '../components/Modal/ErrorModal';
import { UserProvider } from '../context/userContext';
import { API_BASE_URL } from '../config/api';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    setPasswordMatch(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });

      window.location.href = '/login';
    } catch (error) {
      setError(error.message || 'Unable to connect to backend server');
      console.error('Error signing up:', error);
    }
  };

  const closeErrorModal = () => {
    setError(null);
  };

  return (
    <div className='min-h-screen bg-[#f3f0e8] dark:bg-neutral-900 text-black dark:text-[#EBD3F8] font-sans selection:bg-yellow-400 selection:text-black flex flex-col justify-between'>
      <div>
        <NavBarBlog />
        
        <div className="py-12 px-4 flex items-center justify-center">
          <div className="bg-white dark:bg-[#1E112C] text-black dark:text-white brutalist-border brutalist-shadow max-w-md w-full p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 halftone-bg opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

            {error && <ErrorModal message={error} onClose={closeErrorModal} />}

            <div className="text-center mb-8 relative z-10">
              <div className="mb-2">
                <MangaText text="「登録」" translation="Tōroku (Register)" className="text-lg text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight">Create Account</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label htmlFor="username" className="block text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border focus:outline-none font-mono text-sm"
                  placeholder="HuzaifaQureshi"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border focus:outline-none font-mono text-sm"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border focus:outline-none font-mono text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border focus:outline-none font-mono text-sm"
                  placeholder="••••••••"
                  required
                />
                {!passwordMatch && (
                  <p className="text-red-500 font-mono text-xs mt-1 font-bold">Passwords do not match!</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-yellow-400 text-black font-extrabold uppercase text-sm brutalist-border brutalist-shadow-sm hover:bg-yellow-300 transition-all tracking-wider mt-4"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-black dark:border-white text-center relative z-10">
              <p className="text-sm font-medium">
                Already have an account?{' '}
                <a href='/login' className='font-extrabold text-red-600 dark:text-yellow-400 hover:underline uppercase'>
                  Login Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  );
};

const SignupWrapper = () => (
  <UserProvider>
    <Signup />
  </UserProvider>
);

export default SignupWrapper;