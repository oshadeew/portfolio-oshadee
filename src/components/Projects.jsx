import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    number: '01',
    title: 'BlokC – Smart Modular Cubes',
    description:
      'An IoT-based early childhood learning system using smart modular cubes to make STEM education interactive and engaging. Features real-time feedback, gamified learning modules, and parent monitoring.',
    tech: ['React Native', 'Node.js', 'Firebase', 'IoT'],
    category: 'IoT / Mobile App',
    color: '#B11226',
    github: '#',
    live: null,
  },
  {
    number: '02',
    title: 'Inner Bliss – Mental Wellness App',
    description:
      'A comprehensive full-stack mental wellness platform with mood tracking, guided breathing, affirmations, neuro-health assessments, simulated heart rate checker, music therapy, and emergency contacts.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'Full Stack / UI/UX',
    color: '#8B0000',
    github: '#',
    live: null,
  },
  {
    number: '03',
    title: 'Harmonia – SDG UX/UI Design',
    description:
      'A thoughtfully crafted UI/UX design for a health and well-being platform aligned with SDG 3 – Good Health & Well-being. Includes user research, wireframes, and high-fidelity prototypes in Figma.',
    tech: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'UI/UX Design',
    color: '#B11226',
    github: null,
    live: '#',
  },
  {
    number: '04',
    title: 'Life Below Water Website',
    description:
      'An awareness website built to highlight SDG 14 – Life Below Water. Features immersive storytelling, interactive data visualizations, and accessibility-first design to educate visitors on ocean conservation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web Development',
    color: '#8B0000',
    github: '#',
    live: '#',
  },
  {
    number: '05',
    title: 'Theater Ticket Booking System',
    description:
      'A Java-based multi-threaded ticket booking simulation with shared resources, mutex locks, and concurrency control. Demonstrates OS-level thread management concepts.',
    tech: ['Java', 'Multi-threading', 'Concurrency', 'OOP'],
    category: 'Java Concurrent Programming',
    color: '#B11226',
    github: '#',
    live: null,
  },
];

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B11226] text-sm font-semibold tracking-widest uppercase font-display">
              Projects
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#B11226]/50 to-transparent" />
          </div>
          <h2 className="section-title">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">Projects that showcase my skills and interests</p>
        </AnimatedSection>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-[#1A1A1A] border border-[#2a2a2a] rounded-2xl p-6 md:p-8 hover:border-[#B11226]/50 hover:shadow-[0_0_40px_rgba(177,18,38,0.1)] transition-all duration-300"
              >
                {/* Glow accent */}
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: project.color }}
                />

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Number */}
                  <span
                    className="font-display text-4xl font-bold opacity-15 group-hover:opacity-30 transition-opacity shrink-0"
                    style={{ color: project.color }}
                  >
                    {project.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-xs font-medium text-[#B11226] bg-[#B11226]/10 px-2.5 py-1 rounded-full mb-2 inline-block">
                          {project.category}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-[#F5F5F5] group-hover:text-gradient transition-all">
                          {project.title}
                        </h3>
                      </div>
                      {/* Links */}
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            className="text-gray-500 hover:text-[#B11226] transition-colors p-1.5 hover:bg-[#B11226]/10 rounded-lg"
                            title="GitHub"
                          >
                            <FiGithub size={18} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            className="text-gray-500 hover:text-[#B11226] transition-colors p-1.5 hover:bg-[#B11226]/10 rounded-lg"
                            title="Live Demo"
                          >
                            <FiExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full border border-[#2a2a2a] text-gray-400 bg-[#0B0B0B] hover:border-[#B11226]/40 hover:text-[#B11226] transition-colors cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
