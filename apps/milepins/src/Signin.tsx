import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-center align-middle">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[500px]">
        <form className='flex flex-col items-center'>
          <input
            type="text"
            placeholder='Email'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-[500px]'
          />

          <input
            type="password"
            placeholder='Password'
            className='bg-stone-200 rounded-sm p-2 my-2 w-full max-w-[500px]'
          />
          <button
            className='bg-black text-white rounded-sm p-2 my-2 w-full max-w-[500px]'
          >
            Sign In
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
            <button onClick={onClick} className="bg-red-600 text-white rounded-sm p-2 my-4 w-full max-w-[500px]">
              Sign In with Google
            </button>
          )}
        />

        <span className="mt-8">
          New to this? <button className="text-blue-500">Sign Up</button>
        </span>
      </div>
    </div>
  );
}
