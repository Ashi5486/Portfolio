// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';


import bootstrapLogo from './assets/tech_logo/bootstrap.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';

import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import synLogo from './assets/company_logo/SYN_LOGO.jpg';
import qwLogo from './assets/company_logo/QW_LOGOo.png'
import kiLogo from './assets/company_logo/knLogo.jpg';

// Education Section Logo's
import clglogo from "./assets/education_logo/clg_logo.png";
import scllogo from "./assets/education_logo/School_logo.png";

// Project Section Logo's
import healthlogo from './assets/work_logo/healthLogo.jpg';
import YogoLogo from './assets/work_logo/YogoLogo.png';
import snaplogo from './assets/work_logo/img1.png';
import adminLogo from './assets/work_logo/AdminLogo.JPG';
import TodoLogo from './assets/work_logo/TodoLogo.JPG';
import webverLogo from './assets/work_logo/VoiceAssitantlogo.png';
import loginLogo from "./assets/work_logo/loginLogo.jpg";
import trendLogo from "./assets/work_logo/TrendLogo.JPG"
import portLogo from "./assets/work_logo/PortLogo.png"
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo, percentage: 80 },
      { name: 'CSS', logo: cssLogo, percentage: 75 },
      { name: 'JavaScript', logo: javascriptLogo, percentage: 60 },
      { name: 'React JS', logo: reactjsLogo, percentage: 60 },
      { name: 'Redux', logo: reduxLogo, percentage: 40 },
      { name: 'Tailwind CSS', logo: tailwindcssLogo, percentage: 55 },
      { name: 'Bootstrap', logo: bootstrapLogo, percentage: 70 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo, percentage: 60 },
      { name: 'Express JS', logo: expressjsLogo, percentage: 72 },
      { name: 'MySQL', logo: mysqlLogo, percentage: 45 },
      { name: 'MongoDB', logo: mongodbLogo, percentage: 65 },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo, percentage: 70 },
      { name: 'C++', logo: cppLogo, percentage: 75 },
      { name: 'Python', logo: pythonLogo, percentage:  50},
      { name: 'JavaScript', logo: javascriptLogo, percentage: 65 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo},
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo},
      { name: 'Postman', logo: postmanLogo},
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: synLogo,
      role: "Mern Stack Developer",
      company: "Synetal solutions pvt. ltd",
      date: "March 2025 - May 2025",
      desc: "During my internship, I worked on a Garments Production Tracking project, where I gained hands-on experience with the MERN stack (MongoDB, Express.js, React.js, and Node.js). My responsibilities included designing and developing dynamic web applications, implementing and integrating RESTful APIs, connecting the frontend with backend services to ensure a seamless user experience, and troubleshooting technical issues throughout the development process.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Express",
        "Redux",
      ],
    },
    {
      id: 1,
      img: qwLogo,
      role: "React Developer",
      company: "Quality Webs",
      date: "July 2024 - October 2024",
      desc: "Collaborated with senior developers to design, develop, and maintain responsive websites and webapplications using HTML5, CSS3, and JavaScript.Assisted in the implementation of user interfaces with React.js ensuring cross-browser compatibility and mobile responsiveness.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: kiLogo,
      role: "Web Developer Intern",
      company: "Kiaan Technology Pvt.Ltd",
      date: "July 2023 - September 2023",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  export const education = [
  {
    id: 0,
    img: clglogo,
    school: "Sushila Devi Bansal College of Engineering, Indore",
    date: "Sept 2020 – June 2024",
    grade: "7.78CGPA",
    desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Sushila Devi Bansal College of Engineering, affiliated with RGPV University, Bhopal. During my academic journey, I developed a strong foundation in programming, software development, and core computer science principles. My coursework included Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.  My time at the college played a vital role in shaping my technical abilities and preparing me for a career in the IT industry.",
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  },
  {
    id: 1,
    img: scllogo,
    school: "Govt. School of Excellence, Bal Vinay Mandir, Park Road, Indore",
    date: "April 2019 – May 2020",
    grade: "60.00%",
    desc: "I completed my Class 12 education from Govt. School of Excellence, Bal Vinay Mandir, under the MP Board, with a focus on Physics, Chemistry, and Mathematics (PCM). This academic phase helped me develop a strong analytical and problem-solving mindset, laying a solid foundation for my interest in engineering and technology.",
    degree: "MP Board (Class XII) – PCM",
  },
  {
    id: 2,
    img: scllogo,
    school: "Govt. School of Excellence, Bal Vinay Mandir, Park Road, Indore",
    date: "June 2017 – May 2018",
    grade: "68.40%",
    desc: "I completed my Class 10 education from Govt. School of Excellence, Bal Vinay Mandir, under the MP Board in 2017. During this time, I built a strong academic foundation, developed discipline, and actively participated in school-level activities, which contributed to my overall growth and learning experience.",
    degree: "MP Board (Class X)",
  },
];
  export const projects = [
    {
      id: 0,
      title: "Smart Healthcare",
      description:
        "Developed a Smart Healthcare System that revolutionized the way patients access medical services and acquire necessary medications during emergencies.The system enabled users to book doctor appointments remotely, it facilitated the efficient purchase of required medicines, ensuring timely delivery to patients in critical situation.",
      image:healthlogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Php","Sql"],
      github: "https://github.com/Ashi5486/MINOR",
      // webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Yoga Training Website",
      description:
        "A full-stack fitness platform where users can explore workout plans, track progress, and connect with professional trainers. Features include secure login, personalized training schedules, video tutorials, blog tips, and payment-integrated membership plans. Built using HTML, CSS, JavaScript, and jQuery with a responsive UI and an admin dashboard for managing users and content.",
      image: YogoLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript","Php","Sql","Jquery"],
      github: "https://github.com/Ashi5486/Project-Yoga",
      // webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "SnapGram",
      description:
        "Developed Snapgram,a social media platform designed to facilitate sharing and interaction among users through posts,stories, and direct messaging.with features Like User authentication , Dynamic Feeds , infinite scrol Secure sign-up and login Appwrite backend.",
      image: snaplogo,
      tags: ["React", "Tailwind CSS", "JavaScript","php","Shadcn","Appwrite"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      // webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Trends Apparel (Garments Production)",
      description:
       "The project included developing an admin panel that allowed supervisors to assign tasks to workers and track the garment production process, including stitching procedures for pants and shirts based on parameters like color and size. I implemented full CRUD operations to manage production data and workflows efficiently.",
      image: trendLogo,
      tags: ["React JS", "API","Tailwind CSS", "Javascript","Node","Mongodb","Express"],
      github: "https://github.com/Ashi5486/Trends-Apparel",
      // webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 4,
      title: "Admin Dashboard",
      description:
       "A powerful and customizable admin dashboard built with React.js and Node.js. Designed for efficient management and real-time monitoring, it offers intuitive UI components, role-based access control, and seamless integration with backend systems",
      image: adminLogo,
      tags: ["React JS","TailwindCSS","Bootstrap"],
      github: "https://github.com/Ashi5486/Admin-Dashboard",
      // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 5,
      title: "React TO-DO List",
      description:
        "A productivity-boosting To-Do List web app built with React.js. Designed to help users efficiently manage and remember their daily tasks, it features a clean and intuitive interface, real-time task updates, reminders, and smart notifications to keep users organized and on track.",
      image: TodoLogo,
      tags: ["React","JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/Ashi5486/React-Todo-List",
      // webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 6,
      title: "Voice Assistant",
      description:
        "An intelligent voice assistant web application built with React.js. Designed to deliver hands-free interaction, it features real-time voice recognition, smart command processing, and a sleek, responsive UI—offering users a seamless and interactive experience",
      image: webverLogo,
      tags: ["React", "TailwindCSS", "JavaScript", "Framer Motion","Redux"],
      github: "https://github.com/Ashi5486/Voice-Assistant",
      // webapp: "https://webversedigital.com/",
    },
    {
      id: 7,
      title: "Login Signup Authentication ",
      description:
        "A standalone full-stack authentication system with secure login and signup features. It includes password encryption, session management, and user role support—built for seamless integration into any web platform requiring reliable user authentication.",
      image: loginLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "jwt"],
      github: "https://codingmasterweb.in/",
      // webapp: "https://codingmasterweb.in/",
    },
    
    {
      id: 8,
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, and experience. Built with React.js, it features a modern design, smooth animations, and responsive layout.",
      image: portLogo,
      tags: ["React JS", "API", "Framer-motion", "HTML", "CSS", "Javascript", "MongoDB", "Nodejs"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  