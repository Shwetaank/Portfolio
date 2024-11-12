"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSolidity,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiFlutter,
  SiNextdotjs,
  SiTailwindcss,
  SiJest,
  SiAxios,
  SiExpress,
  SiDrizzle,
  SiSpringboot,
  SiApachekafka,
  SiGo,
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MotionCard = motion.create(Card);
const MotionButton = motion.create(Button);

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  hoverColor: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaReact className="w-12 h-12 text-blue-500" />,
    title: "Frontend Development",
    description:
      "🌐 Crafting visually stunning, responsive user interfaces optimized across mobile, web, tablet, and desktop. Delivering an engaging, seamless user experience for your audience.",
  },
  {
    icon: <FaNodeJs className="w-12 h-12 text-yellow-600" />,
    title: "Backend Development",
    description:
      "🔒 Implementing robust security protocols to safeguard your product, defending against cyber threats and ensuring your application's safety and resilience.",
  },
  {
    icon: <SiFlutter className="w-12 h-12 text-red-400" />,
    title: "Mobile App Development",
    description:
      "📱 Building high-performance, cross-platform apps for iOS and Android using React Native. Offering consistent performance and a cohesive user experience across devices.",
  },
  {
    icon: <SiSolidity className="w-12 h-12 text-gray-700" />,
    title: "Blockchain Development",
    description:
      "🔗 Empowering your business with blockchain solutions—from secure smart contracts to decentralized applications—leveraging the transformative potential of blockchain technology.",
  },
];

const skills: Record<string, Skill[]> = {
  Frontend: [
    {
      name: "React Native",
      icon: <FaReact />,
      level: 100,
      hoverColor: "#61DBFB",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      level: 95,
      hoverColor: "#000000",
    },
    {
      name: "Redux Toolkit",
      icon: <SiRedux />,
      level: 95,
      hoverColor: "#764ABC",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      level: 95,
      hoverColor: "#06B6D4",
    },
    { name: "Jest", icon: <SiJest />, level: 90, hoverColor: "#99424F" },
    { name: "Axios", icon: <SiAxios />, level: 85, hoverColor: "#5A29E4" },
  ],
  Backend: [
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: 95,
      hoverColor: "#5B7F24",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
      level: 85,
      hoverColor: "#6DB33F",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: 85,
      hoverColor: "#47A248",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
      level: 85,
      hoverColor: "#336791",
    },
    {
      name: "Kafka",
      icon: <SiApachekafka />,
      level: 80,
      hoverColor: "#E81D25",
    },
    {
      name: "Drizzle ORM",
      icon: <SiDrizzle />,
      level: 75,
      hoverColor: "#5C6BC0",
    },
  ],
  Languages: [
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: 95,
      hoverColor: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 90,
      hoverColor: "#007ACC",
    },
    {
      name: "SQL",
      icon: <FaDatabase />,
      level: 85,
      hoverColor: "#F29111",
    },
    {
      name: "Solidity",
      icon: <SiSolidity />,
      level: 75,
      hoverColor: "#AA6741",
    },
    {
      name: "Java",
      icon: <FaJava />,
      level: 85,
      hoverColor: "#007396",
    },
    {
      name: "Go",
      icon: <SiGo />,
      level: 80,
      hoverColor: "#00ADD8",
    },
  ],
  DevOps: [
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: 92,
      hoverColor: "#F05032",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      level: 85,
      hoverColor: "#2496ED",
    },
  ],
};

const MotionDiv = motion.div;

export default function ModernServiceSection() {
  const [activeTab, setActiveTab] = useState("services");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="min-h-screen py-16 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-10 mt-5 tracking-tight text-center"
          >
            ✨ Services ✨
          </motion.h2>
        </MotionDiv>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          {["services", "skills"].map((tab) => (
            <MotionButton
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              onClick={() => setActiveTab(tab)}
              className="text-lg capitalize rounded-full p-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </MotionButton>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "services" && (
            <MotionDiv
              key="services"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid sm:grid-cols-1 lg:grid-cols-2 gap-16 p-2"
            >
              {services.map((service, index) => (
                <MotionDiv
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
                >
                  <MotionCard className="h-full w-full overflow-hidden border-2 rounded-3xl backdrop-blur-xl transform hover:scale-105 transition-transform cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center justify-center relative z-10 text-center space-y-4">
                      <motion.div
                        className="text-4xl mb-2 "
                        whileHover={{ scale: 1.5, rotate: 15 }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-2xl font-semibold transition-transform duration-300 hover:scale-105 hover:underline underline-offset-8">
                        {service.title}
                      </h3>
                      <p className="text-justify p-2 font-thin">
                        {service.description}
                      </p>
                    </CardContent>
                  </MotionCard>
                </MotionDiv>
              ))}
            </MotionDiv>
          )}

          {activeTab === "skills" && (
            <MotionDiv
              key="skills"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {Object.entries(skills).map(([category, categorySkills]) => (
                <MotionDiv
                  key={category}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <h3 className="text-3xl font-semibold hover:underline cursor-pointer underline-offset-8 text-center mt-4 mb-4">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-6 gap-10">
                    {categorySkills.map((skill, index) => (
                      <MotionDiv
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedSkill(skill)}
                        className="cursor-pointer"
                        title={skill.name}
                      >
                        <Card className="rounded-full backdrop-blur-lg hover:border-primary/30 transition-all duration-300">
                          <CardContent className="p-4 flex flex-col items-center justify-center h-full">
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <h4 className="text-sm font-semibold text-center mb-2">
                              {skill.name}
                            </h4>
                          </CardContent>
                        </Card>
                      </MotionDiv>
                    ))}
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedSkill && (
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-lg flex items-center justify-center z-50"
              onClick={() => setSelectedSkill(null)}
            >
              <MotionCard
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full max-w-lg mx-4 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center mb-6">
                    <div
                      className="text-6xl p-4 rounded-full bg-opacity-30"
                      style={{
                        backgroundColor: `${selectedSkill.hoverColor}30`,
                      }}
                    >
                      {selectedSkill.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-3xl font-bold text-white">
                        {selectedSkill.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Proficiency: {selectedSkill.level}%
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-gray-700/40 rounded-full h-3 relative overflow-hidden">
                    <MotionDiv
                      className="absolute inset-0 h-full rounded-full"
                      style={{ backgroundColor: selectedSkill.hoverColor }}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed text-justify">
                    My expertise in{" "}
                    <span className="text-white font-semibold">
                      {selectedSkill.name}
                    </span>{" "}
                    has been built through hands-on experience in various
                    projects. I continue to expand my skills to stay at the
                    forefront of advancements and ensure high standards.
                  </p>
                </CardContent>
              </MotionCard>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
