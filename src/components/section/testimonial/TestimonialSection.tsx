"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import {
  testimonials,
  Testimonial,
} from "@/components/section/testimonial/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isActive,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: isActive ? 1 : 0.9,
      opacity: isActive ? 1 : 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  }, [isActive, controls]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex justify-center items-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={controls}
    >
      <div className="p-4 w-full sm:w-[350px] md:w-[400px] lg:w-[1000px] rounded-2xl border border-gray-700 shadow-xl flex flex-col justify-between bg-gradient-to-b from-[#0d1117]/60 to-[#161b22]/80 backdrop-blur-xl">
        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mr-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={80}
              height={80}
              className="w-full h-full rounded-full border-2 border-pink-500 shadow-lg object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg sm:text-xl text-white font-semibold">
              {testimonial.name}
            </h3>
            <p className="text-sm text-pink-500">{testimonial.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < testimonial.rating ? "text-yellow-400" : "text-gray-600"
              } mr-1`}
            />
          ))}
        </div>

        <div className="italic text-gray-200 text-center leading-relaxed px-4 mb-4">
          <p>{testimonial.content}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" h-screen py-24 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-5xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-10 mt-5 tracking-tight text-center"
      >
        ✨ Client Says ✨
      </motion.h2>
      <div className="relative w-full h-[400px] md:h-[300px] flex items-center justify-center">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentIndex}
            />
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-yellow-400" : "bg-gray-600"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
