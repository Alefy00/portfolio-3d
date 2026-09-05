const enUS = {
  navLinks: [
    { name: "Projects", link: "#work" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
  ],

  words: [
    { text: "Interfaces", imgPath: "/images/designs.svg" },
    { text: "Products", imgPath: "/images/concepts.svg" },
    { text: "Experiences", imgPath: "/images/ideas.svg" },
    { text: "Solutions", imgPath: "/images/code.svg" },
    { text: "Interfaces", imgPath: "/images/designs.svg" },
    { text: "Products", imgPath: "/images/concepts.svg" },
    { text: "Experiences", imgPath: "/images/ideas.svg" },
    { text: "Solutions", imgPath: "/images/code.svg" },
  ],

  counterItems: [
    { value: Math.max(0, new Date().getFullYear() - 2023), suffix: "+", label: "Years of Professional Experience" },
    { value: 500, suffix: "+", label: "Commits on GitHub" },
    { value: 20, suffix: "+", label: "Completed Projects" },
    { value: 20, suffix: "+", label: "Technologies Used" },
  ],

  abilities: [
    {
      imgPath: "/images/seo.png",
      title: "End-to-End Quality",
      desc: "I care for implementation, interface details, and code maintainability to deliver consistent solutions.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Clear Collaboration",
      desc: "I communicate decisions, risks, and progress clearly to keep product and engineering aligned.",
    },
    {
      imgPath: "/images/time.png",
      title: "Responsible Delivery",
      desc: "I organize priorities and execute predictably without compromising quality or attention to detail.",
    },
  ],

  logoIconsList: [
    { name: "Movely", imgPath: "/images/logos/logo-movely.png" },
    { name: "Adviseu" },
    { name: "Philips" },
    { name: "Microsoft", imgPath: "/images/logos/company-logo-2.png" },
    { name: "Docker", imgPath: "/images/logos/company-logo-4.png" },
    { name: "Firebase", imgPath: "/images/logos/firebase-icon.png" },
    { name: "JavaScript", imgPath: "/images/logos/javascript-icon.png" },
    { name: "Django", imgPath: "/images/logos/django-icon.png" },
    { name: "PostgreSQL", imgPath: "/images/logos/postgresql-icon.png" },
    { name: "Vercel", imgPath: "/images/logos/company-logo-9.png" },
    { name: "Python", imgPath: "/images/logos/python.png" },
    { name: "React Native", imgPath: "/images/logos/react-native-icon.png" },
  ],

  techStackImgs: [
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
  ],

  techStackIcons: [
    {
      name: "React & React Native",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python & Django",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "APIs & Backend",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "TypeScript & Angular",
      modelPath: "/models/typescript-logo.glb",
      scale: 1.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Git & Collaboration",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ],

  expCards: [
    {
      id: "movely-frontend-intern",
      company: "Movely",
      companyUrl: null,
      review:
        "During his internship, Alefy demonstrated creativity and a solid technical foundation, contributing frontend improvements and helping deliver a smoother user experience.",
      imgPath: "/images/logos/logo-movely.png",
      logoPath: "/images/movely-xp.jpg",
      title: "Frontend Developer Intern",
      date: "January 2023 – December 2023",
      technologies: ["HTML", "CSS", "JavaScript"],
      responsibilities: [
        "Developed and maintained user-facing features on the website.",
        "Collaborated with UI/UX designers to build consistent, intuitive experiences.",
        "Optimized web pages with a focus on performance and scalability.",
      ],
    },
    {
      id: "adviseu-full-stack-developer",
      company: "Adviseu",
      companyUrl: "https://adviseu.com.br/",
      review:
        "Full-stack work focused on evolving systems and developing solutions with an emphasis on code quality, performance, and maintainability.",
      imgPath: null,
      logoPath: null,
      title: "Full Stack Developer",
      date: "June 2024 – Present",
      technologies: ["React Native", "Python", "Django", "REST APIs", "Docker"],
      responsibilities: [
        "Worked on mobile application development with scalability and code quality in mind.",
        "Collaborated with backend engineers to integrate APIs consistently across the frontend.",
        "Implemented external service integrations while maintaining reliable flows between systems.",
      ],
    },
    {
      id: "philips-software-engineer",
      company: "Philips",
      companyUrl: null,
      review:
        "At Philips, I contributed to developing and maintaining frontend applications for Latin American products while collaborating with international teams in an agile environment.",
      imgPath: null,
      logoPath: null,
      title: "Software Engineer",
      date: "January 2026 – May 2026",
      technologies: ["Angular", "TypeScript", "TailwindCSS", "RxJS", "REST APIs", "Git", "Agile/Scrum"],
      responsibilities: [
        "Developed and maintained scalable, responsive frontend applications with Angular, TypeScript, TailwindCSS, and RxJS.",
        "Improved performance and refactored components, including state management and REST API integration.",
        "Collaborated with international teams on products for Latin America using Git and Agile/Scrum practices.",
      ],
    },
  ],

  expLogos: [
    { name: "logo1", imgPath: "/images/logo1.png" },
    { name: "logo2", imgPath: "/images/logo2.png" },
    { name: "logo3", imgPath: "/images/logo3.png" },
  ],

  socialImgs: [
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
  ],
};

export default enUS;
