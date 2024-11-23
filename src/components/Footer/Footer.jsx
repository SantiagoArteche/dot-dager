import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useContext(LanguageContext);
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{"<Dot Dager>"}</h3>
            <p className="text-gray-400">
              {language == "EN"
                ? `Exploring the intersections of technology, philosophy, and
              creativity.`
                : `Explorando las conexiones entre la tecnología, la filosofía y la creatividad.`}
            </p>
          </div>
          <div className="  mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">
              {language == "EN" ? "Quick Links" : "Atajos Rápidos"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {language == "EN" ? "Home" : "Inicio"}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {language == "EN" ? "About" : "Sobre Mi"}
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {language == "EN" ? "Contact" : "Contacto"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {currentYear}{" "}
            {language == "EN"
              ? "Dot Dager. All rights reserved."
              : "Dot Dager. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
};
