import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Send, Sparkles, Heart, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon. 💕");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-[#fff5f7]" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff5f7] text-[#e8a5a5] mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-[#4a3d3d]">
            Want to Collaborate?
          </h2>
          <p className="text-lg text-[#8d7373] max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#4a3d3d] mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-5 py-6 rounded-2xl border-2 border-[#ffd9e4] bg-white focus:border-[#e8a5a5] focus:ring-2 focus:ring-[#e8a5a5]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#4a3d3d] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-5 py-6 rounded-2xl border-2 border-[#ffd9e4] bg-white focus:border-[#e8a5a5] focus:ring-2 focus:ring-[#e8a5a5]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#4a3d3d] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-2xl border-2 border-[#ffd9e4] bg-white focus:border-[#e8a5a5] focus:ring-2 focus:ring-[#e8a5a5]/20 transition-all duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e8a5a5] to-[#d98989] text-white hover:shadow-lg hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#fff5f7] to-[#ffe6ec] border border-[#ffd9e4]">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-full bg-white">
                  <Mail className="w-6 h-6 text-[#e8a5a5]" />
                </div>
                <div>
                  <h3 className="text-xl text-[#4a3d3d] mb-2">Email Me</h3>
                  <a
                    href="mailto:hrishita@example.com"
                    className="text-[#e8a5a5] hover:text-[#d98989] transition-colors duration-300"
                  >
                    hrishita@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white">
                  <MessageCircle className="w-6 h-6 text-[#e8a5a5]" />
                </div>
                <div>
                  <h3 className="text-xl text-[#4a3d3d] mb-2">Let's Connect</h3>
                  <p className="text-[#8d7373] leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or
                    opportunities to be part of your vision.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#f5e6e8] to-[#ffd9e4] border border-[#e8a5a5]">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-white">
                  <Heart className="w-6 h-6 text-[#e8a5a5]" />
                </div>
                <div>
                  <h3 className="text-xl text-[#4a3d3d] mb-2">Looking For</h3>
                  <ul className="space-y-2 text-[#8d7373]">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e8a5a5]" />
                      Entry-level software engineering roles
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e8a5a5]" />
                      Freelance web development projects
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e8a5a5]" />
                      Collaboration opportunities
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <motion.div
              className="text-center p-6 rounded-2xl bg-white border border-[#ffd9e4]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-[#8d7373] italic">
                "The best way to predict the future is to create it."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}