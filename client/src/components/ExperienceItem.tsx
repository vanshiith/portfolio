import { motion } from "framer-motion";
import type { Experience } from "@shared/schema";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-8 last:mb-0 relative pl-8 border-l-2 border-dashed border-black"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-black border-2 border-white rounded-full"></div>
      
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
        <h3 className="text-xl font-bold">{experience.role}</h3>
        <span className="text-sm font-mono bg-black text-white px-2 py-0.5">{experience.duration}</span>
      </div>
      
      <h4 className="text-lg text-primary font-bold mb-3">{experience.company}</h4>
      
      <p className="text-gray-700 font-sans leading-relaxed text-sm md:text-base whitespace-pre-line">
        {experience.description}
      </p>
    </motion.div>
  );
}
