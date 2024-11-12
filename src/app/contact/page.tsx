"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaMapPin } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { contactMethods, socialLinks, ContactItem } from "@/app/contact/data";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent! Thanks for reaching out. I'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-10 mt-5 tracking-tight text-center"
        >
          ✨ Contact Me ✨
        </motion.h2>

        <Card className="bg-gradient-to-tl from-gray-800 via-gray-900 to-black/80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden border border-gray-700">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-semibold mb-4 text-center">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-center mb-6 text-gray-300">
                    Ready to bring your ideas to life? Let&apos;s collaborate
                    and create something extraordinary.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method) => (
                    <ContactMethod key={method.id} method={method} />
                  ))}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Based in</h3>
                  <div className="flex items-center justify-center space-x-2 text-lg text-gray-300">
                    <FaMapPin className="text-pink-500" />
                    <span>Pune, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-8">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.id}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-purple-700 transition-colors"
                    >
                      <link.icon className="w-6 h-6" />
                      <span className="sr-only">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-inner"
              >
                <h2 className="text-3xl font-semibold mb-6 text-center">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <InputField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={setName}
                  />
                  <InputField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={setEmail}
                    type="email"
                  />
                  <TextField
                    id="message"
                    label="Message"
                    value={message}
                    onChange={setMessage}
                    rows={4}
                  />

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    >
                      Send Message
                      <IoSendSharp className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

const ContactMethod = ({ method }: { method: ContactItem }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="flex items-center rounded-3xl justify-between bg-gray-800 p-4 hover:bg-gray-700 transition-colors"
  >
    <div className="flex items-center space-x-4">
      <method.icon className="w-6 h-6 text-purple-700" />
      <span className="text-lg">{method.label}</span>
    </div>
    <Button
      variant="outline"
      size="sm"
      onClick={() => window.open(method.link, "_blank")}
      className="text-gray-300 rounded-3xl border-gray-600 hover:bg-gray-600 hover:text-white"
    >
      Contact
    </Button>
  </motion.div>
);

export default ContactPage;

const InputField = ({
  id,
  label,
  value,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-300 mb-2"
    >
      {label}
    </label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="w-full bg-gray-700 border-gray-600 text-gray-100 focus:ring-2 focus:ring-purple-500"
    />
  </div>
);

const TextField = ({
  id,
  label,
  value,
  onChange,
  rows,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows: number;
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-300 mb-2"
    >
      {label}
    </label>
    <Textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
      className="w-full bg-gray-700 border-gray-600 text-gray-100 focus:ring-2 focus:ring-purple-500"
      rows={rows}
    />
  </div>
);
