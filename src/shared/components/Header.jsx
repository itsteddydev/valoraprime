import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navItemsDesktop = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Features", link: "#features" },
  { id: 3, name: "Testimonials", link: "#testimonials" },
  { id: 4, name: "FAQ", link: "#faq" },
];


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const targetSection = document.querySelector(link);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Cierra el menú al hacer clic
  };

  return (
    <header className="fixed top-0 w-full z-10 bg-white">
      <div
        className={`max-w-[1200px] mx-auto rounded-b-lg px-6 md:py-6 py-4 flex justify-between items-center transition-shadow ${scrolled ? "shadow-md" : ""
          }`}
      >
        {/* Logo */}
        <NavLink to="/" className="text-xl font-bold text-gray-800 hover:text-black">
          Valora Prime
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItemsDesktop.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="hover:text-black text-sm font-medium text-zinc-800 hover:underline hover:font-semibold"
            >
              {item.name}
            </a>

          ))}
        </nav>

        {/* Hamburger Menu */}
        <button
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
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
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
      )}
    </header>
  );
};

export default Header;
