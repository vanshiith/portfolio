import {
  type Project,
  type Experience,
  type Education,
  type Skill
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getExperience(): Promise<Experience[]>;
  getEducation(): Promise<Education[]>;
  getSkills(): Promise<Skill[]>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private experience: Map<number, Experience>;
  private education: Map<number, Education>;
  private skills: Map<number, Skill>;

  constructor() {
    this.projects = new Map();
    this.experience = new Map();
    this.education = new Map();
    this.skills = new Map();

    this.seedData();
  }

  private seedData() {
    // Seed Projects
    const projectsData = [
      {
        title: "Sipit (Work in Progress)",
        description: "A product-led social discovery app that blends local café recommendations with community building. Users rate cafés across key experience metrics and log visits through reviews or gallery posts. A built-in incentive loop rewards engagement by unlocking real-world social connections every 10 visits, turning discovery into habit and community into retention.",
        driveLink: "https://www.figma.com/proto/YK3nh9gcOugxTWlZFMD8S0/Sip-It?node-id=50-28109&t=GpDqa89GtJ7PVXVR-1",
        githubLink: null,
      },
      {
        title: "Daily Dose of Discomfort",
        description: "Daily Dose of Discomfort is a lightweight habit-building product designed to help people build consistency by taking one small, intentionally uncomfortable action each day and logging it as proof of the identity they want to become. Instead of relying on motivation, streaks, or gamification, the product focuses on recovery after lapses and cumulative progress that never resets. By reframing discomfort as practice and missed days as normal pauses rather than failures, Daily Dose of Discomfort helps users follow through more reliably, build self-trust, and develop a resilient sense of discipline through action rather than perfection.",
        driveLink: "https://docs.google.com/presentation/d/1Uqmer2SHtuH1358KXAQd3PBnbc-aTsex55c0f504e9w/edit?usp=sharing",
        githubLink: "https://github.com/vanshiith/daily-dose-of-discomfort",
      },
      {
        title: "SortMyMail",
        description: "An AI-powered Gmail organizer that automatically classifies emails into custom categories like newsletters, receipts, and client work while keeping users fully in control. Uses GPT-4o-mini to analyze inbox activity and propose label suggestions with a transparent 'AI suggests, you decide' workflow. Built with Next.js, FastAPI, PostgreSQL, and Gmail API.",
        driveLink: "https://docs.google.com/presentation/d/1FrZI4BZOhO7Igjr_FNk_BsjLEcZkyTBdl-lQBBfnGjw/edit?usp=sharing",
        githubLink: "https://github.com/vanshiith/sortmymail.ai",
      },
      {
        title: "BetOnMe",
        description: "A habit-tracking web app that uses financial commitment contracts to close the gap between users' intentions and actions. Users create custom habits, assign real monetary stakes, and face automatic donations to charity when they miss check-ins, leveraging behavioral economics principles to increase follow-through. Built with Next.js, Supabase, and automated email/cron systems.",
        driveLink: "https://docs.google.com/presentation/d/1AfX_YfQQAt2qAVYjJgUzRexZCTpNKttNKe_tPjYRlKY/edit?usp=sharing",
        githubLink: "https://github.com/vanshiith/bet-on-me",
      },
      {
        title: "BVK - Future Urban Leaders Brand Strategy",
        description: "Led a two-week brand strategy sprint for a nonprofit to clarify positioning and unlock donor interest. Conducted stakeholder interviews, audience research, and competitive analysis to identify core problems and define clear value propositions. Translated insights into positioning, messaging framework, and campaign assets for immediate use in driving partnerships and funding.",
        driveLink: "https://drive.google.com/file/d/1ohg0ybbURmwxM99UP5sGYIMdsEdfOB6g/view?usp=sharing",
        githubLink: null,
      },
      {
        title: "Juiced! Cold Pressed Juicery - Strategy",
        description: "Led a fast, insight-driven brand and go-to-market sprint to improve retail clarity and sales momentum. Conducted customer interviews, in-store observations, and competitive scans to identify friction in assortment, pricing, and messaging. Delivered positioning, partner-facing sales tools, and promotion recommendations that improved sell-through and made the brand easier for retailers and customers.",
        driveLink: "https://drive.google.com/drive/folders/1tgrSPEw2ephLzktyyoyYH83ciVcPJkkr?usp=sharing",
        githubLink: null,
      },
    ];

    projectsData.forEach((p, index) => {
      this.projects.set(index + 1, { ...p, id: index + 1 });
    });

    // Seed Experience - PM-focused roles from LinkedIn
    const experienceData = [
      {
        role: "GTM Manager",
        company: "Outhad AI",
        duration: "October 2025 - Present",
        description: "I treated every channel like an experiment. Ran A/B tests, tracked what actually moved the needle, then doubled down. That systematic approach drove a 35% lift in discovery calls and helped us break into two entirely new verticals. I don't just execute campaigns; I find the markets and figure out how to win them.",
      },
      {
        role: "Product Manager",
        company: "First National Bank & Trust Company",
        duration: "August 2025 - December 2025",
        description: "I walked into a complex problem: 30 branches, 130K customers, and no clear path forward. Built the dashboards, interviewed 25 stakeholders, modeled the scenarios, and delivered a roadmap projecting 22% OPEX cuts and 19% ROI lift. Then I spotted the fraud team drowning in manual work, built them an automation, and shipped it. I think strategically, but I also get things done.",
      },
      {
        role: "Strategy & Insights Intern",
        company: "BVK Associates",
        duration: "June 2025 - August 2025",
        description: "I had 2 weeks to turn client ambiguity into complete brand strategies. Through 15+ rapid interviews and competitive research, I synthesized the noise into positioning frameworks that worked across healthcare, travel, and higher-ed. Then I made sure it mattered: built enablement docs, tracked performance, and turned data into narratives that shifted real budget decisions. I move fast through uncertainty and make strategy actionable.",
      }
    ];

    experienceData.forEach((e, index) => {
      this.experience.set(index + 1, { ...e, id: index + 1 });
    });

    // Seed Education
    const educationData = [
      {
        degree: "Bachelor of Arts - Business Management & Computer Science",
        school: "Beloit College",
        year: "2022 - 2026",
      }
    ];

    // Note: Extracurriculars stored separately for display flexibility
    const educationExtracurriculars = "Extracurriculars: Men's Varsity Track & Field, Marketing Club, Data Science Club, Asia Pacific Student Association";

    educationData.forEach((e, index) => {
      this.education.set(index + 1, { ...e, id: index + 1 });
    });

    // Seed Skills
    const skillsData = [
      {
        category: "Product",
        items: ["Product Strategy", "Roadmapping", "Go-to-Market", "Market Research", "Competitive Analysis", "Data-Driven Decisions", "Analytics & Experimentation", "User Research", "Stakeholder Communication"],
      },
      {
        category: "Technical",
        items: ["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "REST APIs", "Docker", "AWS", "Figma", "GPT-4", "AI Integration", "Prompt Engineering", "CI/CD"],
      },
      {
        category: "Core",
        items: ["Problem Solving", "Storytelling", "Leadership", "Prioritization", "Agile", "Customer Interviews", "Data Analysis", "Rapid Prototyping"],
      },
    ];

    skillsData.forEach((s, index) => {
      this.skills.set(index + 1, { ...s, id: index + 1 });
    });
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

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }
}

export const storage = new MemStorage();
