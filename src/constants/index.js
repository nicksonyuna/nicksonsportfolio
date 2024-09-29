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
  volunup,
  echo,
  yocholatos,
  netflix,
  aisad,
  isad,
  cangkir,
  library,
  godot,
  java,
  sql,
  vpp,
  gdrive,
  threejs,
  github
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java",
    icon: web,
  },
  {
    title: "SQL",
    icon: mobile,
  },
  {
    title: "HTML",
    icon: creator,
  },
  {
    title: "CSS",
    icon: creator,
  },
  {
    title: "JavaScript",
    icon: creator,
  },
  {
    title: "Figma",
    icon: web,
  },
  {
    title: "Visual Paradigm",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Visual Paradigm",
    icon: vpp,
  },
];

const experiences = [
  {
    title: "Introduction To Java Programming",
    company_name: "Java",
    icon: java,
    iconBg: "#383E56",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Java program structure",
      "ArrayList utilization",
      "User input handling",
      "Control flow basics",
      "Intro to OOP",
    ],
  },
  {
    title: "Database Systems",
    company_name: "SQL",
    icon: sql,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Data normalization",
      "Table creation",
      "Data querying",
      "Filtering and sorting",
      "Using SQL functions",
      "ERD creation",
    ],
  },
  {
    title: "User Interface and Experience",
    company_name: "Figma",
    icon: figma,
    iconBg: "#383E56",
    date: "Mar 2023 - Jun 2023",
    points: [
      "Reusable component design",
      "Key Figma tools usage",
      "Scrollable interfaces",
      "Dynamic animations",
    ],
  },
  {
    title: "Advanced Information System Analysis and Design",
    company_name: "Visual Paradigm",
    icon: vpp,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jun 2024",
    points: [
      "Activity and use case diagrams",
      "Sequence and class diagrams",
      "System architecture design",
    ],
  },
  {
    title: "Business Application Development",
    company_name: "Java, JavaFX, XAMPP",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Dec 2023",
    points: [
      "Inheritance and polymorphism",
      "Event-driven programming",
      "Java database integration",
    ],
  },
  {
    title: "Web Based Application Development",
    company_name: "HTML, CSS, JavaScript",
    icon: html,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Jun 2024",
    points: [
      "HTML structure and linking",
      "Responsive design",
      "jQuery basics and dynamic styling",
    ],
  },
];

// const certifications = [
//   {
//     title: "Certified Java Developer",
//     description: "Earned certification in Java development, covering OOP, data structures, and multi-threading.",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     title: "Web Development Mastery",
//     description: "Certified in full-stack web development, including HTML, CSS, JavaScript, and React.",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     title: "Advanced SQL Certification",
//     description: "Advanced understanding of SQL databases, including query optimization and data modeling.",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const certifications = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "GameOn",
    description:
      "Web-based platform that allows users to purchase gaming equipments and also allow to read various article around gaming environment.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/nicksonyuna/GameOn.git",
    icon: github
  },
  {
    name: "WheelHub",
    description:
      "A web-based platform that enables users to discover their dream car, explore detailed information about various vehicles, and purchase cars with numerous promotional offers.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/nicksonyuna/WheelHub.git",
    icon: github
  },
  {
    name: "GreenFarm",
    description:
      "A mobile app that enables users to conveniently order fresh fruits and vegetables while also providing real-time tracking of the courier's position for enhanced delivery transparency.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.figma.com/design/vDiJ5oWMCEm0AfUlKDLaSw/Prototype%3A-Green-Farm?node-id=0-1&t=YdTdVybBNnM8X8Qj-1",
    icon: figma
  },
  {
    name: "VolunUp",
    description:
      "A mobile-based application that allows users to apply for volunteer and also let users view available spots for volunteer and articles around volunteering environment.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: volunup,
    source_code_link: "https://www.figma.com/design/oOCYP6aV3SZZrR2tq85yp2/VOLUNUP?node-id=0-1&t=VVldenEcEqnAUJxb-1",
    icon: figma
  },
  {
    name: "Echo",
    description:
      "A mobile-based application that allows users to purchase gaming equipments and also allow to read various article around gaming.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: echo,
    source_code_link: "https://www.figma.com/design/opdvXnyaEMqXVIk1tx1MA0/11-TM8-BY11?node-id=0-1&t=iCSYqIY2w6pUUZKd-1",
    icon: figma
  },
  {
    name: "Database Design: YOcholatos",
    description:
      "A database to manage staff, chocolate products, customers, transactions, etc.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: yocholatos,
    source_code_link: "https://github.com/nicksonyuna/YOcholatos.git",
    icon: github
  },
  {
    name: "Database Design: Netflix",
    description:
      "A database schema for Netflix, including tables to manage genres, content, users, subscriptions, etc. It establishes relationships between these entities, allowing for the storage of diverse media types such as movies and series, genres, user profiles, payment methods, and subscription plans.",
    tags: [
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/nicksonyuna/NetflixDatabase.git",
    icon: github
  },
  {
    name: "Information System Mangkas",
    description:
      "Mangkas is a mobile app for men's haircut bookings and hair product purchases, with the project involving comprehensive system analysis and design documentation.",
    tags: [
      {
        name: "VisualParadigm",
        color: "blue-text-gradient",
      },
    ],
    image: aisad,
    source_code_link: "https://drive.google.com/file/d/1O9xKJ6D-DssK3q8ZyWhkoUeRfmPnlQXb/view?usp=sharing",
    icon: gdrive
  },
  {
    name: "Information System Serenade",
    description:
      "Serenade is a online shop that offers users the exciting opportunity to customize their musical instruments by selecting a variety of colors and adding personalized stickers, allowing them to express their style.",
    tags: [
      {
        name: "VisualParadigm",
        color: "blue-text-gradient",
      },
    ],
    image: isad,
    source_code_link: "https://drive.google.com/file/d/1os-dgNJBAFCcC6dWBjv6goJVbNIKfu-z/view?usp=sharing",
    icon: gdrive
  },
  {
    name: "cangkIR",
    description:
      "cangkIR is an online shop specializing in a diverse range of cups, accessible exclusively through its application. Users can browse, add cups to their cart, and complete purchases, while Admins manage the inventory by adding, updating, or deleting cup listings.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "blue-text-gradient",
      },
    ],
    image: cangkir,
    source_code_link: "https://github.com/nicksonyuna/cangkIR.git",
    icon: github
  },
  {
    name: "Libros",
    description:
      "Libros is system made to allow users to borrow books, view all books available and borrowed books, and return books",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/nicksonyuna/Libros.git",
    icon: github
  },
  {
    name: "Knight's Quest",
    description:
      "In Knight's Quest, players embark on an exciting adventure as a brave knight navigating through vibrant 2D landscapes. The knight must collect coins while avoiding treacherous slimes and mastering various moving platforms.",
    tags: [
      {
        name: "Godot",
        color: "blue-text-gradient",
      },
      {
        name: "GDScript",
        color: "blue-text-gradient",
      },
    ],
    image: godot,
    source_code_link: "https://github.com/nicksonyuna/KnightsQuest.git",
    icon: github
  },
];

export { services, technologies, experiences, projects };