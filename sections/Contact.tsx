'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, MapPin, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { personalData } from '../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // mailto fallback
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus('sent'), 1000);
  };

  const contacts = [
    { icon: Mail, label: 'Email', value: personalData.email, href: `mailto:${personalData.email}` },
    { icon: Send, label: 'Telegram', value: '@armenter66', href: personalData.telegram },
    { icon: Linkedin, label: 'LinkedIn', value: 'Armen Barsehian', href: personalData.linkedin },
    { icon: Github, label: 'GitHub', value: 'armenter66', href: personalData.github },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="container-tight">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">06 — Contact</span>
            <div className="flex-1 h-px bg-surface-border max-w-xs" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <AnimatedSection>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Let's build
                <br />
                <span className="text-gradient">something great.</span>
              </h2>
              <p className="text-ink-300 leading-relaxed mb-10">
                I'm open to freelance projects, full-time remote roles, and long-term collaborations. Drop me a message and I'll get back to you within 24 hours.
              </p>
            </AnimatedSection>

            {/* Contact cards */}
            <div className="space-y-3">
              {contacts.map((c, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 glass rounded-xl border border-surface-border hover:border-accent/25 hover:bg-accent/5 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition">
                      <c.icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-500 font-mono">{c.label}</div>
                      <div className="text-sm text-white font-medium">{c.value}</div>
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3} className="mt-8">
              <div className="flex items-center gap-2 text-sm text-ink-500">
                <MapPin size={14} />
                {personalData.location} — Remote worldwide
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <AnimatedSection delay={0.15}>
            <div className="glass rounded-2xl p-7 border border-surface-border">
              <h3 className="font-display font-semibold text-white text-lg mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs text-ink-400 font-mono mb-2">Your name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-white text-sm placeholder-ink-600 focus:outline-none focus:border-accent/50 focus:bg-surface-card transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-ink-400 font-mono mb-2">Email address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-white text-sm placeholder-ink-600 focus:outline-none focus:border-accent/50 focus:bg-surface-card transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-ink-400 font-mono mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-white text-sm placeholder-ink-600 focus:outline-none focus:border-accent/50 focus:bg-surface-card transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'sending' || status === 'sent'}
                  className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-light text-white font-medium text-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === 'idle' && <><Send size={14} /> Send message</>}
                  {status === 'sending' && 'Opening mail client...'}
                  {status === 'sent' && '✓ Message ready!'}
                </motion.button>

                <p className="text-xs text-ink-600 text-center">
                  Will open your email client with the message pre-filled.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
