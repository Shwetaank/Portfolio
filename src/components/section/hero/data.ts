import {
  FaCode,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

interface SocialMediaLink {
  id: number;
  link: string;
  icon: React.ElementType;
  labelName: string;
  hoverColor: string;
}

const data: SocialMediaLink[] = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/shwetank-morey-a35484257",
    icon: FaLinkedin,
    labelName: "LinkedIn",
    hoverColor: "#0e76a8",
  },
  {
    id: 2,
    link: "https://www.facebook.com/spmorey",
    icon: FaFacebook,
    labelName: "Facebook",
    hoverColor: "#1877f2",
  },
  {
    id: 3,
    link: "https://www.instagram.com/shwetaank_/",
    icon: FaInstagram,
    labelName: "Instagram",
    hoverColor: "#e1306c",
  },
  {
    id: 4,
    link: "https://x.com/Sin_Greed___",
    icon: FaTwitter,
    labelName: "Twitter",
    hoverColor: "#1da1f2",
  },
  {
    id: 5,
    link: "https://github.com/Shwetaank",
    icon: FaGithub,
    labelName: "GitHub",
    hoverColor: "#f89f1b",
  },
  {
    id: 6,
    link: "https://leetcode.com/spmorey87/",
    icon: FaCode,
    labelName: "LeetCode",
    hoverColor: "#f89f1b",
  },
  {
    id: 7,
    link: "https://www.youtube.com/@Sin_Greed",
    icon: FaYoutube,
    labelName: "YouTube",
    hoverColor: "#ff0000",
  },
  {
    id: 8,
    link: "https://dribbble.com/Sin__Greed",
    icon: FaDribbble,
    labelName: "Dribbble",
    hoverColor: "#ea4c89",
  },
];

export default data;
