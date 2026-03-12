import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-[#ffd9e4]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl bg-gradient-to-r from-[#e8a5a5] to-[#d4a5d4] bg-clip-text text-transparent mb-2">
              Hrishita Singh
            </h3>
            <p className="text-sm text-[#8d7373]">Electrical Engineering Undergraduate at IIT Kanpur</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#fff5f7] border border-[#ffd9e4] text-[#e8a5a5] hover:bg-[#ffd9e4] hover:text-[#4a3d3d] hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#fff5f7] border border-[#ffd9e4] text-[#e8a5a5] hover:bg-[#ffd9e4] hover:text-[#4a3d3d] hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hrishita@example.com"
              className="p-3 rounded-full bg-[#fff5f7] border border-[#ffd9e4] text-[#e8a5a5] hover:bg-[#ffd9e4] hover:text-[#4a3d3d] hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#ffd9e4] text-center">
          <p className="text-sm text-[#8d7373] flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#e8a5a5] fill-[#e8a5a5]" /> © 2026 Hrishita
            Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}