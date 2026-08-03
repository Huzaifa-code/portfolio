import React, { useState } from 'react';
import { NavBarBlog, BlogFooter, MangaText } from '../components/Blog';
import ErrorModal from '../components/Modal/ErrorModal';
import { useUser, UserProvider } from '../context/userContext';
import { API_BASE_URL } from '../config/api';

const Login = () => {
  const { setUser } = useUser();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
        credentials: 'include'
      });
      const userData = await response.json();

      if (!response.ok) {
        throw new Error(userData.message || 'Login failed');
      }

      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));

      setFormData({
        email: '',
        password: ''
      });

      window.location.href = '/blog';

    } catch (error) {
      setError(error.message || 'Unable to connect to backend server');
      console.error('Error logging in:', error);
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
                <MangaText text="「ログイン」" translation="Rlogin (Login)" className="text-lg text-red-600 dark:text-yellow-400 font-extrabold tracking-wider" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight">Account Login</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
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
                  className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border focus:outline-none font-mono text-sm"
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
                  className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-[#EBD3F8] brutalist-border focus:outline-none font-mono text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-yellow-400 text-black font-extrabold uppercase text-sm brutalist-border brutalist-shadow-sm hover:bg-yellow-300 transition-all tracking-wider"
              >
                Log In
              </button>
            </form>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-black dark:border-white text-center relative z-10">
              <p className="text-sm font-medium">
                Don't have an account?{' '}
                <a href='/signup' className='font-extrabold text-red-600 dark:text-yellow-400 hover:underline uppercase'>
                  Sign Up Here
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

const LoginWrapper = () => (
  <UserProvider>
    <Login />
  </UserProvider>
);

export default LoginWrapper;
