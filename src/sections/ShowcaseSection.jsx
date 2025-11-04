import { useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../constants/languageContext";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const featuredRef = useRef(null);
  const listRefs = useRef([]);
  const { language } = useLanguage();

  // === seus dados ===
  const projects = {
pt: [
  {
    title: "PMOC - Gestão de Manutenção de Sistemas de Climatização",
    description:
      "Um aplicativo desenvolvido com React Native, Expo e TailwindCSS para uma experiência rápida e fácil de usar.",
    image: "/images/pmoc.png",
  },
  {
    title:
      "Tito – Plataforma EAD White Label para instituições de ensino personalizarem e gerenciarem seus próprios ambientes de aprendizagem online.",
    image: "/images/tito1.png",
    bg: "#FFEFDB",
  },
  {
    title:
      "Easy Trocas – Sistema de marketplace desenvolvido para facilitar a compra e venda de produtos entre usuários, utilizando créditos internos como moeda de troca.",
    image: "/images/permuta1.png",
    bg: "#FFE7EB",
  },
  {
    title: "Engenharia Civil - Portfólio Online",
    image: "/images/engenharia.png",
    bg: "#F3F4F6",
    description:
      "Portfólio desenvolvido para um engenheiro civil, com apresentação dos projetos realizados, localização do escritório e integração completa com e-mail, redes sociais e WhatsApp.",
  },
  {
    title:
      "Eatmind - Blog com dicas de saúde, treino e alimentação, com integração ao Google Ads para monetização.",
    image: "/images/eatmind.png",
    bg: "#F3F4F6",
  },
  {
    title:
      "Hidrosense - Sistema SaaS para monitoramento hídrico e gestão ambiental com dashboards em tempo real.",
    image: "/images/hidrosense.png",
    bg: "#F3F4F8",
  },
  {
    title: "ERP Mobile - Gestão Empresarial Integrada",
    image: "/images/erp-mobile.png",
    bg: "#F3F4F6",
    description:
      "Aplicativo ERP mobile para controle de vendas, estoque e finanças, com foco em desempenho e sincronização com backend web.",
  },
  {
    title:
      "Imob - Plataforma web para imobiliárias com gestão de anúncios, leads e integração com portais externos.",
    image: "/images/imob.png",
    bg: "#F3F4F6",
  },
  {
    title:
      "ImobFlow - Sistema de gestão imobiliária completo com controle de locações, contratos e relatórios.",
    image: "/images/imobflow.png",
    bg: "#F3F4F8",
  },
  {
    title: "Ponto Prof - Sistema de Controle de Ponto",
    image: "/images/ponto-prof.png",
    bg: "#F3F4F6",
    description:
      "Sistema de marcação de ponto para professores, com autenticação segura e exportação de relatórios.",
  },
  {
    title:
      "Inno - Plataforma de gestão financeira com recursos de agendamento, graficos dinâmicos e acompanhamento de progresso.",
    image: "/images/inno.png",
    bg: "#F3F4F6",
  },
  {
    title:
      "Tattoo Studio - Portfólio para tatuadora com galeria interativa, estilos de tatuagem e orçamento integrado.",
    image: "/images/tattoo.png",
    bg: "#F3F4F8",
  },



    ],
en: [
  {
    title: "PMOC - HVAC Maintenance Management",
    description:
      "An application developed with React Native, Expo, and TailwindCSS for a fast and user-friendly experience.",
    image: "/images/pmoc.png",
  },
  {
    title:
      "Tito – A White Label E-learning platform that allows educational institutions to customize and manage their own online learning environments.",
    image: "/images/tito1.png",
    bg: "#FFEFDB",
  },
  {
    title:
      "Easy Trocas – A marketplace system designed to make it easy for users to buy and sell products using internal credits as currency.",
    image: "/images/permuta1.png",
    bg: "#FFE7EB",
  },
  {
    title: "Civil Engineering - Online Portfolio",
    image: "/images/engenharia.png",
    bg: "#F3F4F6",
    description:
      "A professional portfolio developed for a civil engineer, showcasing completed projects, office location, and full integration with email, social media, and WhatsApp.",
  },
  {
    title:
      "Eatmind - Blog with health, fitness, and nutrition tips, featuring SEO-optimized articles and Google Ads integration for monetization.",
    image: "/images/eatmind.png",
    bg: "#F3F4F6",
  },
  {
    title:
      "Hidrosense - SaaS platform for smart water monitoring and environmental license management with real-time dashboards.",
    image: "/images/hidrosense.png",
    bg: "#F3F4F8",
  },
  {
    title: "ERP Mobile - Integrated Business Management",
    image: "/images/erp-mobile.png",
    bg: "#F3F4F6",
    description:
      "A mobile ERP application for managing sales, inventory, and finances, focused on performance and synchronization with the web backend.",
  },
  {
    title:
      "Imob - Web platform for real estate companies with ad management, lead tracking, and integration with external portals.",
    image: "/images/imob.png",
    bg: "#F3F4F6",
  },
  {
    title:
      "ImobFlow - Complete real estate management system with property rentals, contracts, and automated reports.",
    image: "/images/imobflow.png",
    bg: "#F3F4F8",
  },
  {
    title: "Ponto Prof - Time Tracking System",
    image: "/images/ponto-prof.png",
    bg: "#F3F4F6",
    description:
      "A time tracking system for teachers, featuring secure authentication and report export tools.",
  },
  {
    title:
      "Inno - Financial management platform with scheduling tools, dynamic charts, and progress tracking features.",
    image: "/images/inno.png",
    bg: "#F3F4F6",
  },
  {
    title:
      "Tattoo Studio - Portfolio website for a tattoo artist, with an interactive gallery, tattoo styles, and integrated booking form.",
    image: "/images/tattoo.png",
    bg: "#F3F4F8",
  },
],

  };

  const content = projects[language] || [];

  // índice do trio atual (0 -> itens 0,1,2 | 3 -> 3,4,5 | etc.)
  const [start, setStart] = useState(0);

  // calcula trio visível sem mudar o DOM
  const { featured, list } = useMemo(() => {
    if (content.length === 0) return { featured: null, list: [] };

    const f = content[start] || null;
    const a = content[start + 1] || null;
    const b = content[start + 2] || null;

    // sempre manter 2 compactos no wrapper, se existirem
    const l = [a, b].filter(Boolean);
    return { featured: f, list: l };
  }, [content, start]);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.0 });
    }
    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: { trigger: featuredRef.current, start: "top bottom-=100" },
        }
      );
    }
    listRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.1 * (i + 1),
          scrollTrigger: { trigger: el, start: "top bottom-=80" },
        }
      );
    });
  }, [language, start]);

  const hasPrev = start - 3 >= 0;
  const hasNext = start + 3 < content.length;

  const goPrev = () => setStart((s) => (s - 3 >= 0 ? s - 3 : 0));
  const goNext = () => setStart((s) => (s + 3 < content.length ? s + 3 : s));


  const onCompactClick = () => {
    if (hasNext) goNext();
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {featured && (
            <div ref={featuredRef} className="first-project-wrapper">
              <div
                className="image-wrapper rounded-xl"
                // ✅ aplica bg no destaque (usa o bg do item, com fallback)
                style={{ backgroundColor: featured.bg || "#F8F8F8" }}
              >
                <img src={featured.image} alt={featured.title} />
              </div>
              <div className="text-content">
                <h2>{featured.title}</h2>
                {featured.description && (
                  <p className="text-white-50 md:text-xl">{featured.description}</p>
                )}
              </div>
            </div>
          )}

          <div className="project-list-wrapper overflow-hidden">
            {list.map((proj, idx) => (
              <div
                key={`${proj.title}-${start + idx + 1}`}
                className="project"
                ref={(el) => (listRefs.current[idx] = el)}
                onClick={() => onCompactClick(idx)}
              >
                <div
                  className="image-wrapper"
                  style={{ backgroundColor: proj.bg || "#F8F8F8" }}
                >
                  <img src={proj.image} alt={proj.title} />
                </div>
                <h2>{proj.title}</h2>
              </div>
            ))}
          </div>

          {(hasPrev || hasNext) && (
            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                disabled={!hasPrev}
                className="px-4 py-2 rounded-md border border-white/20 disabled:opacity-40"
              >
                ◀ Anterior
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!hasNext}
                className="px-4 py-2 rounded-md border border-white/20 disabled:opacity-40"
              >
                Próximo ▶
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
