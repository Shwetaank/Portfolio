import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaDribbble,
  FaEnvelope,
} from "react-icons/fa";

export interface ContactItem {
  id: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
  label: string;
}

const messengerMessage = encodeURIComponent(
  "Hey there! 👋 Thanks for reaching out. I'm Shwetank Morey, a full-stack developer. How can I assist you today?"
);
const whatsappMessage = encodeURIComponent(
  "Hello! 👋 Thanks for getting in touch. I'm Shwetank Morey, a full-stack developer. How can I help you with your project?"
);

const emailMessage = encodeURIComponent(
  "Hello! 👋 I’m Shwetank Morey, a full-stack developer. I’d love to connect with you. How can I assist?"
);

export const contactMethods: ContactItem[] = [
  {
    id: 1,
    icon: FaFacebookMessenger,
    link: `https://www.facebook.com/messages/t/100001121937194?entry.1=${messengerMessage}`,
    label: "Messenger",
  },
  {
    id: 2,
    icon: FaWhatsapp,
    link: `https://wa.me/919421317759?text=${whatsappMessage}`,
    label: "WhatsApp",
  },
  {
    id: 3,
    icon: FaEnvelope,
    link: `mailto:spmorey87@gmail.com?subject=Inquiry&body=${emailMessage}`,
    label: "Email",
  },
];

export const socialLinks: ContactItem[] = [
  {
    id: 1,
    icon: FaGithub,
    link: "https://github.com/Shwetaank",
    label: "GitHub",
  },
  {
    id: 2,
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/shwetank-morey-a35484257",
    label: "LinkedIn",
  },
  {
    id: 3,
    icon: FaFacebook,
    link: "https://www.facebook.com/spmorey",
    label: "Facebook",
  },
  {
    id: 4,
    icon: FaInstagram,
    link: "https://www.instagram.com/shwetaank_/",
    label: "Instagram",
  },
  {
    id: 5,
    icon: FaDribbble,
    link: "https://dribbble.com/Sin__Greed",
    label: "Dribbble",
  },
];
