// CertificateSection.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import {
  Certificate,
  certificates,
} from "@/components/section/certifications/data";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const CertificateCard: React.FC<{
  certificate: Certificate;
  index: number;
}> = ({ certificate, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full sm:w-1/2 lg:w-1/3 p-2"
    >
      <CardContainer className="relative">
        <CardBody className="backdrop-blur-lg border-2 flex flex-col items-center justify-between group/card  h-full rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-105">
          {/* Title */}
          <CardItem
            translateZ="50"
            className="text-xl sm:text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 flex items-center gap-2"
          >
            {certificate.title}
          </CardItem>

          {/* Description */}
          <CardItem translateZ="60" className="text-justify mt-4 ">
            <TextGenerateEffect words={certificate.description} />
          </CardItem>

          {/* Image */}
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4 relative overflow-hidden rounded-lg shadow-md"
          >
            <Image
              src={certificate.image}
              height={600}
              width={400}
              priority
              className="h-48 sm:h-56 w-full object-fill rounded-xl group-hover/card:shadow-xl transition-all duration-300"
              alt={certificate.title}
            />
          </CardItem>

          {/* Date & Verify Button */}
          <div className="flex justify-between items-center w-full mt-4 sm:mt-5">
            {/* Date */}
            <CardItem
              translateZ={20}
              className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 font-medium"
            >
              <FaCalendarAlt className="text-purple-500" />
              {certificate.date}
            </CardItem>

            {/* Verify Button */}
            <CardItem
              translateZ={20}
              as="a"
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold hover:opacity-80 transition-all duration-200 flex items-center gap-1 shadow-lg"
            >
              Verify
              <FaExternalLinkAlt className="ml-2" />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

const CertificationSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, 6);

  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="mx-auto relative"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-10 mt-5 tracking-tight text-center"
          >
            ✨ Certification ✨
          </motion.h2>
        </motion.div>
        <motion.div
          className="flex flex-wrap "
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {displayedCertificates.map((cert, index) => (
              <CertificateCard
                key={cert.title}
                certificate={cert}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        {certificates.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-2 "
          >
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 text-sm sm:text-lg font-bold rounded-full  transition-all duration-300 flex items-center gap-2 sm:gap-3"
            >
              {showAll ? (
                <>
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▲
                  </motion.span>
                  Show Less
                </>
              ) : (
                <>
                  <motion.span
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                  Show More
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default CertificationSection;
