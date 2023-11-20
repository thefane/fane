import React from 'react';

export default function Authenticate() {
  return (
    <div className='flex flex-col w-full'>
      <input
        type="text"
        placeholder='pin number'
        className='bg-stone-600 rounded-sm p-2 mx-2 '
      />
      <button
        className=' m-2 bg-black text-white rounded-sm p-2 mx-2'
      >
        Verify
      </button>
    </div>
  );
}
