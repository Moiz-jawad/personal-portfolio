const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: "N/A", suffix: "", label: "Satisfied Clients" },
  { value: 18, suffix: "+", label: "Completed Projects" },
  { value: "N/A", suffix: "", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "https://img.icons8.com/color/80/flutter.png",
  },
  {
    imgPath: "https://img.icons8.com/color/80/nodejs.png",
  },
  {
    imgPath: "https://img.icons8.com/officel/80/react.png",
  },
  {
    imgPath: "https://img.icons8.com/color/96/google-firebase-console.png",
  },
  {
    imgPath: "https://img.icons8.com/fluency/96/visual-studio-code-2019.png",
  },
  {
    imgPath: "https://img.icons8.com/3d-fluency/94/github-logo.png",
  },
  {
    imgPath:
      "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png",
  },
  {
    imgPath: "https://img.icons8.com/color/96/html-5--v1.png",
  },
  {
    imgPath: "https://img.icons8.com/color/96/tailwindcss.png",
  },
  {
    imgPath: "https://img.icons8.com/color/96/javascript--v1.png",
  },
];

const abilities = [
  {
    imgPath: "https://img.icons8.com/nolan/64/design.png",
    title: "Robust Architecture",
    desc: "Designing scalable backend systems and clean frontend components with modern frameworks.",
  },
  {
    imgPath: "https://img.icons8.com/color/48/api.png",
    title: "Secure APIs",
    desc: "Implementing JWT authentication, validation, and error handling for reliable communication between client and server.",
  },
  {
    imgPath:
      "https://img.icons8.com/pulsar-gradient/48/spaceship-launch-documentation.png",
    title: "Efficient Deployment",
    desc: "Delivering production-ready apps with optimized performance, CI/CD pipelines, and on-time releases.",
  },
  {
    imgPath: "https://img.icons8.com/color/48/web-design.png",
    title: "User-Centric Design",
    desc: "Crafting responsive, accessible, and polished interfaces with React and modern UI libraries.",
  },
  {
    imgPath: "https://img.icons8.com/nolan/64/database.png",
    title: "Database Mastery",
    desc: "Building reliable schemas, optimizing queries, and integrating SQL/NoSQL solutions for performance and scalability.",
  },
  {
    imgPath: "https://img.icons8.com/fluency/48/security-configuration.png",
    title: "Best-Practice Security",
    desc: "Applying password hashing, rate limiting, and secure coding standards to protect applications end-to-end.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Flutter Developer",
    imgPath: "/images/logos/p",
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
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Flutter Developer",
    modelPath: "/models/Flutter.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Moiz’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "Oct 2025 - Present",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Moiz’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Backend Developer",
    date: "Oct 2025 - Nov 2025",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
  {
    review:
      "Moiz brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/DEN.png",
    logoPath: "/images/DEN.png",
    title: "Flutter Developer",
    date: "July 2025 - Sept 2025",
    responsibilities: [
      `Built multiple Flutter apps (Quiz App, Task Manager, AdMob,
      Monetization App, Authentication System, Highway Incident
      Detection App, and Social Learning App) within weekly
      deadlines, integrating Firebase Auth, Firestore, Supabase
      SharedPreferences, AdMob, and MVVM architecture.`,

      `Applied state management, form validation, and animated UI/UX
      transitions to deliver polished, production-ready applications
      with real-world monetization and scalable features.`,
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

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
