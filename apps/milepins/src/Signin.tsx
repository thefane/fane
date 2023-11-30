import React, { useState } from 'react';
import axios from 'axios';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    try {
      const response = await axios.post('http://localhost:8000/user/login', { email, password });
      const token = response.data.token;
      
      // Store the token in localStorage or sessionStorage for future use
      localStorage.setItem('token', token);

      // Set the default axios header for authorization
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Perform actions after successful login, e.g., redirect to another page
      console.log('Logged in successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center align-middle">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[500px]">
        <form className='flex flex-col items-center' onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder='Email'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-[500px]'
            value={email}
            onChange={handleEmailChange}
          />

          <input
            type="password"
            placeholder='Password'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-[500px]'
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="submit" // Add type as "submit" to trigger form submission
            className='bg-black text-white rounded-sm p-2 my-2 w-full max-w-[500px]'
          >
            Sign In
          </button>
        </form>

        <span className="mt-8">
          New to this? <button className="text-blue-500">Sign Up</button>
        </span>
      </div>
    </div>
  );
}
