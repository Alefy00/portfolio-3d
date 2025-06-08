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
  { text: "Ideias", imgPath: "/images/ideas.svg" },
  { text: "Conceitos", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Código", imgPath: "/images/code.svg" },
  { text: "Ideias", imgPath: "/images/ideas.svg" },
  { text: "Conceitos", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Código", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Anos de Experiência" },
  { value: 300, suffix: "+", label: "Commits no GitHub" },
  { value: 20, suffix: "+", label: "Projetos completos" },
  { value: 20, suffix: "+", label: "Tecnologias Aprendidas" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/crosoften.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/celere.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/firebase-icon.png",
  },
  {
    imgPath: "/images/logos/javascript-icon.png",
  },
  {
    imgPath: "/images/logos/django-icon.png",
  },
  {
    imgPath: "/images/logos/postgresql-icon.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/python.png",
  },
  {
    imgPath: "/images/logos/react-native-icon.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Foco na Qualidade",
    desc: "Entregando resultados de alta qualidade, mantendo atenção a cada detalhe",
  },
  {
    imgPath: "/images/chat.png",
    title: "Comunicação confiável",
    desc: "Mantendo você atualizado em cada etapa para garantir transparência e clareza.",
  },
  {
    imgPath: "/images/time.png",
    title: "Entrega no prazo",
    desc: "Garantir que os projetos sejam concluídos dentro do prazo, com qualidade e atenção aos detalhes.",
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
    name: "Desenvolvedor React Native",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Desenvolvedor Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Desenvolvedor Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Desenvolvedor Frontend",
    modelPath: "/models/typescript-logo.glb",
    scale:1.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Github",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Durante o estágio, o Alefy demonstrou criatividade e boa base técnica, contribuindo com ideias que ajudaram a melhorar o desempenho do nosso front-end. Seu envolvimento foi importante para entregarmos uma experiência mais fluida aos usuários.",
    imgPath: "/images/logos/logo-movely.png",
    logoPath: "/images/movely-xp.jpg",
    title: "Estágio Desenvolvedor Frontend",
    date: "Janeiro 2023 - dezembro 2023",
    responsibilities: [
      "Desenvolver e manteve recursos voltados para o usuário no site",
      "Colaborar estreitamente com designers de UI/UX para garantir experiências perfeitas para o usuário.",
      "Otimizar as  paginas web para máxima velocidade e escalabilidade.",
    ],
  },
  {
    review: "Alefy atuou na refatoração e desacoplamento do backend de um ERP legado, tornando-o mais modular e escalável. Além disso, desenvolvi do zero o backend de um sistema PMOC, com foco em desempenho, boas práticas e implantação em ambiente Docker",
    imgPath: "/images/celere-img.png",
    logoPath: "/images/celere-icon.svg",
    title: "Desenvolvedor Full Stack",
    date: "Junho 2024 - Atualmente",
    responsibilities: [
      "Liderei o desenvolvimento de aplicações Mobile, com foco em escalabilidade.",
      "Trabalhei com engenheiros de backend para integrar APIs perfeitamente com o frontend.",
      "Realizei integrações com serviços extrenos como tap to phone e emissão de NF/NFS.",
    ],
  },
  {
    review: "O trabalho do Alefy no desenvolvimento web da Crosoften trouxe um alto nível de qualidade e eficiência. Ele entregou soluções que aprimoraram nossa experiência web e atenderam aos nossos objetivos de produto.",
    imgPath: "/images/crosoften-svg.svg",
    logoPath: "/images/crosoften-svg.svg",
    title: "Desenvolvedor Web",
    date: "Março 2025 - Atualmente",
    responsibilities: [
      "Desenvolvi inumeros layouts usando React e Angular , integrando-os aos serviços de backend da Crosoften .",
      "Melhorei o desempenho do aplicações web e experiência do usuário por meio de otimização e testes do código.",
      "Implementei recursos com base no feedback do stakeholders e nas melhores práticas de desenvolvimento.",
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
    url: "https://wa.me/+5538998451799", // substitua pelo seu número com DDI + DDD
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