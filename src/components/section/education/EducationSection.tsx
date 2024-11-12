"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import data from "@/components/section/education/data";
import { motion } from "framer-motion";

const EducationSection = () => {
  const timelineData = data.map((item) => ({
    title: item.Year,
    content: (
      <div className="border-2 text-center rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:scale-105 transform hover:bg-opacity-80">
        <p className="text-xl font-semibold mb-2 hover:underline underline-offset-8 cursor-pointer">
          {item.Uni}
        </p>
        <p className="text-pink-500 text-sm md:text-md font-semibold mb-4">
          {item.branch}
        </p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm md:text-md font-semibold hover:underline underline-offset-4"
        >
          Visit Website
        </a>
      </div>
    ),
  }));

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="mx-auto relative"
      >
        {/* Heading for Education */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-10 mt-5 tracking-tight text-center"
        >
          ✨ Education ✨
        </motion.h2>
        <Timeline data={timelineData} />
      </motion.div>
    </div>
  );
};

export default EducationSection;
