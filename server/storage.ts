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

    // Seed Experience - PM-focused roles from LinkedIn
    const experienceData = [
      {
        role: "Growth",
        company: "Outhad AI",
        duration: "October 2025 - Present",
        description: "Led go-to-market strategy across email, LinkedIn, and webinars, increasing discovery calls by 35%. Ran A/B messaging experiments improving lead-to-call conversion by 25%. Defined ICPs through market research and enabled targeted campaigns across new verticals.",
      },
      {
        role: "Product Manager",
        company: "First National Bank and Trust",
        duration: "August 2025 - December 2025",
        description: "Collected and analyzed performance data for 30+ branches and 130,000+ customer accounts. Conducted 25 stakeholder interviews and partnered cross-functionally to develop roadmap targeting 22% OPEX reduction and 19% ROI lift. Identified workflow bottleneck and built automation solution for fraud team.",
      },
      {
        role: "Strategy and Insights",
        company: "BVK",
        duration: "June 2025 - August 2025",
        description: "Conducted 15+ stakeholder/SME interviews and competitive scans. Synthesized insights into personas, value propositions, and positioning frameworks for healthcare, travel, and higher-ed clients. Built weekly performance dashboards and translated learnings into exec-ready narratives.",
      },
      {
        role: "ML/NLP Research Assistant",
        company: "Beloit College",
        duration: "August 2024 - May 2025",
        description: "Analyzed French translations using NLP techniques, boosting stylistic accuracy by 15%. Built OCR model with 95% accuracy for digitizing ancient texts. Developed multilingual comparison model using Universal Sentence Encoder.",
      }
    ];

    experienceData.forEach((e, index) => {
      this.experience.set(index + 1, { ...e, id: index + 1 });
    });

    // Seed Education
    const educationData = [
      {
        degree: "Bachelor of Arts - Computer Science",
        school: "Beloit College",
        year: "2022 - 2026",
      },
      {
        degree: "Physics, Chemistry, Maths, Computer Science",
        school: "Jawahar Navodaya Vidyalaya (JNV)",
        year: "2015 - 2022",
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
