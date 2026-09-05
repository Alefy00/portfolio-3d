import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "../constants/languageContext";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { content, language } = useLanguage();

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  }, [content.expCards]);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title={
            language === "pt"
              ? "Experiência profissional"
              : "Professional Experience"
          }
          sub={
            language === "pt"
              ? "💼 Trajetória desde 2023"
              : "💼 Career journey since 2023"
          }
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {content.expCards.map((card) => (
              <div key={card.id} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="min-h-20 flex items-center">
                      {card.imgPath ? (
                        <img
                          src={card.imgPath}
                          alt={
                            language === "pt"
                              ? `Logo da ${card.company}`
                              : `${card.company} logo`
                          }
                          className="w-auto max-w-full h-20 object-contain"
                        />
                      ) : card.companyUrl ? (
                        <a
                          href={card.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-3xl font-semibold tracking-tight text-white hover:text-white-50 transition-colors"
                        >
                          {card.company}
                        </a>
                      ) : (
                        <span className="text-3xl font-semibold tracking-tight text-white">
                          {card.company}
                        </span>
                      )}
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        {card.logoPath ? (
                          <img
                            src={card.logoPath}
                            alt={
                              language === "pt"
                                ? `Logo da ${card.company}`
                                : `${card.company} logo`
                            }
                            className="w-12 h-12 object-contain rounded-2xl"
                          />
                        ) : (
                          <span
                            aria-label={card.company}
                            className="text-lg md:text-2xl font-semibold text-white-50"
                          >
                            {card.company.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        {card.companyUrl ? (
                          <a
                            href={card.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mb-2 text-white-50 hover:text-white underline underline-offset-4"
                          >
                            {card.company}
                          </a>
                        ) : (
                          <p className="mb-2 text-white-50">{card.company}</p>
                        )}
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {card.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white-50"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                        <p className="text-[#839CB5] italic">
                          {language === "pt"
                            ? "Responsabilidades"
                            : "Responsibilities"}
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
