import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, FileText, Code, Database, Users, Zap } from "lucide-react";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SkillsSection } from "@/components/SkillsSection";

// Static Data
const PROJECTS = [
  {
    id: 1,
    title: "Sipit (Work in Progress)",
    description: "A product-led social discovery app that blends local café recommendations with community building. Users rate cafés across key experience metrics and log visits through reviews or gallery posts. A built-in incentive loop rewards engagement by unlocking real-world social connections every 10 visits, turning discovery into habit and community into retention.",
    driveLink: "https://www.figma.com/proto/YK3nh9gcOugxTWlZFMD8S0/Sip-It?node-id=50-28109&t=GpDqa89GtJ7PVXVR-1",
    githubLink: null,
  },
  {
    id: 2,
    title: "Daily Dose of Discomfort",
    description: "Daily Dose of Discomfort is a lightweight habit-building product designed to help people build consistency by taking one small, intentionally uncomfortable action each day and logging it as proof of the identity they want to become. Instead of relying on motivation, streaks, or gamification, the product focuses on recovery after lapses and cumulative progress that never resets. By reframing discomfort as practice and missed days as normal pauses rather than failures, Daily Dose of Discomfort helps users follow through more reliably, build self-trust, and develop a resilient sense of discipline through action rather than perfection.",
    driveLink: "https://docs.google.com/presentation/d/1Uqmer2SHtuH1358KXAQd3PBnbc-aTsex55c0f504e9w/edit?usp=sharing",
    githubLink: "https://github.com/vanshiith/daily-dose-of-discomfort",
  },
  {
    id: 3,
    title: "Speed Reader",
    description: "A research-backed mobile app that helps users develop speed reading skills using RSVP (Rapid Serial Visual Presentation) with ORP (Optimal Recognition Point) highlighting. Users import text files, track reading progress across their library, and adjust speed from 100-600 WPM while the app highlights the optimal recognition point to help the brain process words faster. Includes comprehension quizzes to validate understanding at higher speeds. Built with React Native, Expo, Zustand, and SQLite.",
    driveLink: null,
    githubLink: "https://github.com/vanshiith/speedreader",
  },
  {
    id: 4,
    title: "SortMyMail",
    description: "An AI-powered Gmail organizer that automatically classifies emails into custom categories like newsletters, receipts, and client work while keeping users fully in control. Uses GPT-4o-mini to analyze inbox activity and propose label suggestions with a transparent 'AI suggests, you decide' workflow. Built with Next.js, FastAPI, PostgreSQL, and Gmail API.",
    driveLink: "https://docs.google.com/presentation/d/1FrZI4BZOhO7Igjr_FNk_BsjLEcZkyTBdl-lQBBfnGjw/edit?usp=sharing",
    githubLink: "https://github.com/vanshiith/sortmymail.ai",
  },
  {
    id: 5,
    title: "BetOnMe",
    description: "A habit-tracking web app that uses financial commitment contracts to close the gap between users' intentions and actions. Users create custom habits, assign real monetary stakes, and face automatic donations to charity when they miss check-ins, leveraging behavioral economics principles to increase follow-through. Built with Next.js, Supabase, and automated email/cron systems.",
    driveLink: "https://docs.google.com/presentation/d/1AfX_YfQQAt2qAVYjJgUzRexZCTpNKttNKe_tPjYRlKY/edit?usp=sharing",
    githubLink: "https://github.com/vanshiith/bet-on-me",
  },
  {
    id: 6,
    title: "BVK - Future Urban Leaders Brand Strategy",
    description: "Led a two-week brand strategy sprint for a nonprofit to clarify positioning and unlock donor interest. Conducted stakeholder interviews, audience research, and competitive analysis to identify core problems and define clear value propositions. Translated insights into positioning, messaging framework, and campaign assets for immediate use in driving partnerships and funding.",
    driveLink: "https://drive.google.com/file/d/1ohg0ybbURmwxM99UP5sGYIMdsEdfOB6g/view?usp=sharing",
    githubLink: null,
  },
  {
    id: 7,
    title: "Juiced! Cold Pressed Juicery - Strategy",
    description: "Led a fast, insight-driven brand and go-to-market sprint to improve retail clarity and sales momentum. Conducted customer interviews, in-store observations, and competitive scans to identify friction in assortment, pricing, and messaging. Delivered positioning, partner-facing sales tools, and promotion recommendations that improved sell-through and made the brand easier for retailers and customers.",
    driveLink: "https://drive.google.com/drive/folders/1tgrSPEw2ephLzktyyoyYH83ciVcPJkkr?usp=sharing",
    githubLink: null,
  },
];

const EXPERIENCE = [
  {
    id: 1,
    role: "GTM Manager",
    company: "Outhad AI",
    duration: "October 2025 - Present",
    description: "I treated every channel like an experiment. Ran A/B tests, tracked what actually moved the needle, then doubled down. That systematic approach drove a 35% lift in discovery calls and helped us break into two entirely new verticals. I don't just execute campaigns; I find the markets and figure out how to win them.",
  },
  {
    id: 2,
    role: "Product Manager",
    company: "First National Bank & Trust Company",
    duration: "August 2025 - December 2025",
    description: "I walked into a complex problem: 30 branches, 130K customers, and no clear path forward. Built the dashboards, interviewed 25 stakeholders, modeled the scenarios, and delivered a roadmap projecting 22% OPEX cuts and 19% ROI lift. Then I spotted the fraud team drowning in manual work, built them an automation, and shipped it. I think strategically, but I also get things done.",
  },
  {
    id: 3,
    role: "Strategy & Insights Intern",
    company: "BVK Associates",
    duration: "June 2025 - August 2025",
    description: "I had 2 weeks to turn client ambiguity into complete brand strategies. Through 15+ rapid interviews and competitive research, I synthesized the noise into positioning frameworks that worked across healthcare, travel, and higher-ed. Then I made sure it mattered: built enablement docs, tracked performance, and turned data into narratives that shifted real budget decisions. I move fast through uncertainty and make strategy actionable.",
  },
];

const SKILLS = [
  {
    id: 1,
    category: "Product",
    items: ["Product Strategy", "Roadmapping", "Go-to-Market", "Market Research", "Competitive Analysis", "Data-Driven Decisions", "Analytics & Experimentation", "User Research", "Stakeholder Communication"],
  },
  {
    id: 2,
    category: "Technical",
    items: ["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "PostgreSQL", "REST APIs", "Docker", "AWS", "Figma", "GPT-4", "AI Integration", "Prompt Engineering", "CI/CD"],
  },
  {
    id: 3,
    category: "Core",
    items: ["Problem Solving", "Storytelling", "Leadership", "Prioritization", "Agile", "Customer Interviews", "Data Analysis", "Rapid Prototyping"],
  },
];

const EDUCATION = [
  {
    id: 1,
    school: "Beloit College",
    degree: "Bachelor of Arts - Business Management & Computer Science",
    year: "2022 - 2026",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono selection:bg-primary selection:text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <header className="min-h-[90vh] flex flex-col justify-center relative border-b-2 border-black px-4 pb-16 bg-[#f8f8f0]">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border-2 border-black bg-accent font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-sm md:text-base">
              HELLO_WORLD.INIT
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tighter leading-none">
              VANSHITH<br/>
              <span className="text-stroke text-transparent bg-clip-text bg-black md:text-stroke-2">BHANDARI</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary block"></span>
              PRODUCT MANAGER & BUILDER
            </h2>
            
            <p className="text-lg md:text-xl max-w-3xl mb-6 font-sans leading-relaxed border-l-4 border-primary pl-6 py-2 bg-white/50">
              I sit comfortably between people and systems. I started learning to build the scrappy way, working with my dad on a snack business in India, talking directly to customers, testing ideas, and figuring things out as we went. That taught me strategy grounded in real behavior, not theory.
            </p>
            
            <p className="text-lg md:text-xl max-w-3xl mb-6 font-sans leading-relaxed border-l-4 border-primary pl-6 py-2 bg-white/50">
              I lean just as hard into the technical side. I enjoy breaking down problems, working with data, and building simple tools to make ideas real. For me, creativity and technical thinking aren't separate lanes. The best work happens when insight, logic, and execution come together.
            </p>
            
            <p className="text-lg md:text-xl max-w-3xl mb-10 font-sans leading-relaxed border-l-4 border-primary pl-6 py-2 bg-white/50">
              Outside of this, I spend time on filmmaking and photography, which sharpens how I observe culture and human moments. Right now, I'm interested in building products and experiences that are thoughtful, useful, and well-designed, both emotionally and technically.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="retro-btn bg-primary text-white hover:bg-black hover:text-white">
                VIEW PROJECTS
              </a>
              <a href="https://drive.google.com/drive/folders/1jW8_gLGCxxdepbaBJxEsLPfM3WYihatA?usp=sharing" target="_blank" rel="noopener noreferrer" className="retro-btn">
                RESUME
              </a>
              <a href="https://linkedin.com/in/vanshith" target="_blank" rel="noopener noreferrer" className="retro-btn">
                LINKEDIN
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-20 pointer-events-none"></div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black"
        >
          <ArrowDown size={32} />
        </motion.div>
      </header>

      {/* Experience Section */}
      <Section id="experience" title="EXPERIENCE_LOG">
        <div className="space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <ExperienceItem key={exp.id} experience={exp} index={idx} />
          ))}
          
          <div className="border-2 border-black p-6 bg-accent shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <p className="mb-4 font-mono text-sm">Want a more holistic view of my professional journey?</p>
            <a href="https://linkedin.com/in/vanshith" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-4 py-2 font-bold border-2 border-black hover:bg-primary transition-colors">
              VISIT LINKEDIN →
            </a>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="PROJECT_GRID" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="SKILL_SET">
        <SkillsSection skills={SKILLS} />
      </Section>

      {/* Education Section */}
      <Section id="education" title="EDU_HISTORY">
        <div className="grid gap-6">
            {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold">{edu.school}</h3>
                <span className="text-sm bg-accent px-2 py-1 font-bold border border-black">{edu.year}</span>
              </div>
              <p className="text-gray-700 font-sans italic mb-3">{edu.degree}</p>
              <p className="text-gray-700 font-sans">Extracurriculars: Men's Varsity Track & Field, Marketing Club, Data Science Club, Asia Pacific Student Association</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4 border-t-4 border-primary">
        <div className="container mx-auto max-w-5xl text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">VANSHITH BHANDARI</h2>
              <p className="text-gray-400 font-mono text-sm">PRODUCT MANAGER // BUILDER // STRATEGIST</p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/vanshith" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black p-3 hover:bg-primary hover:text-white transition-colors border-2 border-white hover:border-primary shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:bhandarivanshith@gmail.com" 
                className="bg-white text-black p-3 hover:bg-primary hover:text-white transition-colors border-2 border-white hover:border-primary shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 font-mono">
            <p>© {new Date().getFullYear()} Vanshith Bhandari. All rights reserved.</p>
            <p className="mt-2 text-xs">BUILT WITH &lt;CODE /&gt; AND COFFEE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

