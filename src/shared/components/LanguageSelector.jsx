import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = ({ onLanguageChange }) => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lee el idioma desde localStorage al cargar el componente
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Guarda el idioma en localStorage
    setMenuOpen(false); // Cierra el menú desplegable
    if (onLanguageChange) onLanguageChange(); // Llama al callback si está definido
  };

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-800 font-medium px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
      >
        {i18n.language.toUpperCase()}
      </button>
      {menuOpen && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-32">
          <button
            onClick={() => changeLanguage("en")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
