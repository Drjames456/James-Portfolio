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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  myApp,
  spaceman,
  hoobankSite,
  hoobankApp,
  foodyGo,
  gameInvasion,
  newsimg,
  miracle,
  mrAadeosun,
  cinematrixImg,
  ona,
  atta,
  Coffee,
  fruitWebImg,
  clearLinkImg,
  appleImg,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  typescriptIcon,
  tailwindcssIcon,
  nodejsIcon,
  saasIcon,
  gitIcon,
  mongodbIcon,
  reactIcon,
  figmaIcon,
  reactnativeIcon,
} from '../assets';

export const mobileNavLinks = [
  {
    id: '#home',
    title: 'Home',
  },

  {
    id: '#about',
    title: 'About',
  },
  {
    id: '#testimonial',
    title: 'Testimonial',
  },

  {
    id: '#evidence',
    title: 'Evidence',
  },
  {
    id: '#faqs',
    title: 'FAQs',
  },

  {
    id: '#contact',
    title: 'Contact',
  },
];

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Mobile App Developer',
    icon: mobile,
  },
  {
    title: 'UI/UX Designer',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: htmlIcon,
    accuracy: 100,
  },
  {
    name: 'CSS 3',
    icon: cssIcon,
    accuracy: 100,
  },
  {
    name: 'JavaScript',
    icon: javascriptIcon,
    accuracy: 100,
  },
  {
    name: 'TypeScript',
    icon: typescriptIcon,
    accuracy: 100,
  },
  {
    name: 'React JS',
    icon: reactIcon,
    accuracy: 100,
  },
  {
    name: 'Redux',
    icon: redux,
    accuracy: 100,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindcssIcon,
    accuracy: 100,
  },
  {
    name: 'React Native',
    icon: reactnativeIcon,
    accuracy: 100,
  },

  {
    name: 'MongoDB',
    icon: mongodbIcon,
    accuracy: 100,
  },
  {
    name: 'Node JS',
    icon: nodejsIcon,
    accuracy: 100,
  },
  {
    name: 'Git',
    icon: gitIcon,
    accuracy: 100,
  },
  {
    name: 'Figma',
    icon: figmaIcon,
    accuracy: 100,
  },
];

const experiences = [
  {
    title: 'Junior Frontend Developer',
    company_name: 'Pin-Tech Automation',
    icon: meta,
    iconBg: '#383E56',
    date: 'April 2022 - present',
    points: [
      'Design and Develop Web applications using technologies such as Nodejs, Python, HTML, CSS and Javascript',
      'Implemented database solutions with mySQL and managed data modelling, migration, and optimization.',
      'Collaborated in the development of a customer-facing e-commerce platform, resulting in a 30% increase in sales.',
      'Maintained code quality and standards through code reviews.',
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      'James has a dedication towards coding that fascinates me which of course makes him a suitable employee; He has a zeal for tackling coding challenges and his highly motivated to work. ',
    name: 'Mr. Monday Adeosun',
    designation: 'CEO',
    company: 'of A & M Computer project Services',
    image: mrAadeosun,
  },
  {
    id: 2,
    testimonial:
      "Been a Developer myself, I understand the effort it takes to improve in the tech space. James puts in the effort and more. I feel opportune to work with him and watch him grow. Can't say much..He's the right man for the Job! ",
    name: 'Miracle Abiola',
    designation: '',
    company: 'Software Engineer',
    image: miracle,
  },
  {
    id: 4,
    testimonial:
      "James's journey as a Frontend Developer has been inspiring since he started his coding journey a year ago(2021). His rapid progress is a testament to his passion and hard work, making him a promising talent in the Frontend Development field.",
    name: 'Stephen Gift ',
    designation: 'Colleague',
    company: '',
    image: ona,
  },
  {
    id: 3,
    testimonial:
      "He's an exceptional developer who I've been opportune to work with on the same project.He's a dedicated and has the ability to adapt to any situation he finds himself.",
    name: 'Ohiemi Divine Attah',
    designation: 'Colleague',
    company: '',
    image: atta,
  },
];

const projects = [
  {
    id: 4979374,
    name: 'Apple Clone',
    description: "I developed a website resembling Apple's iPhone 15 Pro Page",
    tags: [
      {
        name: 'React',
        color: 'green-text-gradient',
      },
      {
        name: 'Three.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'GSAP',
        color: 'pink-text-gradient',
      },
      {
        name: 'Sentry',
        color: 'green-text-gradient',
      },
    ],
    image: appleImg,
    source_code_link: 'https://raytech-apple-clone.vercel.app/',
  },
  {
    id: 893024,
    name: 'ClearLink',
    description: 'Talentsync Frontend Development Challenge',
    tags: [
      {
        name: 'Tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
    ],
    image: clearLinkImg,
    source_code_link: 'https://clear-link-eight.vercel.app/',
  },
  {
    id: 46,
    name: 'Cinematrix',
    description: 'Movie website for Checking Latest, Trending Movies',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'RESTful API',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: cinematrixImg,
    source_code_link: 'https://cinematrix-liard.vercel.app',
  },
  {
    id: 497374,
    name: 'Fruitful Treats',
    description: 'Fruit Website',
    tags: [
      {
        name: 'Redux',
        color: 'green-text-gradient',
      },
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: fruitWebImg,
    source_code_link: 'https://fruitful-treats.vercel.app',
  },
  {
    id: 4973,
    name: 'Coffee Oasis',
    description: 'Coffee Mobile App',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: Coffee,
    source_code_link: 'https://coffee-oasis.vercel.app',
  },
  {
    id: 11,
    name: 'RayNews',
    description: 'A News website landing page',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: newsimg,
    source_code_link: 'https://ray-news.vercel.app',
  },
  {
    id: 1,
    name: 'Game Invasion',
    description: 'Download amazing Games, Game Blog, Game Updates e.t.c',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: gameInvasion,
    source_code_link: 'https://game-invasion.vercel.app',
  },
  {
    id: 2,
    name: 'GPT 3',
    description: 'landing page of a future project GPT 3',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://micheal-oluwafemi.github.io/rayTech-GPT3/',
  },
  {
    id: 6,
    name: 'Task Tracker',
    description: 'A TODO app',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'RESTapi',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://task-tracker-fawn-mu.vercel.app/',
  },
  {
    id: 3,
    name: 'Hoobank Website',
    description: 'Hoobank website',
    tags: [
      {
        name: 'React js',
        color: 'blue-text-gradient',
      },
      {
        name: 'RESTapi',
        color: 'green-text-gradient',
      },
      {
        name: 'Expressjs',
        color: 'pink-text-gradient',
      },
    ],
    image: hoobankSite,
    source_code_link: 'https://f1f119c8.hoobank-1ro.pages.dev/',
  },
  {
    id: 4,
    name: 'FoodyGo App',
    description: 'A Food app that receives order',
    tags: [
      {
        name: 'React Native',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'Expressjs',
        color: 'pink-text-gradient',
      },
    ],
    image: foodyGo,
    source_code_link: 'https://github.com/micheal-Oluwafemi',
  },
];

const faqsList = [
  {
    q: 'How long does a website take to build?',
    a: "The time it takes to build a website can vary significantly depending on various factors such as the complexity of the design, the functionality required, the size of the website, the availability of resources, and the experience of the development team. Simple websites with basic functionality can be built relatively quickly, often within a few days to a couple of weeks. However, more complex websites with advanced features such as e-commerce capabilities, user authentication, and custom animations may take several weeks or even months to develop. It's essential to discuss your project requirements with your development team to get a more accurate estimate of the timeline.",
  },
  {
    q: 'I have a design ready. Can you build it?',
    a: "Yes, if you have a design ready, we can certainly build it for you. We'll work closely with you to understand your design specifications, including layout, color scheme, typography, and any interactive elements you envision. Our development team will then translate your design into a fully functional website using industry-standard technologies and best practices. Throughout the development process, we'll keep you updated on progress and seek your feedback to ensure that the final product meets your expectations.",
  },
  {
    q: "What if I don't like the design?",
    a: "If you're not satisfied with the initial design, don't worry – we're here to make sure you get a website that you love. We'll start by discussing your specific concerns and preferences in detail to understand what aspects of the design you're unhappy with. Based on your feedback, our design team will make revisions and adjustments to address your concerns and better align the design with your vision. We believe in collaboration and open communication, so we encourage you to provide honest feedback throughout the design process. Our goal is to create a website that not only meets your functional requirements but also exceeds your expectations in terms of aesthetics and user experience.",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  faqsList,
};
