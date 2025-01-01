import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="space-y-8 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-center text-gray-800">Why Choose Valora Prime?</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="text-center">
          <i className="text-blue-600 text-4xl mb-2">📊</i>
          <h3 className="text-lg font-semibold">Accurate Calculations</h3>
          <p className="text-sm text-gray-600">Save time with precise and automated rate calculations.</p>
        </div>
        <div className="text-center">
          <i className="text-green-600 text-4xl mb-2">🛠️</i>
          <h3 className="text-lg font-semibold">Financial Control</h3>
          <p className="text-sm text-gray-600">Manage your income and set fair prices effortlessly.</p>
        </div>
        <div className="text-center">
          <i className="text-purple-600 text-4xl mb-2">🌟</i>
          <h3 className="text-lg font-semibold">Tailored for You</h3>
          <p className="text-sm text-gray-600">Perfect for freelancers, entrepreneurs, and small businesses.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
