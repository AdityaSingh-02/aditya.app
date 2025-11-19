type Experience = {
  id: number;
  company: string;
  role: string;
  timeline: string;
  img: string;
};

const exp: Experience[] = [
  {
    id: 1,
    company: "Google Summer of Code",
    role: "Contributor at Rocket.Chat",
    timeline: "May 2023 - September 2023",
    img: "/gsoc.svg",
  },
  {
    id: 3,
    company: " Artific Studio",
    role: "Full Stack Consultant (Intern)",
    timeline: "May 2024 - September 2024",
    img: "/artific-logo.png",
  },
  {
    id: 2,
    company: "Google Summer of Code",
    role: "Mentor at Rocket.Chat",
    timeline: "May 2024 - Present & forever",
    img: "/gsoc.svg",
  },
  {
    id: 4,
    company: "BeyondIRR",
    role: "Software Engineer Intern (Frontend)",
    timeline: "September 2024 - February 2025",
    img: "/beyondirr.png",
  },
  {
    id: 5,
    company: "Mobility 4 Public Safety",
    role: "SDE-1",
    timeline: "February 2025 - Present",
    img: "/m4ps.png",
  },
];

export const experience = exp.reverse();
