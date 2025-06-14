import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../constants/languageContext";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);
  const { language } = useLanguage();

  const projects = {
    pt: [
      {
        title: "PMOC - Gestão de Manutenção de Sistemas de Climatização",
        description:
          "Um aplicativo desenvolvido com React Native, Expo e TailwindCSS para uma experiência rápida e fácil de usar.",
      },
      {
        title:
          "Tito – Plataforma EAD White Label para instituições de ensino personalizarem e gerenciarem seus próprios ambientes de aprendizagem online.",
      },
      {
        title:
          "Easy Trocas – Sistema de marketplace desenvolvido para facilitar a compra e venda de produtos entre usuários, utilizando créditos internos como moeda de troca.",
      },
    ],
    en: [
      {
        title: "PMOC - HVAC Maintenance Management",
        description:
          "An app built with React Native, Expo, and TailwindCSS for a fast and user-friendly experience.",
      },
      {
        title:
          "Tito – A White Label E-learning platform for educational institutions to customize and manage their own online learning environments.",
      },
      {
        title:
          "Easy Trocas – A marketplace system designed to simplify product trading between users using internal credits as currency.",
      },
    ],
  };

  const content = projects[language];

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, [language]);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/pmoc.png" alt="PMOC App" />
            </div>
            <div className="text-content">
              <h2>{content[0].title}</h2>
              <p className="text-white-50 md:text-xl">
                {content[0].description}
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/tito1.png" alt="Tito Platform" />
              </div>
              <h2>{content[1].title}</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/permuta1.png" alt="Easy Trocas" />
              </div>
              <h2>{content[2].title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;