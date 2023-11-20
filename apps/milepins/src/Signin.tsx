import React from 'react'
import { GoogleLogin } from '@react-oauth/google';


export default function Signin() {
  return (
    <div>
        <form className='flex flex-col'>
              <input
                  type="text"
                  placeholder='Email'
                  className='bg-stone-600 rounded-sm p-2 mx-2 my-1 '
              />

              <input
                  type="text"
                  placeholder='Password'
                  className='bg-stone-600 rounded-sm p-2 mx-2 '
              />
              <button
                  className=' m-2 bg-black text-white rounded-sm p-2 mx-2'
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
          />;
        <span>New to this ? <button>Sign Up</button></span>
        
    </div>
  )
}
