import type { Project, Experience, Education, Skill } from "@shared/schema";

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Portfolio Project 1",
    description: "A description of your first project. Add details about what you built, technologies used, and the impact.",
    driveLink: "https://drive.google.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Portfolio Project 2",
    description: "A description of your second project. Include key features and outcomes.",
    driveLink: null,
    githubLink: "https://github.com/yourusername/project2",
  },
];

export const mockExperience: Experience[] = [
  {
    id: 1,
    role: "GTM Manager",
    company: "Outhad AI",
    duration: "2024 - Present",
    description: "I treated every challenge like an experiment. I picked up TypeScript and Next.js to actually build tools alongside engineers. I trained sales reps like I was teaching someone to close deals at a product demo booth. I wrote API integrations for CRMs the same way I'd debug a growth loop. If something didn't work, I rewrote it. If a process felt slow, I automated it. I didn't wait for permission. I built systems, analyzed data pipelines, created internal dashboards, and pushed product improvements directly into production. Strategy isn't theoretical when you can ship it yourself.",
  },
  {
    id: 2,
    role: "Product Manager",
    company: "Previous Company",
    duration: "2023 - 2024",
    description: "Led product development and managed cross-functional teams to deliver innovative solutions.",
  },
];

export const mockEducation: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    year: "2020 - 2024",
  },
];

export const mockSkills: Skill[] = [
  {
    id: 1,
    category: "Product & Strategy",
    items: ["Product Management", "Go-to-Market Strategy", "User Research", "Data Analysis"],
  },
  {
    id: 2,
    category: "Technical",
    items: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "API Design"],
  },
  {
    id: 3,
    category: "Tools & Platforms",
    items: ["Figma", "Linear", "Notion", "GitHub", "Vercel", "Analytics Platforms"],
  },
];
