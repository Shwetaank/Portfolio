import {
  RiGithubFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiFacebookCircleFill,
  RiYoutubeFill,
} from "react-icons/ri";

// Define the type for LinkItem
export type LinkItem = { name: string; href: string; icon?: React.ReactNode };

// Define the type for SocialLinkItem
export type SocialLinkItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  className?: string;
};

// Footer Links Data
export const footerLinks: LinkItem[] = [
  { name: "About", href: "/about" },
  { name: "Education", href: "/about/#education" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

// Social Links Data
export const socialLinks: SocialLinkItem[] = [
  {
    name: "LinkedIn",
    icon: RiLinkedinBoxFill,
    href: "https://www.linkedin.com/in/shwetank-morey-a35484257",
    className: "hover:text-blue-900",
  },
  {
    name: "GitHub",
    icon: RiGithubFill,
    href: "https://github.com/Shwetaank",
    className: "hover:text-yellow-500",
  },
  {
    name: "Twitter",
    icon: RiTwitterFill,
    href: "https://x.com/Sin_Greed___",
    className: "hover:text-blue-700",
  },
  {
    name: "Instagram",
    icon: RiInstagramFill,
    href: "https://www.instagram.com/shwetaank_/",
    className: "hover:text-pink-700",
  },
  {
    name: "Facebook",
    icon: RiFacebookCircleFill,
    href: "https://www.facebook.com/spmorey",
    className: "hover:text-blue-800",
  },
  {
    name: "YouTube",
    icon: RiYoutubeFill,
    href: "https://www.youtube.com/@Sin_Greed",
    className: "hover:text-red-800",
  },
];
