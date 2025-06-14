import { useState, useEffect } from "react";
import { useLanguage } from "../constants/languageContext";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { content, switchLanguage, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Alefy Xavier
        </a>

        <nav className="desktop">
          <ul>
            {content.navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão de contato + idiomas lado a lado */}
          <div className="flex gap-2 text-xl items-center">
            <button
              onClick={() => switchLanguage("pt")}
              disabled={language === "pt"}
              className={`w-10 h-10 rounded-full overflow-hidden border ${language === "pt" ? "opacity-50" : "hover:opacity-80"}`}
            >
              <img src="/images/flags/br.svg" alt="Português" className="w-full h-full object-cover" />
            </button>

            <button
              onClick={() => switchLanguage("en")}
              disabled={language === "en"}
              className={`w-10 h-10 rounded-full overflow-hidden border ${language === "en" ? "opacity-50" : "hover:opacity-80"}`}
            >
              <img src="/images/flags/us.svg" alt="English" className="w-full h-full object-cover" />
            </button>
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>{language === "pt" ? "Entre em Contato" : "Contact Me"}</span>
            </div>
          </a>
          </div>
        </div>
    </header>
  );
};

export default NavBar;
