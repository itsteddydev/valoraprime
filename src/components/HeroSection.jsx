import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="space-y-6 mb-10 min-h-screen flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <p className="text-xs text-gray-500">
          Created by{" "}
          <a
            href="https://www.instagram.com/justcoddev/"
            className="underline underline-offset-2 hover:text-primary ml-1"
            target='_blank'
          >
            justcoddev
          </a>
        </p>
      </div>

      <header className="text-center">
        <h1 className="text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
          Know Your Value. <br /> Charge With Confidence.
        </h1>
        <p className="mt-4 text-base text-gray-600 md:text-lg lg:mt-6">
          Master your finances with Valora Prime. Calculate your rates and manage your income effortlessly.
        </p>
      </header>

      <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
        Discover tools to set fair pricing, organize your finances, and take control of your professional worth.
      </p>

      <div className="flex justify-center">
        <a
          href="/calculateprice"
          target="_self"
          // to="/calculateprice"
          className="inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:pointer-events-none disabled:bg-gray-300 disabled:text-gray-400 disabled:opacity-50 shadow-lg h-12 px-6 w-full max-w-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700"
        >
          Start Valuing Your Time
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
