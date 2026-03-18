import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'techstack' },
  { label: 'Projects', to: 'projects' },
  { label: 'Resume', to: 'resume' },
  { label: 'Contact', to: 'contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#1a1a1a] py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo & tagline */}
          <div>
            <Link to="hero" smooth duration={500} className="cursor-pointer">
              <span className="font-display text-2xl font-bold text-gradient">OB</span>
            </Link>
            <p className="text-gray-600 text-sm mt-1 max-w-xs">
              Building impactful digital experiences through design, development, and innovation.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="text-gray-500 hover:text-[#B11226] text-sm transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              { icon: <FiGithub size={18} />, url: 'https://github.com/oshadeew' },
              { icon: <FiLinkedin size={18} />, url: 'https://www.linkedin.com/in/oshadee-waduge/' },
              { icon: <FiMail size={18} />, url: 'mailto:oshadeewaduge@gmail.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[#2a2a2a] flex items-center justify-center text-gray-500 hover:text-[#B11226] hover:border-[#B11226]/40 transition-all hover:bg-[#B11226]/5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-gray-600 text-xs">
          <p>© {new Date().getFullYear()} Oshadee Bindiya. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <FiHeart size={11} className="text-[#B11226]" /> using React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
