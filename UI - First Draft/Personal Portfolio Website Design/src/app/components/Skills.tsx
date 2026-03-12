import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Palette, Database, Globe, Terminal, Sparkles } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code,
    color: "#e8a5a5",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
  },
  {
    category: "Design",
    icon: Palette,
    color: "#d4a5d4",
    items: ["Figma", "UI/UX", "Responsive Design", "Prototyping", "Wireframing"],
  },
  {
    category: "Backend",
    icon: Database,
    color: "#ffc1d4",
    items: ["Node.js", "Python", "PostgreSQL", "REST APIs", "MongoDB"],
  },
  {
    category: "Tools",
    icon: Terminal,
    color: "#d98989",
    items: ["Git", "VS Code", "npm/yarn", "Webpack", "Chrome DevTools"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-white to-[#fef7f5]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff5f7] text-[#e8a5a5] mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#4a3d3d]">
            What I Bring to the Table
          </h2>
          <p className="text-lg text-[#8d7373] max-w-2xl mx-auto">
            A diverse skill set combining technical expertise with creative problem-solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 rounded-3xl bg-white border border-[#ffd9e4] hover:border-[#e8a5a5] hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <skill.icon className="w-7 h-7" style={{ color: skill.color }} />
                </div>

                {/* Category */}
                <h3 className="text-xl text-[#4a3d3d] mb-4">{skill.category}</h3>

                {/* Items */}
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#8d7373]"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Decorative gradient overlay */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-[#fff5f7] to-[#f5e6e8] border border-[#ffd9e4]">
            <Globe className="w-5 h-5 text-[#e8a5a5]" />
            <p className="text-[#4a3d3d]">
              Always learning and exploring new technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
