import React, { useState } from 'react'
import {NavBarBlog} from '../components/Blog'
import ErrorModal from '../components/Modal/ErrorModal';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
    // State for form fields
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        // profilePicture: null
    });
    const [error, setError] = useState(null);
      
      // State for password match status
    const [passwordMatch, setPasswordMatch] = useState(true);

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    // Handle profile picture upload
    // const handleFileChange = (e) => {
    //     setFormData({ ...formData, profilePicture: e.target.files[0] });
    // };
    
      // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatch(false);
            return;
        }
        // Reset password match status
        setPasswordMatch(true);

        // console.log(formData);
        

        try {
            // Make API call to signup route
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/signup`, {
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
            console.log(data);

            if (!response.ok) {
                throw new Error(data.message);
            }

            // Reset form fields after successful submission
            setFormData({
              username: '',
              email: '',
              password: '',
              confirmPassword: ''
            });

            navigate('/login')
        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        }
    };

    // Close error modal
    const closeErrorModal = () => {
        setError(null);
    };


  return (
    <div className='min-h-screen'>
    <NavBarBlog/>
    <div className="pt-11 h-full flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
       
        {/* Error modal */}
        {error && <ErrorModal message={error} onClose={closeErrorModal} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your username" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Confirm your password" required />
            {!passwordMatch && <p className="text-red-500 text-sm mt-1">Passwords do not match</p>}
          </div>
          {/* <div className="mb-4">
            <label htmlFor="profilePicture" className="block text-gray-700 font-bold mb-2">Profile Picture</label>
            <input type="file" id="profilePicture" name="profilePicture" onChange={handleFileChange} accept="image/*" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" required />
          </div> */}
          <button type="submit" className="w-full bg-[#731FFC] text-white py-2 px-4 rounded-lg hover:bg-[#995aff]">Sign Up</button>
        </form> 
        <p className='mt-6'>Already have an account?  <Link to='/login' className='text-[#731FFC] hover:text-[#a871ff] font-semibold' >Login here</Link> </p>


      </div>
    </div>
    </div>
  )
}

export default Signup