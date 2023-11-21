import React from 'react';

export default function Features() {
  return (
    <div className="features-content bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Features</h1>
      <p className="text-gray-600 mb-8">
        Welcome to our platform! Here are some of the exciting features:
      </p>
      <section className="feature bg-white shadow-md rounded-md p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Badge Issuance</h2>
        <p className="text-gray-700">
          Easily create and issue badges to users. Keep track of achievements and recognitions.
        </p>
      </section>
      <section className="feature bg-white shadow-md rounded-md p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">User Engagement</h2>
        <p className="text-gray-700">
          Engage users by awarding badges for various activities or milestones.
        </p>
      </section>
      <section className="feature bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold mb-2">Organizational Impact</h2>
        <p className="text-gray-700">
          Empower organizations to acknowledge and highlight their members' accomplishments.
        </p>
      </section>
      {/* Add more sections describing other features */}
    </div>
  );
}
