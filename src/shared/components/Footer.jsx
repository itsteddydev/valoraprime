import React from "react";
import { NavLink } from "react-router-dom";

const navItemsMobile = [
  { id: 1, name: "Inicio", emoji: "🏠", link: "/" },
  { id: 2, name: "Dashboard", emoji: "📊", link: "/dashboard" },
  { id: 3, name: "Registrar", emoji: "➕", link: "/registrar" },
  { id: 4, name: "Finanzas", emoji: "💸", link: "/finanzas" },
  { id: 5, name: "Perfil", emoji: "⚙️", link: "/perfil" },
];

const Footer = () => {
  return (
    <>
      {/* Mobile Footer Navigation */}
      <footer className="bg-white border-t border-gray-200 md:hidden fixed bottom-0 left-0 w-full z-10">
        <div className="flex justify-around items-center py-2">
          {navItemsMobile.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                `flex flex-col items-center text-gray-700 hover:text-black ${isActive ? "text-black" : ""
                }`
              }
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </footer>

      {/* Footer for Desktop */}
      <footer className="hidden md:block">
        <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
          {/* Título */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Valora Prime</h2>
          <p className="text-gray-600 text-base mb-6">
            An essential tool for accurately assessing and organizing your finances.
          </p>

          {/* Navegación */}
          <nav className="flex justify-center gap-8 mb-6">
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-black text-base"
            >
              About us
            </NavLink>
            <NavLink
              to="/privacy"
              className="text-gray-700 hover:text-black text-base"
            >
              Privacy
            </NavLink>
            <NavLink
              to="/terms"
              className="text-gray-700 hover:text-black text-base"
            >
              Terms
            </NavLink>
            <NavLink
              to="/blog"
              className="text-gray-700 hover:text-black text-base"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-black text-base"
            >
              Contact
            </NavLink>
          </nav>

          {/* Nota final */}
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Valora Prime. © Built with ❤️? by a justcoddev.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
