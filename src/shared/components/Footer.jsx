
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

// Importa el archivo JSON (simulado aquí dentro del componente)
const navItemsMobile = [
  { id: 1, name: "Inicio", emoji: "🏠", link: "/" },
  { id: 2, name: "Dashboard", emoji: "📊", link: "/dashboard" },
  { id: 3, name: "Registrar", emoji: "➕", link: "/registrar" },
  { id: 4, name: "Finanzas", emoji: "💸", link: "/finanzas" },
  { id: 5, name: "Perfil", emoji: "⚙️", link: "/perfil" }
];

// const footerLinks = [
//   { id: 1, name: "About us", link: "/about" },
//   { id: 2, name: "Privacy", link: "/privacy" },
//   { id: 3, name: "Terms", link: "/terms" },
//   { id: 4, name: "Blog", link: "/blog" },
//   { id: 5, name: "Contact", link: "/contact" }
// ];

const Footer = () => {
  const { t } = useTranslation(["footer"]);
  return (
    <Suspense fallback="loading">

      {/* Mobile Footer Navigation */}
      {/* <footer className="bg-white border-t border-gray-200 md:hidden fixed bottom-0 left-0 w-full z-10">
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
      </footer> */}

      {/* Footer for Desktop */}
      <footer className="pb-12 min-h-screen flex flex-col justify-center bg-white border-t drop-shadow-2xl border-gray-200">
        <div className="max-w-[1200px] mx-auto text-center px-4">
          {/* Título */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{t("title")}</h2>
          <p className="text-gray-600 text-base mb-6">
            {t("subtitle")}
          </p>

          {/* Navegación */}
          <nav className="flex justify-center gap-3 md:gap-7 mb-6 flex-wrap">
            {t("footerLinks", { returnObjects: true }).map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className="text-gray-700 hover:text-black text-base mb-1"
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Nota final */}
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Valora Prime. {t("buildWith")}{" "}
            <a
              href="https://github.com/itsteddydev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary ml-1"
              aria-label="Visit the creator's GitHub page"
            >
              {t("creator")}
            </a>
          </p>


        </div>
      </footer>

    </Suspense>
  );
};


export default Footer;
