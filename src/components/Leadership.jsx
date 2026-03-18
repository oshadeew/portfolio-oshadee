import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiUsers } from 'react-icons/fi';

const roles = [
  {
    org: 'IEEE RAS SBC of IIT',
    role: 'Assistant Secretary',
    description:
      'Managed organizational communications, coordinated events, and supported executive decisions for the IEEE Robotics & Automation Society student branch.',
    icon: <FiBriefcase />,
    type: 'Leadership',
  },
  {
    org: 'RobotNexus 3.0',
    role: 'Project Chairperson',
    description:
      'Led the planning and execution of RobotNexus 3.0 as Project Chairperson — overseeing logistics, team coordination, sponsorship, and event delivery.',
    icon: <FiUsers />,
    type: 'Event Leadership',
  },
  {
    org: 'IEEE RAS SBC of IIT',
    role: 'Membership Development Team',
    description:
      'Worked within the Membership Development Team to onboard, engage, and retain members through workshops, outreach initiatives, and community programs.',
    icon: <FiBriefcase />,
    type: 'Team Role',
  },
  {
    org: 'Vertex\'25 & Techtrek 3.0',
    role: 'Vice-chair of the Secretarial Team',
    description:
      'Served as Vice-chair of the Secretarial Team for Vertex\'25 and Techtrek 3.0, ensuring seamless documentation, scheduling, and inter-team coordination.',
    icon: <FiUsers />,
    type: 'Organizing Committee',
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

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B11226] text-sm font-semibold tracking-widest uppercase font-display">
              Leadership
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#B11226]/50 to-transparent" />
          </div>
          <h2 className="section-title">
            Leadership &amp; <span className="text-gradient">Activities</span>
          </h2>
          <p className="section-subtitle">Roles where I've led, organized, and collaborated</p>
        </AnimatedSection>

        {/* Timeline-style layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#B11226]/80 via-[#B11226]/30 to-transparent" />

          <div className="space-y-6 pl-12 md:pl-16">
            {roles.map((role, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-[18px] mt-5">
                  <motion.div
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    className="w-4 h-4 rounded-full bg-[#B11226] border-2 border-[#0B0B0B] shadow-[0_0_10px_rgba(177,18,38,0.6)]"
                  />
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0B0B0B] border border-[#2a2a2a] rounded-2xl p-5 md:p-6 hover:border-[#B11226]/40 hover:shadow-[0_0_20px_rgba(177,18,38,0.08)] transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-xs font-semibold text-[#B11226] bg-[#B11226]/10 px-2.5 py-1 rounded-full">
                        {role.type}
                      </span>
                      <h3 className="font-display text-lg font-bold text-[#F5F5F5] mt-2">{role.role}</h3>
                      <p className="text-gray-400 text-sm font-medium">{role.org}</p>
                    </div>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-[#B11226] shrink-0"
                      style={{ background: 'rgba(177,18,38,0.1)', border: '1px solid rgba(177,18,38,0.3)' }}
                    >
                      {role.icon}
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{role.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
