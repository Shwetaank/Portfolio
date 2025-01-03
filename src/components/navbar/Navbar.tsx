"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Menu,
  ChevronDown,
  Info,
  Briefcase,
  Clipboard,
  MessageSquare,
  BookOpen,
  HelpCircle,
  Award,
  Quote,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Button } from "../ui/button";

type NavItemType = { name: string; href: string; icon?: React.ReactNode };

// Main navigation items
const mainNavItems: NavItemType[] = [
  { name: "About", href: "/about", icon: <Info /> },
  { name: "Portfolio", href: "/portfolio", icon: <Briefcase /> },
  { name: "Contact", href: "/contact", icon: <MessageSquare /> },
];

// Additional navigation items for the dropdown
const moreNavItems: NavItemType[] = [
  {
    name: "Services & Skills",
    href: "/about/#services-skills",
    icon: <Clipboard />,
  },
  { name: "Education", href: "/about/#education", icon: <BookOpen /> },
  { name: "Certifications", href: "/about/#certifications", icon: <Award /> },
  { name: "Testimonials", href: "/#testimonials", icon: <Quote /> },
  { name: "FAQ", href: "/#faq", icon: <HelpCircle /> },
];

// Motion settings for animation
const motionSettings = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, type: "spring", stiffness: 100 },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      {...motionSettings}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3 border-b-2 border-b-gray-900 rounded-b-full shadow-2xl bg-background/10 backdrop-blur-2xl"
    >
      <div className="mx-auto flex items-center justify-between px-6">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-12">
          <AnimatedLogo />
          <AnimatedTitle />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex space-x-12 items-center">
          {renderNavItems(mainNavItems, pathname)}
          <ExploreMoreDropdown />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center xl:hidden">
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pathname={pathname}
          />
        </div>
      </div>
    </motion.nav>
  );
};

// Animated Logo component
const AnimatedLogo: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
    animate={{ opacity: 1, rotate: 0, scale: 1 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.4, rotate: 360, transition: { duration: 0.5 } }}
    whileTap={{ scale: 0.9 }}
  >
    <Image
      src="/logo.jpg"
      alt="Your Logo"
      width={40}
      height={40}
      className="rounded-full"
    />
  </motion.div>
);

// Animated Title component
const AnimatedTitle: React.FC = () => (
  <motion.span
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    whileHover={{
      scale: 1.1,
      background: "linear-gradient(to right, #EF4444, #A855F7)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
    className="text-3xl font-semibold"
    style={{
      letterSpacing: "4px",
      background: "linear-gradient(to right, #EF4444, #A855F7)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    Shwetank
  </motion.span>
);

// Dropdown component for additional navigation items
const ExploreMoreDropdown: React.FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="outline"
          className="flex items-center rounded-full p-4"
        >
          Explore More <ChevronDown className="ml-2 h-4 w-6" />
        </Button>
      </motion.div>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      align="end"
      className="bg-background/80 backdrop-blur-lg"
    >
      {renderNavItems(moreNavItems, usePathname())}
    </DropdownMenuContent>
  </DropdownMenu>
);

// Function to render navigation items
const renderNavItems = (
  items: NavItemType[],
  pathname: string,
  setIsOpen?: (state: boolean) => void
) =>
  items.map((item, index) => (
    <NavItem
      key={item.name}
      item={item}
      index={index}
      pathname={pathname}
      setIsOpen={setIsOpen}
    />
  ));

// Mobile Menu component
const MobileMenu: React.FC<{
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  pathname: string;
}> = ({ isOpen, setIsOpen, pathname }) => {
  return (
    <div className="xl:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-background/80"
            >
              <Menu />
              <span className="sr-only">Open Menu</span>
            </Button>
          </motion.div>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle
              className="text-left text-2xl lg:text-4xl font-semibold mb-2"
              style={{
                background: "linear-gradient(to right, #EF4444, #A855F7)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Menu
            </SheetTitle>
            <SheetDescription>
              🌟 Explore the sections of my portfolio ✨
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-6">
            {renderNavItems(mainNavItems, pathname, setIsOpen)}
            {renderNavItems(moreNavItems, pathname, setIsOpen)}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// Individual navigation item component
const NavItem: React.FC<{
  item: NavItemType;
  index: number;
  pathname: string;
  setIsOpen?: (state: boolean) => void;
}> = ({ item, pathname, setIsOpen }) => {
  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  const isActive = pathname === item.href;

  return (
    <div className="flex items-center space-x-4">
      <Link
        href={item.href}
        aria-label={item.name}
        className={`flex items-center space-x-3 px-4 py-2 font-medium transition-all duration-300 group ${
          isActive
            ? "text-pink-600 bg-gradient-to-r from-red-400 to-purple-600 bg-clip-text underline underline-offset-8"
            : ""
        }`}
        onClick={handleClick}
      >
        {item.icon && (
          <motion.span
            className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:scale-120 group-hover:text-red-600"
            whileHover={{ scale: 1.5, rotate: 15 }}
            transition={{ duration: 0.3 }}
          >
            {item.icon}
          </motion.span>
        )}

        <motion.span
          className={`transition-colors duration-300 ease-in-out font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-red-400 to-purple-600 ${
            isActive ? "text-transparent" : ""
          }`}
        >
          {item.name}
        </motion.span>
      </Link>
    </div>
  );
};

export default Navbar;
