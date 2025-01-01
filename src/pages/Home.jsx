import FAQSection from '@/components/FAQSection';
import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col items-center text-center">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
    </div>




  );
};

export default Home;
