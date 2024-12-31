import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col items-center text-center">
      {/* Hero Section */}
      <section id="home" className="space-y-6 mb-10 min-h-screen flex flex-col justify-center">
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
          <Link
            to="/calculateprice"
            className="inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:pointer-events-none disabled:bg-gray-300 disabled:text-gray-400 disabled:opacity-50 shadow-lg h-12 px-6 w-full max-w-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700"
          >
            Start Valuing Your Time
          </Link>

        </div>

      </section>

      {/* Features Section */}
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

      {/* Testimonials Section */}
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

      {/* FAQ Section */}
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
    </div>
  );
};

export default Home;
