import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/Oshadee.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(177,18,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(177,18,38,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#B11226]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#8B0000]/5 blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid md:grid-cols-2 gap-12 items-center pt-24 pb-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div variants={itemVariants} className="mb-3">
            <span className="text-[#B11226] text-sm font-semibold tracking-widest uppercase font-display">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-[#F5F5F5] whitespace-nowrap"
          >
            Oshadee <span className="text-gradient">Bindiya</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg font-medium mb-3 tracking-wide leading-loose"
          >
            Computer Science Undergraduate<br />UI/UX &amp; Full Stack Developer
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            Building impactful digital experiences through{' '}
            <span className="text-[#B11226] font-medium">design, development,</span> and{' '}
            <span className="text-[#B11226] font-medium">innovation.</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="btn-primary flex items-center gap-2">
                View Projects
                <FiArrowDown size={16} />
              </button>
            </Link>
            <a href="/Oshadee_CV.pdf" download="Oshadee_Bindiya_CV.pdf" className="btn-outline flex items-center gap-2">
              <FiDownload size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a
              href="https://github.com/oshadeew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#B11226] transition-colors duration-200"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/oshadee-waduge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#B11226] transition-colors duration-200"
            >
              <FaLinkedin size={22} />
            </a>
            <div className="w-16 h-[1px] bg-[#2a2a2a]" />
            <span className="text-gray-600 text-xs tracking-widest">SCROLL DOWN</span>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#B11226] to-[#8B0000] opacity-60 blur-md animate-pulse" />
            {/* Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-[#B11226]/40">
              <img
                src={profileImg}
                alt="Oshadee"
                className="w-full h-full object-cover animate-float"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border border-[#B11226]/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-[#B11226]/30" />
            </div>

          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-gray-600 hover:text-[#B11226] transition-colors"
          >
            <FiArrowDown size={24} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
