import { motion } from "framer-motion";
import { Skill } from "@shared/schema";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {skills.map((skillGroup, idx) => (
        <motion.div
          key={skillGroup.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <h3 className="text-lg font-bold mb-4 pb-3 border-b-2 border-black">{skillGroup.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((item, itemIdx) => (
              <span
                key={itemIdx}
                className="inline-block bg-primary text-white px-3 py-1 text-sm font-bold border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
