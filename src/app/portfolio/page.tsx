"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

// Import data from the data.ts
import { projects, categories } from "./data";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="mx-auto relative "
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-10 mt-5 tracking-tight text-center"
        >
          ✨ My Works ✨
        </motion.h2>
        <motion.div
          className="flex justify-center  gap-6 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-purple-500 text-white border-2"
                  : "bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="relative group transition-all duration-500 ease-out"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.2)",
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold text-purple-700 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200 text-justify mb-4">
                      {project.description}
                    </p>
                    <div className="flex space-x-3">
                      {project.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-1 bg-purple-600 text-xs text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute top-4 right-4 space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-4 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block p-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="w-6 h-6" />
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
