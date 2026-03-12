import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Heart, Code2 } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff5f7] text-[#e8a5a5] mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#4a3d3d]">
            Nice to meet you!
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e8a5a5] to-[#d4a5d4] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1770626894265-bdb99db109f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzczMzI5NzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e8a5a5]/30 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ffd9e4] rounded-full opacity-60 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#f5e6e8] rounded-full opacity-60 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#4a3d3d] leading-relaxed">
              I'm a recent computer science graduate with a passion for creating beautiful,
              functional web applications. My journey in tech started with a curiosity about
              how things work, and has evolved into a love for crafting digital experiences.
            </p>
            
            <p className="text-lg text-[#4a3d3d] leading-relaxed">
              With a strong foundation in modern web technologies and a keen eye for design,
              I bring both technical expertise and creative thinking to every project. I believe
              that the best solutions come from understanding both the user's needs and the
              elegance of clean code.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#fff5f7] to-[#ffe6ec] border border-[#ffd9e4]">
                <div className="p-3 rounded-full bg-white">
                  <Code2 className="w-5 h-5 text-[#e8a5a5]" />
                </div>
                <div>
                  <h3 className="text-[#4a3d3d] mb-1">Clean Code Enthusiast</h3>
                  <p className="text-sm text-[#8d7373]">
                    Writing maintainable, efficient, and elegant solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#f5e6e8] to-[#ffd9e4] border border-[#e8a5a5]">
                <div className="p-3 rounded-full bg-white">
                  <Heart className="w-5 h-5 text-[#e8a5a5]" />
                </div>
                <div>
                  <h3 className="text-[#4a3d3d] mb-1">User-Centered Design</h3>
                  <p className="text-sm text-[#8d7373]">
                    Creating experiences that users love and remember
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
