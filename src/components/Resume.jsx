import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiDownload, FiEye } from 'react-icons/fi';

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

export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B11226] text-sm font-semibold tracking-widest uppercase font-display">
              Resume
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#B11226]/50 to-transparent" />
          </div>
          <h2 className="section-title">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="section-subtitle">A summary of my education, experience, and skills</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Preview panel */}
            <div className="bg-[#0B0B0B] border border-[#2a2a2a] rounded-2xl p-8 flex flex-col items-center justify-center min-h-64 hover:border-[#B11226]/30 transition-colors">
              <div className="w-16 h-20 bg-[#1A1A1A] border border-[#B11226]/30 rounded-lg flex items-center justify-center mb-4 relative">
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#B11226]/50 rounded-full animate-pulse" />
                <span className="text-[#B11226] font-bold text-xs font-display">PDF</span>
              </div>
              <p className="text-gray-400 text-sm text-center mb-6 max-w-xs">
                My resume covers my academic background, technical skills, project experience, and leadership roles.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.a
                  href="/Oshadee_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="btn-primary flex items-center gap-2 text-sm"
                >
                  <FiEye size={15} />
                  View Resume
                </motion.a>
                <motion.a
                  href="/cv.pdf"
                  download="Oshadee_Bindiya_CV.pdf"
                  whileHover={{ scale: 1.02 }}
                  className="btn-outline flex items-center gap-2 text-sm"
                >
                  <FiDownload size={15} />
                  Download CV
                </motion.a>
              </div>
            </div>

            {/* Quick highlights */}
            <div className="space-y-4">
              {[
                {
                  label: 'Education',
                  value: 'B.Sc(Hons) Computer Science',
                  sub: 'Second Year Undergraduate',
                },
                {
                  label: 'Core Skills',
                  value: 'Full Stack & UI/UX Development',
                  sub: 'React, Figma, Java, Python, Node.js, Firebase',
                },
                {
                  label: 'Key Projects',
                  value: '5+ Completed Projects',
                  sub: 'Web, Mobile, UI/UX, Systems, IoT',
                },
                {
                  label: 'Leadership',
                  value: 'IEEE RAS SBC of IIT',
                  sub: 'Assistant Secretary, Project Chairperson – RobotNexus 3.0, and more',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className="bg-[#0B0B0B] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#B11226]/40 transition-all"
                >
                  <span className="text-xs font-semibold text-[#B11226] uppercase tracking-widest">
                    {item.label}
                  </span>
                  <p className="text-[#F5F5F5] font-medium mt-1 font-display">{item.value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
