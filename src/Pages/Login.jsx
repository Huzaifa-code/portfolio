import React, { useState } from 'react';
import NavBarBlog from '../components/NavBarBlog/NavBarBlog';
import ErrorModal from '../components/Modal/ErrorModal';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/userContext';


const Login = () => {

  const navigate = useNavigate();
  const { setUser } = useUser();

  // State for form fields
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, {
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

      setUser(userData);

      // Set user data in localStorage
      localStorage.setItem('user', JSON.stringify(userData));

      if (!response.ok) {
        throw new Error(userData.message);
      }

      // Handle successful login (e.g., redirect to dashboard or update user state)
      // Reset form fields after successful submission
      setFormData({
        email: '',
        password: ''
      });
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }

    navigate('/blog');
  };

  // Close error modal
  const closeErrorModal = () => {
    setError(null);
  };

  return (
    <div className='min-h-screen'>
      <NavBarBlog />
      <div className="pt-11 h-full flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          {/* Error modal */}
          {error && <ErrorModal message={error} onClose={closeErrorModal} />}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="w-full bg-[#731FFC] text-white py-2 px-4 rounded-lg hover:bg-[#995aff]">Login</button>
          </form>

          <p className='mt-6'>Don't have an account ? <Link to='/signup' className='text-[#731FFC] hover:text-[#a871ff] font-semibold' >Signup</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
