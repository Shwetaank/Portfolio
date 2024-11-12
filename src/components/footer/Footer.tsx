"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiSendPlaneFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { footerLinks, socialLinks } from "./data";

// Motion settings for animation
const motionSettings = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, type: "spring", stiffness: 100 },
};

export default function FooterWithPolicyModal() {
  const [email, setEmail] = React.useState<string>("");
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signed up with email:", email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <footer className="border-t-2 py-12 backdrop-blur-xl">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Logo and Social Links */}
          <motion.div
            {...motionSettings}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="flex justify-center"
            >
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={140}
                  height={60}
                  className="object-cover"
                />
              </Link>
            </motion.div>
            <div className="flex space-x-4 mt-6 justify-between flex-grow">
              {socialLinks.map((link, index) => (
                <TooltipProvider key={link.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -8, rotate: 15 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: index * 0.1,
                        }}
                        className="p-2 rounded-full"
                      >
                        <link.icon
                          className={`h-6 w-6 ${link.className} transition-transform duration-300`}
                        />
                        <span className="sr-only">{link.name}</span>
                      </motion.a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm font-medium">{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            {...motionSettings}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-4">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-400 hover:to-purple-600 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            {...motionSettings}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Me</h3>
            <p className="text-sm text-muted-foreground mb-2">New Sangavi</p>
            <p className="text-sm text-muted-foreground mb-2">Pune, IN</p>
            <p className="text-sm text-muted-foreground mb-2">
              spmorey87@gmail.com
            </p>
            <p className="text-sm text-muted-foreground">(+91) 9421317759</p>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            {...motionSettings}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div className="flex ">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-r-none"
                  required
                />
                <Button
                  type="submit"
                  className="rounded-l-none ml-2 bg-gradient-to-r from-red-400 to-purple-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-700 transition-colors duration-300"
                >
                  <RiSendPlaneFill className="h-4 w-4" />
                  <span className="sr-only">Subscribe to newsletter</span>
                </Button>
              </div>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-green-500"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
              <p className="text-xs text-muted-foreground text-justify">
                By subscribing, you agree to our{" "}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="p-0 m-0 underline underline-offset-4 text-red-400 hover:text-red-600"
                    >
                      Privacy Policy
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90%] md:max-w-[600px] p-6 rounded-lg shadow-lg backdrop-blur-xl ">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-gray-800 text-center mb-4">
                        Privacy Policy
                      </DialogTitle>
                    </DialogHeader>
                    <div className="max-h-[60vh] overflow-y-auto text-justify leading-relaxed">
                      <h2 className="text-xl font-semibold mt-4 mb-3 text-purple-700">
                        1. Information We Collect
                      </h2>
                      <p className="mb-5 text-gray-600">
                        We collect personal information that you provide
                        directly, including when you create an account, sign up
                        for newsletters, provide feedback, or contact customer
                        support. We may also collect data through cookies and
                        similar technologies to enhance user experience and
                        analyze site usage.
                      </p>

                      <h2 className="text-xl font-semibold mt-4 mb-3 text-purple-700">
                        2. How We Use Your Information
                      </h2>
                      <p className="mb-5 text-gray-600">
                        The information we collect is used to deliver, maintain,
                        and improve our services, communicate updates, and
                        personalize user experiences. This data helps us meet
                        regulatory requirements and improve site security.
                      </p>

                      <h2 className="text-xl font-semibold mt-4 mb-3 text-purple-700">
                        3. Information Sharing and Disclosure
                      </h2>
                      <p className="mb-5 text-gray-600">
                        We do not sell your personal information. Data may be
                        shared with trusted service providers who help us
                        operate our platform under confidentiality agreements.
                        We may also disclose information to meet legal
                        requirements or protect user safety.
                      </p>

                      <h2 className="text-xl font-semibold mt-4 mb-3 text-purple-700">
                        4. Data Security
                      </h2>
                      <p className="mb-5 text-gray-600">
                        Our security protocols safeguard your personal data
                        against unauthorized access, alteration, and loss. We
                        use encryption and regular security reviews to protect
                        sensitive information.
                      </p>

                      <h2 className="text-xl font-semibold mt-4 mb-3 text-purple-700">
                        5. Your Rights and Choices
                      </h2>
                      <p className="mb-5 text-gray-600">
                        You have rights regarding your personal data, including
                        access, correction, deletion, and restriction of
                        processing. You may also choose to opt-out of marketing
                        communications or limit certain data collection. Contact
                        us to exercise these rights.
                      </p>

                      <h2 className="text-xl font-semibold mt-4 mb-3 text-purple-700">
                        6. Policy Updates
                      </h2>
                      <p className="mb-5 text-gray-600">
                        This policy may be updated to reflect changes in
                        practices, legal requirements, or operational needs.
                        Updates will be posted here, and significant changes may
                        be communicated through other channels.
                      </p>

                      <h2 className="text-xl font-semibold mt-4 mb-3 text-purple-700">
                        7. Contact Information
                      </h2>
                      <p className="text-gray-600">
                        If you have questions about this policy or your personal
                        data, please reach out to us at
                        <a
                          href="mailto:spmorey87@gmail.com"
                          className="m-2 text-purple-700 hover:text-purple-900 font-semibold"
                        >
                          {" "}
                          spmorey87@gmail.com
                        </a>
                        .
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>{" "}
                and consent to receive updates from our company.
              </p>
            </form>
          </motion.div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            &copy; {new Date().getFullYear()}{" "}
            <motion.span
              className="m-1 cursor-pointer text-muted-foreground"
              whileHover={{ scale: 1.1, color: "#6B21A8" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Sin_Greed
            </motion.span>
            . All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
