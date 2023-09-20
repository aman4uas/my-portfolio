//Home

const HOME = {
  headlines: [
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
    "Fullstack Developer",
  ],
  description:
    "I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.",
  //img_url:  "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000",
  img_url:
    "https://media.licdn.com/dms/image/C4D03AQFogcoCyeshew/profile-displayphoto-shrink_800_800/0/1640779921214?e=1700697600&v=beta&t=3kELN-S5MuHORneSEEW_CRVarVAWBkI1Y5UufqyCxEo",
};

//About
const ABOUT = [
  {
    description:
      "I am a backend developer specializing in Node.js and Express, building robust and scalable server-side solutions for modern web applications.",
    imgUrl: "assets/about/backend.png",
    title: "Backend Developer",
  },
  {
    description:
      "I am a frontend developer proficient in HTML5, CSS3, JavaScript, and React, crafting responsive, accessible, and optimized web experiences.",
    imgUrl: "assets/about/frontend.png",
    title: "Frontend Developer",
  },
  {
    description:
      "I'm a full-stack developer, combining frontend and backend expertise to deliver holistic web solutions with a focus on user experience and performance.",
    imgUrl: "assets/about/full-stack.png",

    title: "Fullstack Developer",
  },
  {
    description:
      "I am a MERN stack developer, well-versed in MongoDB, Express.js, React, and Node.js, with a passion for creating dynamic and scalable web applications.",
    imgUrl: "assets/about/mern.png",
    title: "MERN Stack Developer",
  },
];

//Projects
const PROJECTS_CATEGORY = ["All", "Web App", "React JS", "UI/UX", "Others"];
const PROJECTS = [
  {
    codeLink: "https://github.com/aman4uas/yt-playlist-length-calculator",
    projectLink: "https://yt-playlist-length-calculator.netlify.app/",
    imgUrl: "assets/project/youtube.png",
    name: "YT Tool - Youtube Playlist Length Calculator",
    title: "YT Tool - Youtube Playlist Length Calculator",
    tags: ["React JS", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/yt-tool-chrome-extension",
    projectLink:
      "https://github.com/aman4uas/yt-tool-chrome-extension#screenshots",
    imgUrl: "assets/project/chrome-ext.png",
    name: "YT Tool - Chrome Extension",
    title: "YT Tool - Chrome Extension",
    tags: ["Others", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/video-chat-app",
    projectLink: "https://github.com/aman4uas/video-chat-app",
    imgUrl: "assets/project/video-chat.jpg",
    name: "Video Chat App",
    title: "Video Chat App",
    tags: ["Web App", "React JS", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/my-portfolio",
    projectLink: "https://portfolio-aman-singh.netlify.app/",
    imgUrl: "assets/project/portfolio.webp",
    name: "My Portfolio",
    title: "My Portfolio",
    tags: ["React JS", "UI/UX", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/Simon-Game",
    projectLink: "https://aman4uas.github.io/Simon-Game/",
    imgUrl: "assets/project/simon-game.png",
    name: "Simon Game",
    title: "Simon Game",
    tags: ["Others", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/Todo-List",
    projectLink: "todolist-g9wn.onrender.com/",
    imgUrl: "assets/project/todo.jpg",
    name: "Todo List",
    title: "Todo List",
    tags: ["Web App", "All"],
  },

  {
    codeLink: "https://github.com/aman4uas/Adventure-Parallax-Effect",
    projectLink: "https://aman4uas.github.io/Adventure-Parallax-Effect",
    imgUrl: "assets/project/desert.jpg",
    name: "Parallax Thrills: Journeying through the Exotic",
    title: "Parallax Thrills: Journeying through the Exotic",
    tags: ["UI/UX", "All"],
  },
];

//Skills, Achievement, Experiences
const SKILLS = {
  skills: [
    {
      icon: "assets/skills/react.png", //Image src
      name: "React",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Express.png",
      name: "Express",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Javascript.svg",
      name: "JavaScript",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/NodeJs.svg",
      name: "Node",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Git.svg",
      name: "Git",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Github.svg",
      name: "Github",
      bgColor: "#f3f6f4",
    },

    {
      icon: "assets/skills/HTML.png",
      name: "HTML",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/CSS.png",
      name: "CSS",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Tailwind.png",
      name: "Tailwind",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Bootstrap.svg",
      name: "Bootstrap",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Redux.svg",
      name: "Redux",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/MongoDB.svg",
      name: "MongoDB",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Saas.svg",
      name: "Sass",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/Typescript.svg",
      name: "TypeScript",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/python.png",
      name: "Python",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/java-icon.svg",
      name: "Java",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/api_1.png",
      name: "API",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/figma.png",
      name: "Figma",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/cpp.png",
      name: "C++",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/linux-icon.svg",
      name: "Linux",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/vs-code.svg",
      name: "VS Code",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/postman.svg",
      name: "Postman",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/mysql-icon.svg",
      name: "My SQL",
      bgColor: "#f3f6f4",
    },
    {
      icon: "assets/skills/google_cloud.svg",
      name: "Google Cloud",
      bgColor: "#f3f6f4",
    },
  ],
  experiences: [
    {
      year: "2023",
      works: [
        {
          id: "B.Tech",
          name: "B.Tech - Computer Science and Engineering (Artificial Intelligence)",
          company: "Institute of Engineering and Management [2021 - 2025]",
          desc: "CGPA - 9.3 (till 2nd Year)",
        },
        {
          id: "Java-NPTEL",
          name: "Programming in Java",
          company: "NPTEL - IIT Kharagpur [Jan-Apr 2023]",
          desc: "Among Top 2% (Scored: 85%) -  Earned Elite Certificate",
        },
        {
          id: "IEM-UEM Marathon",
          name: "IEM-UEM Kolkata Marathon",
          company: "IEM-UEM Kolkata [Jan 2023]",
          desc: "Proud volunteer at the IEM-UEM Kolkata Marathon, supporting runners and promoting a healthy community.",
        },
      ],
    },
    {
      year: "2022",
      works: [
        {
          id: "Python-NPTEL",
          name: "The Joy of Computing using Python",
          company: "NPTEL - IIT Madras [Jul-Oct 2022]",
          desc: "Scored: 88% - Earned Elite Certificate",
        },
        {
          id: "C-NPTEL",
          name: "Introduction to Programming in C",
          company: "NPTEL - IIT Kanpur [Feb-Apr 2022]",
          desc: "Among Top 5% (Scored: 97.2%) -  Earned Elite + Gold Certificate",
        },
      ],
    },

    {
      year: "2020",
      works: [
        {
          id: "12th",
          name: "Intermediate",
          company: "Millia Convent English School Rambagh Purnea [2018 - 2020]",
          desc: "Scored 75%",
        },
      ],
    },
    {
      year: "2018",
      works: [
        {
          id: "10th",
          name: "Matriculation",
          company: "Millia Convent English School Rambagh Purnea [2017-2018]",
          desc: "Scored 88.6%",
        },
      ],
    },
  ],
};

//Testimonials
const TESTIMONIAL = {
  comment_data: [
    {
      imgurl: "assets/testimonials/shivanshu-img.png",
      name: "Shivanshu Mishra",
      feedback:
        "Aman was exceptional in our MERN stack project: brilliant technical skills, problem-solving, and an invaluable team player. Outstanding performance!",
      company: "IEM, Kolkata",
    },
    {
      imgurl: "assets/testimonials/mudit-img.jpg",
      name: "Mudit Anand",
      feedback:
        "Aman is very good at his skills. Creative problem-solver and a valuable team member. Highly recommended!",
      company: "IEM, Kolkata",
    },
  ],
  brand_data: [
    {
      imgUrl: "assets/testimonials/iem-logo-bg.png",
      name: "IEM",
    },
  ],
};

//Contact
const MAIL = "amanhacks4u@gmail.com";
const MOBILE = "62029XXXXX";
const GITHUB_LINK = "https://github.com/aman4uas";
const TWITTER_LINK = "https://twitter.com/Aman4uAs";
const LINKEDIN_LINK = "https://www.linkedin.com/in/aman-singh-436925226";

const exported_data = {
  MAIL,
  MOBILE,
  GITHUB_LINK,
  TWITTER_LINK,
  LINKEDIN_LINK,
  TESTIMONIAL,
  SKILLS,
  PROJECTS,
  ABOUT,
  HOME,
  PROJECTS_CATEGORY,
};
export default exported_data;
