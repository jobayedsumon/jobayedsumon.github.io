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
  abirvabnews,
  almadinacar,
  apsiserp,
  apsishrm,
  baladna,
  citybankerp,
  cookieapp,
  cookieweb,
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
    title: "Web Developer",
    company_name: "Virtual Market Solution Limited",
    icon: vmsl,
    iconBg: "#383E56",
    date: "June 2020 - December 2020",
    points: [
      "Built websites with Laravel, jQuery and MySQL.",
      "Built web apps and POS systems for businesses.",
      "Developed APIs for mobile apps.",
      "Updated and maintained existing websites.",
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
    name: "IFIC Bank ERP",
    description:
      "Developed various ERP modules of one of the Bangladesh's top bank IFIC using Next.js.",
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
      "Developed the expense management module of one of the Bangladesh's top bank City bank's core ERP solution using PHP Codeigniter and MySQL.",
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
      "Developed NFT tracking dashboard from The wick Firm using Laravel and Web3.",
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
    name: "Baladna",
    description:
      "Baladna is a Qatar based food company portfolio website built using Laravel and React.js.",
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
      "Built the frontend, admin panel and API of Amar Shop e-commerce website using Laravel and MySQL.",
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
    name: "Cookie - reward converter Web",
    description:
      "Frontend dashboard and API for cookie - reward converter using Laravel, and MySQL.",
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
    name: "Abirvab News 24",
    description: "Online news portal using Raw PHP and MySQL.",
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
    image: abirvabnews,
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
        name: "googleplay",
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
