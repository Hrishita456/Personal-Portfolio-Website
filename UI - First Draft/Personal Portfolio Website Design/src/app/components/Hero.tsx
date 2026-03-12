import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #ffd9e4 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #e8a5a5 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.25, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#ffd9e4] to-[#f5e6e8] text-[#4a3d3d]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-sm tracking-wide">✨ Welcome to my portfolio</p>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#e8a5a5] via-[#d98989] to-[#d4a5d4] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hrishita Singh
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#8d7373] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Electrical Engineering Undergraduate at IIT Kanpur
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-[#8d7373] max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Crafting elegant solutions with modern technologies. Passionate about building
            beautiful, user-centered digital experiences that make a difference.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-[#e8a5a5] to-[#d98989] text-white hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-[#e8a5a5] text-[#4a3d3d] hover:bg-[#ffd9e4] hover:border-[#d98989] hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-5 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white border border-[#ffd9e4] text-[#e8a5a5] hover:bg-[#ffd9e4] hover:text-[#4a3d3d] hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white border border-[#ffd9e4] text-[#e8a5a5] hover:bg-[#ffd9e4] hover:text-[#4a3d3d] hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sarah@example.com"
              className="p-3 rounded-full bg-white border border-[#ffd9e4] text-[#e8a5a5] hover:bg-[#ffd9e4] hover:text-[#4a3d3d] hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6 text-[#e8a5a5] opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}