"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import type { FAQItem } from "@/components/section/faq/data";
import { faqData } from "@/components/section/faq/data";

// FAQItem component
const FAQItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  toggleOpen: () => void;
}> = ({ item, isOpen, toggleOpen }) => (
  <motion.div
    className="p-6 border-2 rounded-2xl backdrop-blur-2xl"
    initial={false}
    animate={{
      backgroundColor: isOpen ? "rgba(79, 70, 229, 0.1)" : "transparent",
    }}
    transition={{ duration: 0.3 }}
  >
    <button
      className="flex justify-between items-center w-full text-left"
      onClick={toggleOpen}
    >
      <span className="text-lg font-semibold">{item.question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaChevronDown className="text-indigo-500 dark:text-indigo-300" />
      </motion.span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 font-thin text-justify"
        >
          {item.answer}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// FAQSection component
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-10 mt-5 tracking-tight text-center"
          >
            ✨ FAQ ✨
          </motion.h2>
        </motion.div>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggleOpen={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
