import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <form className='flex flex-col items-center'>
          <input
            type="text"
            placeholder='Email'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-md'
          />

          <input
            type="password"
            placeholder='Password'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-md'
          />

          <input
            type="text"
            placeholder='Organization'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-md'
          />

          <input
            type="text"
            placeholder='Role'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-md'
          />

          <input
            type="text"
            placeholder='Referral Code'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-md'
          />

          <button
            className='bg-black text-white rounded-sm p-2 my-2 w-full max-w-md'
          >
            Sign Up
          </button>
        </form>

        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          render={({ onClick }) => (
            <button onClick={onClick} className="bg-red-600 text-white rounded-sm p-2 my-2 w-full max-w-md">
              Sign Up with Google
            </button>
          )}
        />
      </div>
    </div>
  );
}
