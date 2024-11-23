import React, { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { SidebarContext } from "../../context/SidebarContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { changeLanguage, language } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { isOpen, openSideMenu } = useContext(SidebarContext);

  const navItems = [
    { en: "Home", es: "Inicio" },
    { en: "About", es: "Sobre Mi" },
    { en: "Contact", es: "Contacto" },
  ];

  return (
    <header
      className={`${
        isOpen ? "absolute" : "fixed"
      } top-0 z-10 w-full border-b bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 px-4 sm:px-8`}
    >
      <div className="container mx-auto flex h-20 items-center justify-evenly sm:justify-between">
        <a href="#home">
          <span className="text-2xl font-bold tracking-tight text-white hover:text-blue-500">
            {"<Dot Dager>"}
          </span>
        </a>

        <div className="flex items-center gap-0 sm:gap-0">
          <img
            src="/imgs/111bf284-b096-40a5-a4e1-e854fc58afc9_1732155374660.png"
            alt="Profile"
            className={`h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover  mr-12 sm:mr-0 sm:block ${
              language == "ES" ? "md:ms-[37px]" : "md:ms-2"
            }`}
          />

          <button
            className="sm:hidden text-white focus:outline-none ml-4"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex space-x-7 items-center">
            {navItems.map((item) => (
              <li
                key={item[language.toLowerCase()]}
                className="hover:translate-y-0.5 transition-all duration-200"
              >
                <a
                  href={`#${item.en.toLowerCase()}`}
                  className="text-lg font-medium text-gray-300 transition-colors hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item[language.toLowerCase()]}
                </a>
              </li>
            ))}
            <li className="hover:translate-y-0.5 transition-all duration-200">
              <button
                onClick={changeLanguage}
                className="text-lg font-medium text-gray-300 transition-colors hover:text-blue-500"
              >
                <img
                  alt={language === "ES" ? "Argentina" : "United States"}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${
                    language === "ES" ? "AR" : "US"
                  }.svg`}
                  className="h-8 w-8"
                />
              </button>
            </li>
            <li>
              <button
                className="hidden sm:block text-white focus:outline-none ml-4"
                aria-label="Toggle menu"
                onClick={openSideMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {isMenuOpen && (
        <nav className="sm:hidden">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li
                key={item[language.toLowerCase()]}
                className="w-full text-center py-2 duration-200"
              >
                <a
                  href={`#${item.en.toLowerCase()}`}
                  className="text-lg font-medium text-gray-300 transition-colors hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item[language.toLowerCase()]}
                </a>
              </li>
            ))}
            <li className="w-full text-center py-2 duration-200">
              <button
                onClick={() => {
                  changeLanguage();
                  setIsMenuOpen(false);
                }}
                className="text-lg font-medium text-gray-300 transition-colors hover:text-blue-500"
              >
                <img
                  alt={language === "ES" ? "Argentina" : "United States"}
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${
                    language === "ES" ? "AR" : "US"
                  }.svg`}
                  className="h-8 w-8 inline-block"
                />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
