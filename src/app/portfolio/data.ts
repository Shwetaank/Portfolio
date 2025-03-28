export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  githubLink: string;
  liveLink: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "CineStream",
    description:
      "An advanced streaming platform for movies and shows, offering secure authentication, personalized recommendations, and smooth playback for an immersive user experience.",
    image: "/CineStream.jpg",
    category: "next.js",
    githubLink: "https://github.com/Shwetaank/CineStream",
    liveLink: "https://cine-stream-xi.vercel.app/",
    tags: ["Next.js", "React.js", "Clerk Auth"],
  },
  {
    id: "2",
    title: "Movie Mania",
    description:
      "A polished movie booking platform featuring secure authentication, real-time booking capabilities, and a modern UI to enhance the movie-going experience.",
    image: "/MovieMania.jpg",
    category: "mern",
    githubLink: "https://github.com/Shwetaank/Movies-Booking-App",
    liveLink: "https://movie-mania.shwet.tech/",
    tags: ["React.js", "Mongo DB", "Redux Toolkit"],
  },
  {
    id: "3",
    title: "Quizz App",
    description:
      "A responsive quiz platform designed for the AlmaBetter Capstone Project, with secure authentication, customizable quiz creation, and interactive, real-time gameplay.",
    image: "/QuizzApp.jpg",
    category: "mern",
    githubLink: "https://github.com/Shwetaank/-quizz-app",
    liveLink: "https://quizzes.shwet.tech/",
    tags: ["React.js", "Tailwind CSS", "Framer-Motion"],
  },
  {
    id: "4",
    title: "React Image Editor",
    description:
      "A user-friendly, web-based image editor allowing image uploads, filter applications, and saving edited results, built with React and Bootstrap for responsive design.",
    image: "/ImagaeEditor.jpg",
    category: "mern",
    githubLink: "https://github.com/Shwetaank/React-Image-Editor",
    liveLink: "https://react-image-editor-chi.vercel.app/",
    tags: ["React.Js", "Bootstrap", "Web App"],
  },
  {
    id: "5",
    title: "Pseudo AI",
    description:
      "A JavaScript-based application demonstrating speech recognition and synthesis, enabling users to interact via voice commands for responses and web searches.",
    image: "/Pseudo-AI.jpg",
    category: "vanilla",
    githubLink: "https://github.com/Shwetaank/Pseudo-AI-",
    liveLink: "https://shwetaank.github.io/Pseudo-AI-/",
    tags: ["JavaScript", "Speech Recognition", "AI"],
  },
  {
    id: "6",
    title: "Pong Game",
    description:
      "A classic Pong game built with HTML, CSS, and JavaScript, featuring smooth, responsive gameplay against a simple AI opponent.",
    image: "/Pong.jpg",
    category: "vanilla",
    githubLink: "https://github.com/Shwetaank/-Pong-Game",
    liveLink: "https://shwetaank.github.io/-Pong-Game/",
    tags: ["JavaScript", "HTML5", "Game Development"],
  },
  {
    id: "7",
    title: "Quote Generator",
    description:
      "A daily inspiration app that displays random quotes with an option to generate a new one or share directly on Twitter.",
    image: "/Quote.jpg",
    category: "vanilla",
    githubLink: "https://github.com/Shwetaank/Quote-Generator",
    liveLink: "https://shwetaank.github.io/Quote-Generator/",
    tags: ["JavaScript", "CSS3", "API Integration"],
  },
];

export const categories = [
  "All",
  "MERN",
  "Next.js",
  "Springboot",
  "Blockchain",
  "Mobile",
  "Vanilla",
];
