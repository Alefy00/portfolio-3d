import { createContext, useContext, useState } from "react";
import ptBR from "./ptBR";
import enUS from "./enUS";

const LanguageContext = createContext();

const translations = {
  pt: ptBR,
  en: enUS,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");

  const switchLanguage = (lang) => {
    if (lang in translations) {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    switchLanguage,
    content: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
