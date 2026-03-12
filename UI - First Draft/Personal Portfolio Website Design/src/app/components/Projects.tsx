import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, responsive e-commerce platform with real-time inventory management and secure payment integration.",
    image: "https://images.unsplash.com/photo-1659050818222-5532a7829571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcGluayUyMGFlc3RoZXRpYyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzMzMjk3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "#e8a5a5",
  },
  {
    title: "Task Management App",
    description: "An intuitive task management application with drag-and-drop functionality and team collaboration features.",
    image: "https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGxhcHRvcHxlbnwxfHx8fDE3NzMzMjk3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["TypeScript", "React", "Firebase", "Tailwind"],
    color: "#d4a5d4",
  },
  {
    title: "Portfolio Website Builder",
    description: "A user-friendly platform that helps creatives build beautiful portfolio websites without coding.",
    image: "https://images.unsplash.com/photo-1769610712786-60f5f6e727ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwcGluayUyMGZsb3JhbCUyMHBhdHRlcm58ZW58MXx8fHwxNzczMzI5NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "PostgreSQL", "Vercel", "CSS"],
    color: "#ffc1d4",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-[#fef7f5]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#e8a5a5] mb-4 border border-[#ffd9e4]">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#4a3d3d]">
            Projects I'm Proud Of
          </h2>
          <p className="text-lg text-[#8d7373] max-w-2xl mx-auto">
            A collection of recent projects showcasing my skills and passion for creating
            impactful digital experiences
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-3xl bg-white border border-[#ffd9e4] hover:border-[#e8a5a5] hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <div
                  className={`relative rounded-2xl overflow-hidden order-2 ${
                    index % 2 === 0 ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  
                  {/* Decorative element */}
                  <div
                    className="absolute -top-3 -right-3 w-24 h-24 rounded-full opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-500"
                    style={{ backgroundColor: project.color }}
                  />
                </div>

                {/* Content */}
                <div
                  className={`space-y-5 order-1 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl text-[#4a3d3d] mb-3 group-hover:text-[#e8a5a5] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#8d7373] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full text-sm border"
                        style={{
                          backgroundColor: `${project.color}10`,
                          borderColor: `${project.color}30`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      className="border-2 border-[#e8a5a5] text-[#e8a5a5] hover:bg-[#e8a5a5] hover:text-white rounded-full transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-[#8d7373] hover:text-[#4a3d3d] hover:bg-[#fff5f7] rounded-full transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            variant="outline"
            className="border-2 border-[#e8a5a5] text-[#e8a5a5] hover:bg-[#e8a5a5] hover:text-white hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full"
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
