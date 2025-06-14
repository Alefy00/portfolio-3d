import { socialImgs } from "../constants";
import { useLanguage } from "../constants/languageContext";


const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="footer p-4">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Ícones sociais à esquerda no desktop, acima no mobile */}
        <div className="socials flex gap-4 mb-4 md:mb-0">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                className="w-6 h-6"
              />
            </a>
          ))}
        </div>

        {/* Texto à direita no desktop, abaixo no mobile */}
        <div className="text-center md:text-end mr-2.5">
          <p className="text-sm">
            © {new Date().getFullYear()} Alefy Xavier.{" "}
            {language === "pt"
              ? "Todos os direitos reservados."
              : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;