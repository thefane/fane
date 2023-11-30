import  { useState } from 'react';
import axios from 'axios';

export default function Authenticate() {
  const [pin, setPin] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleVerify = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:8000/verify', { uniquePin: pin });
      
      if (response.status === 200) {
        setVerificationResult(response.data);
      } else {
        setError(response.data.message || 'Verification failed');
      }
    } catch (error) {
      setError('Network error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setPin(e.target.value);
    setError('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Badge Verification</h2>
        <input
          type="text"
          placeholder="Enter Pin number"
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none"
          value={pin}
          onChange={handleInputChange}
        />
        <button
            className='bg-black text-white rounded-sm p-2 my-2 w-full max-w-[500px]'
          onClick={handleVerify}
          disabled={isLoading || pin.trim() === ''}
        >
          {isLoading ? 'Verifying...' : 'Verify'}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

       
      </div>
    </div>
  );
}
