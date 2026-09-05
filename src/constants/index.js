const navLinks = [
  {
    name: "Projetos",
    link: "#work",
  },
  {
    name: "Experiência",
    link: "#experience",
  },
  {
    name: "Habilidades",
    link: "#skills",
  },
];

const words = [
  { text: "Interfaces", imgPath: "/images/designs.svg" },
  { text: "Produtos", imgPath: "/images/concepts.svg" },
  { text: "Experiências", imgPath: "/images/ideas.svg" },
  { text: "Soluções", imgPath: "/images/code.svg" },
  { text: "Interfaces", imgPath: "/images/designs.svg" },
  { text: "Produtos", imgPath: "/images/concepts.svg" },
  { text: "Experiências", imgPath: "/images/ideas.svg" },
  { text: "Soluções", imgPath: "/images/code.svg" },
];

const yearsOfExperience = Math.max(0, new Date().getFullYear() - 2023);

const counterItems = [
  { value: yearsOfExperience, suffix: "+", label: "Anos de experiência profissional" },
  { value: 500, suffix: "+", label: "Commits no GitHub" },
  { value: 20, suffix: "+", label: "Projetos concluídos" },
  { value: 20, suffix: "+", label: "Tecnologias utilizadas" },
];

const logoIconsList = [
  {
    name: "Movely",
    imgPath: "/images/logos/logo-movely.png",
  },
  {
    name: "Adviseu",
  },
  {
    name: "Philips",
  },
  {
    name: "Microsoft",
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    name: "Firebase",
    imgPath: "/images/logos/firebase-icon.png",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/javascript-icon.png",
  },
  {
    name: "Django",
    imgPath: "/images/logos/django-icon.png",
  },
  {
    name: "PostgreSQL",
    imgPath: "/images/logos/postgresql-icon.png",
  },
  {
    name: "Vercel",
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.png",
  },
  {
    name: "React Native",
    imgPath: "/images/logos/react-native-icon.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Qualidade de ponta a ponta",
    desc: "Cuido da implementação, dos detalhes da interface e da manutenção do código para entregar soluções consistentes.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Colaboração clara",
    desc: "Comunico decisões, riscos e progresso com clareza para manter produto e tecnologia alinhados.",
  },
  {
    imgPath: "/images/time.png",
    title: "Entrega responsável",
    desc: "Organizo prioridades e executo com previsibilidade, sem abrir mão da qualidade e da atenção aos detalhes.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React e React Native",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python e Django",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "APIs e Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "TypeScript e Angular",
    modelPath: "/models/typescript-logo.glb",
    scale:1.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Git e colaboração",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id: "movely-frontend-intern",
    company: "Movely",
    companyUrl: null,
    review: "Durante o estágio, Alefy demonstrou criatividade e uma boa base técnica, contribuindo com melhorias no frontend e colaborando para uma experiência mais fluida para os usuários.",
    imgPath: "/images/logos/logo-movely.png",
    logoPath: "/images/movely-xp.jpg",
    title: "Estagiário em Desenvolvimento Frontend",
    date: "Janeiro de 2023 – Dezembro de 2023",
    technologies: ["HTML", "CSS", "JavaScript"],
    responsibilities: [
      "Desenvolvi e mantive funcionalidades voltadas ao usuário no site.",
      "Colaborei com designers de UI/UX para construir experiências consistentes e intuitivas.",
      "Otimizei páginas web com foco em desempenho e escalabilidade.",
    ],
  },
  {
    id: "adviseu-full-stack-developer",
    company: "Adviseu",
    companyUrl: "https://adviseu.com.br/",
    review: "Atuação full stack na evolução de sistemas e no desenvolvimento de soluções, com foco em qualidade de código, desempenho e manutenibilidade.",
    imgPath: null,
    logoPath: null,
    title: "Desenvolvedor Full Stack",
    date: "Junho de 2024 – Atualmente",
    technologies: ["React Native", "Python", "Django", "APIs REST", "Docker"],
    responsibilities: [
      "Atuei no desenvolvimento de aplicações mobile, priorizando escalabilidade e qualidade de código.",
      "Colaborei com engenheiros de backend para integrar APIs ao frontend de forma consistente.",
      "Implementei integrações com serviços externos, cuidando da confiabilidade dos fluxos entre sistemas.",
    ],
  },
  {
    id: "philips-software-engineer",
    company: "Philips",
    companyUrl: null,
    review: "Na Philips, contribuí para o desenvolvimento e a manutenção de aplicações frontend voltadas à América Latina, colaborando com equipes internacionais em um ambiente ágil.",
    imgPath: null,
    logoPath: null,
    title: "Software Engineer",
    date: "Janeiro de 2026 – Maio de 2026",
    technologies: ["Angular", "TypeScript", "TailwindCSS", "RxJS", "APIs REST", "Git", "Agile/Scrum"],
    responsibilities: [
      "Desenvolvi e mantive aplicações frontend escaláveis e responsivas com Angular, TypeScript, TailwindCSS e RxJS.",
      "Otimizei a performance e refatorei componentes, incluindo gerenciamento de estado e integração com APIs REST.",
      "Colaborei com equipes internacionais em produtos para a América Latina, utilizando Git e práticas Agile/Scrum.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/alee_sx/",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    url: "https://x.com/alefy_xavier?",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/alefy-xavier-developer/",
  },
    {
    name: "whatsapp",
    imgPath: "/images/whatsapp.svg",
    url: "https://wa.me/+5538998451799", 
  },
      {
    name: "github",
    imgPath: "/images/github-icon.svg",
    url: "https://github.com/Alefy00", 
  },
];


export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
