import React from 'react';

export default function Landing() {
  return (
    <>
      <div className='flex flex-row justify-center align-middle p-3 items-center '>
        <h1 className='text-3xl align-center'>Miles</h1>
        <img src="/public/pin-badge.svg" alt="Miles Pin Badge" className='w-full max-w-[20%]' />
      </div>

      <div className='p-2 text-center'>
        <h2 className='text-3xl'><b>Verifiable</b> pins</h2>
        <h2 className='text-3xl'><b>Trusted</b> lessons</h2>
      </div>

      <img src="/public/hexa.svg" alt="hexagon stickers picture" className='w-full h-auto' />

      <div className='flex flex-col items-center'>
        <button className='decoration-none w-4/5 m-2 bg-black text-white rounded-sm p-2'>Verify a pin</button>
        <button className='decoration-none w-4/5 m-2 bg-inherit border-2 border-black border-solid rounded-sm p-2'>Know more</button>
      </div>
    </>
  );
}
