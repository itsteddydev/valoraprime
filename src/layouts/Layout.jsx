import Footer from "@/shared/components/Footer";
import Header from "@/shared/components/Header";
import React from "react";
import { Outlet, NavLink } from "react-router-dom";


const Layout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* Header */}
      <header className="fixed top-0 w-full z-10 bg-white">
        <div
          className={`max-w-[1200px] mx-auto rounded-b-lg px-6 md:py-6 py-4 flex justify-between items-center transition-shadow 
            }`}
        >
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-gray-800 hover:text-black">
            Valora Prime
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <NavLink to="/" className="hover:text-black text-sm font-medium text-zinc-800 hover:underline hover:font-semibold">
              Home
            </NavLink>
          </nav>

          {/* Hamburger Menu */}
          {/* <button
            className="md:hidden flex items-center text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button> */}
        </div>

        {/* Mobile Menu */}
        {/* {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col items-center gap-4 py-4">
              {navItemsDesktop.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={(e) => handleNavClick(e, item.link)}
                  className="text-gray-800 hover:text-black text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )} */}
      </header>
      {/* <Header /> */}

      {/* Main Content */}
      <main className="pb-20 pt-16 md:pt-24 md:pb-16 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto px-2">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
