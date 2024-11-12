// data.ts

// Define an interface for the certificate data
export interface Education {
  id: number;
  Uni: string;
  Year: string;
  branch: string;
  link: string;
}

// Export the array of data with type annotations
const educationData: Education[] = [
  {
    id: 1,
    Uni: "AlmaBetter Innoversity",
    Year: "2024*",
    branch: "MS in Computer Science: Software Engineering",
    link: "https://woolf.university/id/2099354238",
  },
  {
    id: 2,
    Uni: "Sidhhivinayak Technical Campus",
    Year: "2023",
    branch: "Bachelor In Mechanical Engineering",
    link: "https://www.stc.org.in/",
  },
  {
    id: 3,
    Uni: "Yashwantrao Chavan Maharashtra Open University",
    Year: "2022",
    branch: "Bachelor Of Arts",
    link: "https://ycmou.ac.in/home",
  },
  {
    id: 4,
    Uni: "Pd.Dr.V.B.Kolte COE & Poly",
    Year: "2020",
    branch: "Diploma In Mechanical Engineering",
    link: "https://coemalkapur.ac.in/poly/",
  },
];

export default educationData;
