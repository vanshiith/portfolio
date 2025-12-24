import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, FileText, Code, Database, Users, Zap } from "lucide-react";
import { useProjects, useExperience, useEducation, useSkills } from "@/hooks/use-portfolio";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: experience, isLoading: experienceLoading } = useExperience();
  const { data: education, isLoading: educationLoading } = useEducation();
  const { data: skills, isLoading: skillsLoading } = useSkills();

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
        {experienceLoading ? (
          <div className="space-y-8 animate-pulse">
            {[1, 2].map((i) => (
              <div key={i} className="pl-8 border-l-2 border-dashed border-gray-300">
                <div className="h-6 bg-gray-300 w-1/3 mb-4 rounded"></div>
                <div className="h-4 bg-gray-200 w-full mb-2 rounded"></div>
                <div className="h-4 bg-gray-200 w-2/3 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {experience?.map((exp, idx) => (
              <ExperienceItem key={exp.id} experience={exp} index={idx} />
            ))}
            
            {experience?.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-black bg-white p-8">
                <Users className="mx-auto w-12 h-12 text-gray-400 mb-4" />
                <p>No experience entries found.</p>
              </div>
            )}
            
            <div className="border-2 border-black p-6 bg-accent shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="mb-4 font-mono text-sm">Want a more holistic view of my professional journey?</p>
              <a href="https://linkedin.com/in/vanshith" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-4 py-2 font-bold border-2 border-black hover:bg-primary transition-colors">
                VISIT LINKEDIN →
              </a>
            </div>
          </div>
        )}
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="PROJECT_GRID" className="bg-white">
        {projectsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-100 border-2 border-gray-200 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects?.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
             {projects?.length === 0 && (
              <div className="col-span-full text-center py-12 border-2 border-dashed border-black bg-gray-50 p-8">
                <Code className="mx-auto w-12 h-12 text-gray-400 mb-4" />
                <p>No projects loaded.</p>
              </div>
            )}
          </div>
        )}
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="SKILL_SET">
        {skillsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-gray-200 rounded border-2 border-gray-300"></div>
            ))}
          </div>
        ) : (
          <>
            {skills && skills.length > 0 ? (
              <SkillsSection skills={skills} />
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-black bg-white p-8">
                <Zap className="mx-auto w-12 h-12 text-gray-400 mb-4" />
                <p>No skills loaded.</p>
              </div>
            )}
          </>
        )}
      </Section>

      {/* Education Section */}
      <Section id="education" title="EDU_HISTORY">
        {educationLoading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-24 bg-gray-200 rounded"></div>
          </div>
        ) : (
          <div className="grid gap-6">
            {education?.map((edu, idx) => (
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
             {education?.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-black bg-white p-8">
                <FileText className="mx-auto w-12 h-12 text-gray-400 mb-4" />
                <p>No education history found.</p>
              </div>
            )}
          </div>
        )}
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
