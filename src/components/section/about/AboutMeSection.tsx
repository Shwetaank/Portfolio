"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiYoutube,
  FiDownload,
  FiAward,
  FiBriefcase,
  FiUser,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// Interfaces for type-checking
interface AboutData {
  id: number;
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface SocialLink {
  icon: JSX.Element;
  href: string;
  label: string;
}

// Data for about section cards
const aboutData: AboutData[] = [
  {
    id: 1,
    icon: <FiAward className="h-6 w-6" />,
    title: "Experience",
    desc: "3+ Years 🏆",
  },
  {
    id: 2,
    icon: <FiBriefcase className="h-6 w-6" />,
    title: "Projects",
    desc: "20+ Completed 📁",
  },
  {
    id: 3,
    icon: <FiUser className="h-6 w-6" />,
    title: "Clients",
    desc: "10+ Happy 😊",
  },
];

// Social media links for icons
const socialLinks: SocialLink[] = [
  {
    icon: <FiGithub className="h-7 w-7" />,
    href: "https://github.com/Shwetaank",
    label: "GitHub",
  },
  {
    icon: <FiLinkedin className="h-7 w-7" />,
    href: "https://www.linkedin.com/in/shwetank-morey-a35484257",
    label: "LinkedIn",
  },
  {
    icon: <FiTwitter className="h-7 w-7" />,
    href: "https://x.com/Sin_Greed___",
    label: "Twitter",
  },
  {
    icon: <FiFacebook className="h-7 w-7" />,
    href: "https://www.facebook.com/spmorey",
    label: "Facebook",
  },
  {
    icon: <FiYoutube className="h-7 w-7" />,
    href: "https://www.youtube.com/@Sin_Greed",
    label: "YouTube",
  },
];

// AboutSection component
const AboutSection: React.FC = () => {
  // Text for About section
  const text = `Hello, I'm Shwetank Morey 👋, a committed Full Stack Engineer 💻 based in Pune, India. With a background in Mechanical Engineering ⚙️, I have transitioned into freelancing, where I blend creativity with advanced technology solutions. My dedication to enhancing your online business presence is a priority 🌟, and I strive to add significant value to every project I undertake. For a comprehensive overview of my qualifications and experience, please explore my resume below 📄.`;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      {/* Main container for the section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="mx-auto relative"
      >
        {/* Heading for About Section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-10 mt-5 tracking-tight text-center"
        >
          ✨ About Me ✨
        </motion.h2>

        {/* Container for main content and side cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Main card with image and about text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="md:col-span-2  backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Profile image */}
              <div className="md:w-2/5 relative h-80 md:h-auto overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  <Image
                    src="/about.jpg"
                    alt="Shwetank Morey"
                    height={500}
                    width={500}
                  />
                </motion.div>
              </div>

              {/* Text and social links */}
              <div className="p-8 md:w-3/5 flex flex-col justify-between border-2 backdrop-blur-xl">
                <div>
                  {/* Role heading */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                    className=" cursor-pointer text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-4"
                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  >
                    Full Stack Developer
                  </motion.h3>

                  {/* About text with animated effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-justify"
                  >
                    <TextGenerateEffect words={text} />
                  </motion.div>
                </div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="flex justify-center space-x-6 xl:space-x-10 mt-6"
                >
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-md transform transition-all duration-300 ease-in-out hover:text-pink-700"
                      whileHover={{ scale: 1.9, rotate: 360 }}
                      title={link.label}
                      aria-label={link.label}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Download CV button card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className=" bg-transparent rounded-3xl p-8 flex items-center justify-center backdrop-blur-xl border-2"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex justify-center"
            >
              <a href="/my-cv.pdf" download>
                <Button className="backdrop-blur-xl w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 py-4 px-10 rounded-full font-semibold flex items-center space-x-3">
                  <span>Resume</span>
                  <FiDownload className="h-8 w-8" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* About data cards (Experience, Projects, Clients) */}
          <AnimatePresence>
            {aboutData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="border-2 rounded-3xl p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300 backdrop-blur-md"
              >
                <motion.div
                  className="text-primary rounded-full border-purple-700 border-b-2 p-4 hover:text-pink-700 mb-5 text-6xl relative cursor-pointer"
                  whileHover={{ rotateY: 360, scale: 1.7 }}
                  transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-2xl font-semibold cursor-pointer mb-2 hover:text-pink-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
