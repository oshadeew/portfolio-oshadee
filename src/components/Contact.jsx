import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi';

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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, connect to a backend or service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#B11226] text-sm font-semibold tracking-widest uppercase font-display">
              Contact
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-[#B11226]/50 to-transparent" />
          </div>
          <h2 className="section-title">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#B11226]/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#B11226]/10 border border-[#B11226]/30 flex items-center justify-center text-[#B11226]">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                     <a
                      href="mailto:oshadeewaduge@gmail.com"
                      className="text-[#F5F5F5] hover:text-[#B11226] transition-colors text-sm font-medium"
                    >
                      oshadeewaduge@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-3">
                <p className="text-gray-500 text-sm uppercase tracking-widest">Find me on</p>
                {[
                  { icon: <FiGithub size={18} />, label: 'GitHub', url: 'https://github.com/oshadeew', handle: '@oshadeew' },
                  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/oshadee-waduge/', handle: 'Oshadee Bindiya' },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#B11226]/40 hover:shadow-[0_0_15px_rgba(177,18,38,0.08)] transition-all text-gray-400 hover:text-[#B11226]"
                  >
                    {social.icon}
                    <div>
                      <p className="text-[#F5F5F5] text-sm font-medium">{social.label}</p>
                      <p className="text-gray-500 text-xs">{social.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="bg-[#1A1A1A] border border-[#B11226]/20 rounded-2xl p-5">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Currently <span className="text-green-400 font-medium">open to opportunities</span> — internships, collaborations, freelance projects, and full-time roles. Don't hesitate to reach out!
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Doe' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-gray-400 text-sm mb-1.5 font-medium">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#F5F5F5] text-sm placeholder-gray-600 focus:outline-none focus:border-[#B11226]/60 focus:shadow-[0_0_0_2px_rgba(177,18,38,0.15)] transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-gray-400 text-sm mb-1.5 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  required
                  rows={5}
                  className="w-full bg-[#1A1A1A] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#F5F5F5] text-sm placeholder-gray-600 focus:outline-none focus:border-[#B11226]/60 focus:shadow-[0_0_0_2px_rgba(177,18,38,0.15)] transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
