import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  laravel,
  vmsl,
  apsis,
  wick,
  php,
  oracle,
  flutter,
  next,
  jquery,
  mysql,
  linux,
  python,
  bootstrap,
  postgresql,
  firebase,
  sass,
  codeigniter,
  ificerp,
  inafunnyway,
  mmclothing,
  nationalhousing,
  nftdash,
  aamarshop,
  shuttle,
  almadinacar,
  apsiserp,
  apsishrm,
  baladna,
  citybankerp,
  cookieapp,
  cookieweb,
  olivebranch,
  smcportfolio,
  whymom,
  ankhmarketplace,
  myplanetearth,
  shuttleWebsite,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Laravel Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Redux",
    icon: redux,
  },

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "jQuery",
    icon: jquery,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Codeigniter",
    icon: codeigniter,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Shuttle Delivery Co. Ltd.",
    icon: shuttle,
    iconBg: "#ff9100",
    date: "Aug 2023 - Present",
    points: [
      "Working on the core system with Codeigniter, MySQL and Laravel Packages",
      "Building APIs for mobile application",
      "Working on the delivery dispatch system with Node.js MongoDB",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "The Wick Firm",
    icon: wick,
    iconBg: "#383E56",
    date: "May 2022 - May 2023",
    points: [
      "Built NFT tracking dashboard using Laravel and Web3.",
      "Developed dynamic dashboard and websites using Laravel, MySQL and React.js/Next.js.",
      "Developed AI based chatbot and creative ads generator using Python, OpenAI and React.js.",
      "Implementing responsive design and ensuring cross-browser compatibility follwoing figma, adobe xd.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Apsis Solutions Limited",
    icon: apsis,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - May 2022",
    points: [
      "Worked on various ERP solutions using React.js/Next.js, PHP/Laravel, Codeigniter.",
      "Developed ERP systems for financial institutes and offices.",
      "Developed mobile apps with Flutter and Node.js API.",
      "Updated existing ERP systems.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Virtual Market Solution Limited",
    icon: vmsl,
    iconBg: "#5EB1DE",
    date: "June 2020 - Feb 2021",
    points: [
      "Built websites with Laravel, jQuery and MySQL.",
      "Built web apps and POS systems for businesses.",
      "Developed APIs for mobile apps.",
      "Updated and maintained existing websites.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jobayed is a special individual one only comes across in a life time. Super super talented. Incredibly understanding, caring, dedicated, imaginative, creative... The list goes on. I 100% recommend Jobayed for anyone looking to get work done efficiently and with full hearted brilliance. Buddy it's an absolute joy to work with you.",
    name: "Nai Peters",
    country: "United Kingdom",
  },
  {
    testimonial:
      "Jobayed is a very responsible and capable developer. His communication is excellent as is his work and being able to take direction I have nothing bad to say about him and I look forward to using his services again in the near future.",
    name: "Ahmed Tahoun",
    country: "Egypt",
  },
  // {
  //   testimonial: "Thank you for your work!",
  //   name: "Akos Varga",
  //   country: "Hungary",
  // },
];

const projects = [
  {
    name: "Shuttle Delivery",
    description:
        "Working on the core system with Codeigniter, MySQL and Laravel Packages. Working on the delivery dispatch system with Node.js MongoDB.",
    tags: [
      {
        name: "codeigniter",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: shuttleWebsite,
  },
  {
    name: "IFIC Bank ERP",
    description:
      "Developed various ERP modules of one of the Bangladesh's top bank IFIC using Next.js, Nest.js and PostgreSQL.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: ificerp,
  },
  {
    name: "City Bank ERP",
    description:
      "Developed the expense management module of one of the Bangladesh's top bank City bank's core ERP solution using PHP Codeigniter and Oracle.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "codeigniter",
        color: "green-text-gradient",
      },
      {
        name: "oracle",
        color: "pink-text-gradient",
      },
    ],
    image: citybankerp,
  },
  {
    name: "Office ERP",
    description:
      "Worked on various modules of Apsis Solutions Limited's ERP System using Laravel and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: apsiserp,
  },
  {
    name: "NFTY Dash",
    description:
      "Developed NFT tracking dashboard for The wick Firm using Laravel and Web3.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: nftdash,
  },
  {
    name: "ANKH Marketlpace",
    description: "Developed NFT marketplace using Laravel and Web3.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: ankhmarketplace,
  },
  {
    name: "In A Funny Way",
    description:
      "In A Funny Way is a blog site with AI based image generation using Laravel and React.js with OpenAI.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
    ],
    image: inafunnyway,
  },
  {
    name: "My Planet Earth",
    description:
      "My Planet Earth portfolio and NFT sale using Laravel and Stripe from Figma design.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: myplanetearth,
  },
  {
    name: "Baladna",
    description:
      "Baladna is a Qatar based food company portfolio website built using Laravel and React.js with multi language feature.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: baladna,
  },
  {
    name: "Aamar Shop",
    description:
      "Built the Frontend, Admin Panel and API of Amar Shop e-commerce website using Laravel and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: aamarshop,
  },
  {
    name: "National Housing BD",
    description:
      "Portfolio website of financial company National Housing BD using Laravel and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: nationalhousing,
  },
  {
    name: "Al Madina Car",
    description: "Car rental service of Al Madina Car using Laravel and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: almadinacar,
  },
  {
    name: "MM Clothing",
    description:
      "Portfolio website of MM Clothing garments company using Laravel and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: mmclothing,
  },

  {
    name: "Olive Branch",
    description:
      "Olive Branch real state company portfolio using React.js from Figma design.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: olivebranch,
  },
  {
    name: "SMC Portfolio",
    description:
      "SMC advertising company's portfolio using Laravel and MySQL from Figma design.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: smcportfolio,
  },
  {
    name: "Cookie - reward converter Web And Admin",
    description:
      "Frontend, Dashboard and API for cookie - reward converter using Laravel, and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: cookieweb,
  },
  {
    name: "Whymom",
    description: "Q&A forum for mother of babies using Raw PHP and MySQL.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: whymom,
  },
  {
    name: "Cookie - reward converter",
    description:
      "This is a Mobile app made with Flutter and admin panel made with Laravel for converting google play balance into real cash.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "in-app-purchase",
        color: "pink-text-gradient",
      },
    ],
    image: cookieapp,
  },
  {
    name: "Office HRM Employee",
    description:
      "HRM mobile app employee module is for Apsis Solutions Limited's office employee using Flutter, Laravel",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: apsishrm,
  },
];

export { services, technologies, experiences, testimonials, projects };
