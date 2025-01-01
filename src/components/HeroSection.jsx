import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const HeroSection = () => {
  const { t, i18n } = useTranslation(["heroSection"]);
  return (
    <Suspense fallback="loading...">




      <section id="home" className="space-y-6 mb-10 min-h-screen flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <p className="text-xs text-gray-500">
            {t("create")}{" "}
            <a
              href="https://www.instagram.com/justcoddev/"
              className="underline underline-offset-2 hover:text-primary ml-1"
              target='_blank'
            >
              {t("creator")}
            </a>
          </p>
        </div>

        <header className="text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">
            {t("title_1")}<br />  {t("title_2")}
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-lg lg:mt-6">
            {t("subtitle_1")}
          </p>
        </header>

        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          {t("subtitle_2")}
        </p>

        <div className="flex justify-center">
          <NavLink
            // href="/calculateprice"
            // target="_self"
            to="/calculateprice"
            className="inline-flex items-center justify-center rounded-lg text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:pointer-events-none disabled:bg-gray-300 disabled:text-gray-400 disabled:opacity-50 shadow-lg h-12 px-6 w-full max-w-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700"
          >
            {t("cta")}
          </NavLink>
        </div>
      </section>
    </Suspense>
  );
};

export default HeroSection;
