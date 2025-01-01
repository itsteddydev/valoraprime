import React from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">How does Valora Prime work?</h3>
          <p className="text-sm text-gray-600">Valora Prime helps you calculate your hourly and monthly rates based on your goals and time availability.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Is the app free to use?</h3>
          <p className="text-sm text-gray-600">Yes, you can start using Valora Prime for free with essential features.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
