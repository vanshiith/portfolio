import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 border-b-2 border-black ${className}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="w-full md:w-1/4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold sticky top-8 bg-accent inline-block px-2 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              {title}
            </motion.h2>
          </div>
          <div className="w-full md:w-3/4">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
