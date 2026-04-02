import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCheckCircle, FiUsers } from 'react-icons/fi';

const highlights = [
  {
    icon: <FiCode size={20} />,
    title: 'Full Stack Development',
    description: 'Building end-to-end applications with modern frameworks and cloud technologies.',
  },
  {
    icon: <FiCheckCircle size={20} />,
    title: 'Software Testing & QA',
    description: 'Ensuring software quality through manual and automated testing, with a focus on reliability and user confidence.',
  },
  {
    icon: <FiUsers size={20} />,
    title: 'Leadership & Teamwork',
    description: 'Driving projects forward through collaboration, vision, and strategic planning.',
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

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B11226] text-sm font-semibold tracking-widest uppercase font-display">
              About Me
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#B11226]/50 to-transparent" />
          </div>
          <h2 className="section-title">
            Passionate About <span className="text-gradient">Technology</span>
            <br />& Creative Problem Solving
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left: Bio */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-5 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                I'm a passionate{' '}
                <span className="text-[#F5F5F5] font-medium">Computer Science undergraduate</span>{' '}
                with a strong foundation in software development and a genuine love for creating
                digital experiences that make a difference.
              </p>
              <p>
                My technical toolkit spans{' '}
                <span className="text-[#B11226] font-medium">
                  Python, Java, JavaScript, HTML, CSS, and SQL
                </span>
                , paired with hands-on experience in modern frameworks like{' '}
                <span className="text-[#B11226] font-medium">
                  React, React Native, Node.js, and Firebase
                </span>
                .
              </p>
              <p>
                I'm deeply interested in{' '}
                <span className="text-[#F5F5F5] font-medium">full-stack development and software quality assurance</span>{' '}
                — building reliable, scalable systems and ensuring they perform flawlessly through rigorous testing. I believe great software
                isn't just functional; it's tested, trusted, and built to last.
              </p>
              <p>
                Beyond code, I'm a{' '}
                <span className="text-[#F5F5F5] font-medium">natural leader and collaborator</span>{' '}
                - having served in key organizational and technical roles across IEEE communities and
                university events, leading multidisciplinary teams and delivering impactful outcomes.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Problem Solver', 'Team Leader', 'Creative Thinker', 'Fast Learner'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-[#B11226]/40 text-[#B11226] text-sm font-medium bg-[#B11226]/5 hover:bg-[#B11226]/10 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Highlight cards */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="card flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#B11226]/10 border border-[#B11226]/30 flex items-center justify-center text-[#B11226] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-[#F5F5F5] font-semibold mb-1 font-display">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { value: '5+', label: 'Projects' },
                  { value: '3+', label: 'Certifications' },
                  { value: '4+', label: 'Leadership Roles' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-4 text-center hover:border-[#B11226]/40 transition-colors"
                  >
                    <div className="text-2xl font-bold text-gradient font-display">{stat.value}</div>
                    <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
