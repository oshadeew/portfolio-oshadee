import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython, SiJavascript, SiHtml5,
  SiReact, SiNodedotjs, SiFirebase, SiFigma, SiGit,
  SiMongodb, SiTailwindcss,
} from 'react-icons/si';
import { DiCss3, DiMysql } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { FiMonitor, FiGlobe, FiLayers } from 'react-icons/fi';

const categories = [
  {
    title: 'Languages',
    icon: <FiGlobe size={18} />,
    skills: [
      { name: 'Python', icon: <SiPython />, color: '#3776AB' },
      { name: 'Java', icon: <FaJava />, color: '#f89820' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
      { name: 'CSS', icon: <DiCss3 />, color: '#1572B6' },
      { name: 'SQL', icon: <DiMysql />, color: '#4479A1' },
    ],
  },
  {
    title: 'Frameworks & Tools',
    icon: <FiMonitor size={18} />,
    skills: [
      { name: 'React', icon: <SiReact />, color: '#61DAFB' },
      { name: 'React Native', icon: <TbBrandReactNative />, color: '#61DAFB' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
      { name: 'Git', icon: <SiGit />, color: '#F05032' },
    ],
  },
  {
    title: 'Concepts',
    icon: <FiLayers size={18} />,
    skills: [
      { name: 'OOP', icon: null, color: '#B11226' },
      { name: 'UI/UX Design', icon: null, color: '#B11226' },
      { name: 'Web Development', icon: null, color: '#B11226' },
      { name: 'IoT Fundamentals', icon: null, color: '#B11226' },
      { name: 'REST APIs', icon: null, color: '#B11226' },
    ],
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

export default function TechStack() {
  return (
    <section id="techstack" className="section-padding bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B11226] text-sm font-semibold tracking-widest uppercase font-display">
              Tech Stack
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#B11226]/50 to-transparent" />
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </AnimatedSection>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <AnimatedSection key={ci} delay={ci * 0.15}>
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[#B11226]">{cat.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-[#F5F5F5]">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={si}
                      whileHover={{ scale: 1.07, y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2.5 bg-[#0B0B0B] border border-[#2a2a2a] px-4 py-2.5 rounded-xl cursor-default group hover:border-[#B11226]/50 transition-all duration-300"
                    >
                      {skill.icon && (
                        <span
                          className="text-xl transition-all duration-300"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </span>
                      )}
                      {!skill.icon && (
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      )}
                      <span className="text-gray-300 text-sm font-medium group-hover:text-[#F5F5F5] transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
