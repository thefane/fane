export default function Authenticate() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='w-[80%] md:w-[40%] p-5 rounded-lg bg-neutral-800 '>
        <input
          type="text"
          placeholder='Pin number'
          className='bg-stone-600 rounded-sm p-2 text-white outline-none w-full '
        />
        <button className='mt-3 bg-black text-white rounded-sm p-2  w-full'>
          Verify
        </button>
      </div>
    </div>
  );
}
