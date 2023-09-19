//Home

/* For changing the profile image icon, go to header.scss */
const HOME = {
  headlines: ["Web Developer", "Backend Developer", "Frontend Developer"],
  description:
    "I’m a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.",
};

//About
const ABOUT = [
  {
    description:
      "I am a backend developer specializing in Node.js and Express, building robust and scalable server-side solutions for modern web applications.",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-100ef.appspot.com/o/About%2Fbackend.png?alt=media&token=2c8ff9fb-7918-42df-b79a-d40f346ee8b7",
    title: "Backend Developer",
  },
  {
    description:
      "I am a frontend developer proficient in HTML5, CSS3, JavaScript, and React, crafting responsive, accessible, and optimized web experiences.",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-100ef.appspot.com/o/About%2Ffrontend.png?alt=media&token=a987c6da-da2d-4047-8e5d-17bf7f9c9af6",
    title: "Frontend Developer",
  },
  {
    description:
      "I'm a full-stack developer, combining frontend and backend expertise to deliver holistic web solutions with a focus on user experience and performance.",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-100ef.appspot.com/o/About%2Ffull-stack.png?alt=media&token=f1b6de34-b7fa-456e-8183-b39762fac7e4",
    title: "Fullstack Developer",
  },
  {
    description:
      "I am a MERN stack developer, well-versed in MongoDB, Express.js, React, and Node.js, with a passion for creating dynamic and scalable web applications.",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-100ef.appspot.com/o/About%2Fmern.png?alt=media&token=0a66251f-0c24-49c8-93cd-833f0cd61948",
    title: "MERN Stack Developer",
  },
];

//Projects
const PROJECTS_CATEGORY = ["All", "Web App", "React JS", "UI/UX", "Others"];
const PROJECTS = [
  {
    codeLink: "https://github.com/aman4uas/yt-playlist-length-calculator",
    projectLink: "https://yt-playlist-length-calculator.netlify.app/",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/YouTube_play_button_square_%282013-2017%29.svg/512px-YouTube_play_button_square_%282013-2017%29.svg.png",
    name: "YT Tool - Youtube Playlist Length Calculator",
    title: "YT Tool - Youtube Playlist Length Calculator",
    tags: ["React JS", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/yt-tool-chrome-extension",
    projectLink:
      "https://github.com/aman4uas/yt-tool-chrome-extension#screenshots",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-100ef.appspot.com/o/Project%2Fchrome-ext.png?alt=media&token=cba9475b-3d65-4f2b-a3c0-4ec82d022cf5",
    name: "YT Tool - Chrome Extension",
    title: "YT Tool - Chrome Extension",
    tags: ["Others", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/Simon-Game",
    projectLink: "https://aman4uas.github.io/Simon-Game/",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-100ef.appspot.com/o/Project%2Fsimon-game.png?alt=media&token=96b6de57-42ec-492d-b007-6649202a60c6",
    name: "Simon Game",
    title: "Simon Game",
    tags: ["Others", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/Todo-List",
    projectLink: "todolist-g9wn.onrender.com/",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-100ef.appspot.com/o/Project%2Ftodo.jpg?alt=media&token=f35b5913-c913-4170-9cf9-986b34087fb5",
    name: "Todo List",
    title: "Todo List",
    tags: ["Web App", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/Adventure-Parallax-Effect",
    projectLink: "https://aman4uas.github.io/Adventure-Parallax-Effect",
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-100ef.appspot.com/o/Project%2Fdesert.jpg?alt=media&token=3d2915f3-972c-4f47-86f0-785b4c1984c9",
    name: "Parallax Thrills: Journeying through the Exotic",
    title: "Parallax Thrills: Journeying through the Exotic",
    tags: ["UI/UX", "All"],
  },
  {
    codeLink: "https://github.com/aman4uas/yt-playlist-length-calculator",
    projectLink: "https://yt-playlist-length-calculator.netlify.app/",
    imgUrl:
      "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp",
    name: "YT Tool - Youtube Playlist Length Calculator",
    title: "YT Tool - Youtube Playlist Length Calculator",
    tags: ["UI/UX", "React JS", "All"],
  },
];

//Skills, Achievement, Experiences
const SKILLS = {
  skills: [
    {
      icon: "react.png",
      name: "React JS",
      bgColor: "#e4e4e4",
    },
  ],
  experiences: [
    {
      year: "2021",
      works: [
        {
          id: "1",
          name: "Backend Developer",
          company: "Meta2",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: "2",
          name: "Backend Developer",
          company: "Meta",
          desc: "YES BABY",
        },
      ],
    },
  ],
};

//Testimonials
const TESTIMONIAL = {
  comment_data: [
    {
      imgurl:
        "https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=",
      name: "Scarlett Johansson",
      feedback:
        "Lorem weijriweojroiw ejerke fjjf Excepturi eum ipsa libero illum molestias? Molestiae, autem quasi expedita maxime vitae eligendi voluptate quo blanditiis tempora perspiciatis similique deserunt sit voluptates.",
      company: "Google",
    },
    {
      imgurl:
        "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-250nw-1714666150.jpg",
      name: "John Doe",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum ipsa libero illum molestias? Molestiae, autem quasi expedita maxime vitae eligendi voluptate quo blanditiis tempora perspiciatis similique deserunt sit voluptates.",
      company: "Meta",
    },

    {
      imgurl:
        "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
      name: "Donald",
      feedback:
        "I highly recommend my B.Tech CSE college mate as a MERN stack developer. Their contributions to various projects showcase exceptional skills and dedication. They'd be a valuable asset to any team.",
      company: "Amazon Inc.",
    },
  ],
  brand_data: [
    // {
    //   imgUrl: "iemLabs.png",
    //   name : "IEM Labs",
    // },
    {
      imgUrl: "iem-logo-bg.png",
      name: "UEM",
    },
    // {
    //   imgUrl: "future-gurukuls.png",
    //   name: "Future Gurukuls",
    // }
  ],
};

//Contact
const MAIL = "amanhacks4u@gmail.com";
const MOBILE = "6202929956";
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
