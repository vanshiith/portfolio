import {
  users,
  projects,
  experience,
  education,
  type User,
  type InsertUser,
  type Project,
  type Experience,
  type Education
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getProjects(): Promise<Project[]>;
  getExperience(): Promise<Experience[]>;
  getEducation(): Promise<Education[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private experience: Map<number, Experience>;
  private education: Map<number, Education>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.experience = new Map();
    this.education = new Map();
    this.currentId = 1;

    this.seedData();
  }

  private seedData() {
    // Seed Projects
    const projectsData = [
      {
        title: "Product Roadmap Visualizer",
        description: "A comprehensive tool designed to help product managers visualize and share their product roadmaps with stakeholders. Built with React and D3.js.",
        driveLink: "https://drive.google.com/drive/u/0/",
        githubLink: "https://github.com",
      },
      {
        title: "User Feedback Analyzer",
        description: "An AI-powered dashboard that aggregates and analyzes user feedback from multiple sources to provide actionable insights. Uses NLP for sentiment analysis.",
        driveLink: "https://drive.google.com/drive/u/0/",
        githubLink: "https://github.com",
      },
      {
        title: "Agile Sprint Planner",
        description: "A minimalist sprint planning tool focused on velocity tracking and capacity planning. Features drag-and-drop interface and automated reporting.",
        driveLink: "https://drive.google.com/drive/u/0/",
        githubLink: "https://github.com",
      },
    ];

    projectsData.forEach((p, index) => {
      this.projects.set(index + 1, { ...p, id: index + 1 });
    });

    // Seed Experience
    const experienceData = [
      {
        role: "Product Management Intern",
        company: "TechFlow Systems",
        duration: "May 2024 - Aug 2024",
        description: "Collaborated with engineering and design teams to launch a new feature that increased user engagement by 15%. Conducted user research and competitive analysis to inform product strategy.",
      },
      {
        role: "Product Analyst",
        company: "DataDriven Inc",
        duration: "Jan 2023 - Apr 2024",
        description: "Analyzed user behavior data using SQL and Python to identify churn drivers. Proposed and implemented UI improvements that reduced drop-off rates by 10%.",
      },
      {
        role: "Software Engineering Fellow",
        company: "Headstarter AI",
        duration: "Jun 2022 - Aug 2022",
        description: "Built and deployed 5 AI projects in 5 weeks. Gained hands-on experience with modern tech stack and agile development methodologies.",
      }
    ];

    experienceData.forEach((e, index) => {
      this.experience.set(index + 1, { ...e, id: index + 1 });
    });

    // Seed Education
    const educationData = [
      {
        degree: "Bachelor of Technology",
        school: "Jawahar Navodaya Vidyalaya",
        year: "2020 - 2024",
      },
      {
        degree: "Product Management Certification",
        school: "Product School",
        year: "2023",
      }
    ];

    educationData.forEach((e, index) => {
      this.education.set(index + 1, { ...e, id: index + 1 });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getExperience(): Promise<Experience[]> {
    return Array.from(this.experience.values());
  }

  async getEducation(): Promise<Education[]> {
    return Array.from(this.education.values());
  }
}

export const storage = new MemStorage();
