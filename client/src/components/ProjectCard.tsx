import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="retro-card flex flex-col h-full"
    >
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-3 border-b-2 border-dashed border-black pb-2">{project.title}</h3>
        <p className="text-sm leading-relaxed text-gray-700 mb-6 font-sans">
          {project.description}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t-2 border-black">
        {project.driveLink && (
          <a
            href={project.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-bold bg-[#FFD057] border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            <ExternalLink size={16} />
            <span>Drive</span>
          </a>
        )}
        
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2 text-sm font-bold bg-[#E8E8E8] border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
