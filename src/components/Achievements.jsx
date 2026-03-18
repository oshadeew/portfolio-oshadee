import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiAward, FiStar } from 'react-icons/fi';

const achievements = [
  {
    title: 'CodeRally 6.0',
    badge: 'Advanced Tier',
    description: 'Competed in the Advanced Tier of CodeRally 6.0, demonstrating strong algorithmic problem-solving and competitive programming skills.',
    icon: <FiAward />,
    color: '#B11226',
  },
  {
    title: 'IET Summercamp',
    badge: 'Distinction',
    description: 'Awarded Distinction at IET Summercamp, recognizing exceptional performance and innovation during the program.',
    icon: <FiStar />,
    color: '#8B0000',
  },
  {
    title: 'Figma for UX Design',
    badge: 'Certified',
    description: 'Completed the Figma for UX Design certification on LinkedIn Learning, covering wireframing, prototyping, and design systems.',
    icon: <FiAward />,
    color: '#B11226',
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

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B11226] text-sm font-semibold tracking-widest uppercase font-display">
              Achievements
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#B11226]/50 to-transparent" />
          </div>
          <h2 className="section-title">
            Achievements &amp; <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">Recognition of hard work and continuous learning</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group bg-[#1A1A1A] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#B11226]/50 hover:shadow-[0_0_30px_rgba(177,18,38,0.12)] transition-all duration-300 h-full"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-lg transition-all group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.color}15`,
                    border: `1px solid ${item.color}40`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>
                {/* Badge */}
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full mb-3 inline-block"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.badge}
                </span>
                <h3 className="font-display text-lg font-bold text-[#F5F5F5] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
