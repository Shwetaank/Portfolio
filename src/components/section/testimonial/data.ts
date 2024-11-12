// data/data.ts
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Roy",
    role: "Gym Owner",
    content:
      "🌟 Outstanding service! Our website has been transformed into a modern, user-friendly platform that has truly exceeded our expectations.",
    image: "/Avtar1.jpg?height=120&width=120",
    rating: 5,
  },
  {
    id: 2,
    name: "John Snowdan",
    role: "Startup Owner",
    content:
      "👍 The team’s expertise and professionalism delivered exceptional results throughout the project. I couldn't be happier with the outcome!",
    image: "/Avtar2.jpg?height=120&width=120",
    rating: 4,
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "CTO at Sass Bank",
    content:
      "💼 Impressive backend services! Their seamless integration of advanced solutions significantly enhanced our operational efficiency and security.",
    image: "/Avtar3.jpg?height=120&width=120",
    rating: 4,
  },
  {
    id: 4,
    name: "Naginx Automobile",
    role: "Lead Designer at Naginx Automobile",
    content:
      "🖥️ The user-friendly and visually appealing frontend solutions have dramatically improved our online presence and user engagement. Highly recommended!",
    image: "/Avtar4.jpg?height=120&width=120",
    rating: 5,
  },
  {
    id: 5,
    name: "Marcone",
    role: "Freelancer",
    content:
      "🌈 The intuitive and attractive frontend solutions provided have greatly enhanced our digital presence. Thank you for the outstanding work!",
    image: "/Avtar5.jpeg?height=120&width=120",
    rating: 5,
  },
  {
    id: 6,
    name: "Ronark Saus",
    role: "Mobile Developer",
    content:
      "📱 A delightful mobile development experience! Their meticulous attention to detail has set a new standard for user experience in our app.",
    image: "/Avtar6.jpg?height=120&width=120",
    rating: 5,
  },
  {
    id: 7,
    name: "Monika",
    role: "Actress",
    content:
      "💫 Exceptional website design services! Their ability to capture glamour in every detail is truly impressive and transformative.",
    image: "/Avtar7.jpeg?height=120&width=120",
    rating: 4,
  },
];
