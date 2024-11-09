import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a full-stack developer focused on building scalable, efficient web applications. As a second-year Computer Engineering student at PICT Pune, I have strong skills in React.js and am advancing in Express.js and Django for backend development. With knowledge in MongoDB and PostgreSQL and a solid foundation in Data Structures and Algorithms in C++, I aim to create impactful, user-centered solutions.`;

export const ABOUT_TEXT = `I’m a second-year Computer Engineering student at PICT Pune with a strong interest in backend development, particularly in Express.js and Django. On the frontend, I have solid skills in React.js for creating dynamic and responsive user interfaces. I am also expanding my knowledge in MongoDB and PostgreSQL to build robust, scalable databases for full-stack applications.

In addition to my web development skills, I have a good foundation in Data Structures and Algorithms (DSA) using C++, which I’m actively honing. Recently, I have started exploring competitive programming to strengthen my problem-solving skills. With this mix of technical skills and a focus on efficient, scalable solutions, I’m excited to contribute to projects that tackle real-world challenges.`;

export const PROJECTS = [
  {
    title: "NarcoTrace",
    image: project1,
    description:
      " A targeted solution developed to detect drug trafficking activity on Telegram. Narcotrace identifies active channels and bots promoting illegal substances, triangulating critical data like IP addresses, mobile numbers, and emails of those involved. This tool supports law enforcement in combating digital drug trafficking on encrypted platforms.",
    technologies: ["HTML", "CSS", "React", "Django", "Postgres"],
  },
  {
    title: "TraceHost",
    image: project2,
    description:
      "A solution designed to uncover accurate hosting details for suspicious websites often obscured by services like Cloudflare. By bypassing superficial service data, WebTrace identifies actual hosting providers and origins, enabling law enforcement and cybersecurity teams to access crucial information about suspicious sites, regardless of front-end services in place.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Motion-frame"],
  },
];

export const CONTACT = {
  address: "Dhankawadi, Pune ",
  phoneNo: "+91  8329 27 8975 ",
  email: "atharva2005dhavale@gmail.com",
};
