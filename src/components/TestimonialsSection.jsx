import React from 'react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 min-h-screen flex flex-col justify-center">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <div className="text-center">
          <p className="text-gray-600 italic">"Valora Prime transformed how I set my rates. Now, I feel confident about my pricing!"</p>
          <p className="mt-2 text-sm text-gray-500">- Alex, Freelance Designer</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 italic">"A must-have for any freelancer. My finances have never been this organized."</p>
          <p className="mt-2 text-sm text-gray-500">- Sam, Developer</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
