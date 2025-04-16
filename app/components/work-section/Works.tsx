import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Fusion Chess",
      gitLink: "https://github.com/SahilAroraYT/Fusion-Chess",
      liveLink: "https://fusionchess.netlify.app/",
      about:
        "Fusion Chess is a modern web application built to simplify chess learning and streamline class bookings. Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), the platform delivers a clean, responsive UI powered by Tailwind CSS and DaisyUI. Instead of traditional user authentication, Calendly is integrated to handle class scheduling, allowing users to book sessions effortlessly without creating an account. The backend features RESTful APIs and MongoDB Atlas for structured data management. Fusion Chess reimagines online chess education by combining a seamless UI with smart scheduling and interactive content. ",
      stack: ["React", "TailwindCSS", "DaisyUI", "Calendly"],
      img: "/fusionchess.png",
    },
    {
      title: "To-do List",
      gitLink: "https://github.com/SahilAroraYT/ToDo-List-app-React-",
      liveLink: "https://todo-try-react.vercel.app/",
      about:
        "A React-based Todo List Application designed for efficient task management with a simple and user-friendly interface. It allows users to add, search, and delete tasks, with data persistence using LocalStorage. The app features a responsive design, unique task IDs via UUID, and UI enhancements using TailwindCSS and React Icons. ",
      stack: ["React", "TailwindCSS", "UUID", "React icons"],
      img: "/to-do.png",
    },
    
    {
      title: "BMX Impossible",
      gitLink: "https://sahilarorayt.itch.io/bmx-impossible",
      liveLink: "https://sahilarorayt.itch.io/bmx-impossible",
      about:
        "A simple single player game made with unity, player have to go across the map avoiding collisions with the obstacles. Player wins the game after crossing the finishing line",
      stack: ["Unity Game Engine", "C#"],
      img: "/bmx-impossible.png",
    },
    {
      title: "Currency Converter",
      gitLink: "https://github.com/SahilAroraYT/Currency-converter",
      liveLink: "https://sahilarorayt.github.io/Currency-converter/",
      about:
        "This project is a JavaScript-based currency converter that fetches exchange rates using APIs. It dynamically updates currency values and flags based on user selection, ensuring an interactive and user-friendly experience. The project showcases API integration, real-time data processing, and frontend interactivity, enhancing practical web development skills",
      stack: ["HTML", "CSS", "JavaScript"],
      img: "/currency-converter.png",
    },
    {
      title: "Stone, Paper, Scissors",
      gitLink: "https://github.com/SahilAroraYT/Stone-Paper-Scissors-Game",
      liveLink: "https://sahilarorayt.github.io/Stone-Paper-Scissors-Game/",
      about:
        "Stone, Paper, Scissors game with user-friendly and fully responsive interface. It's a single player game that the player can play against the computer. The scores are displayed on the screen each time user picks its choice against the computer",
      stack: ["HTML", "CSS", "JavaScript"],
      img: "/stone-paper-scissors.png",
    },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    {
      title: "Tic Tac Toe Game",
      gitLink: "https://github.com/SahilAroraYT/Tic-Tac-Toe-Game",
      liveLink: "https://tictactoe-original.netlify.app/",
      about:
        "It is a simple Tic Tac Toe game with user-friendly interface which asks for Players' name and is played on a single device after the game displays the result",
      stack: ["HTML", "CSS", "JavaScript",],
      img: "/tic-tac-toe.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}
        {/* Timeline below to be added when I have some experience */}
      {/* <Timeline /> */}
    </section>
  );
}
