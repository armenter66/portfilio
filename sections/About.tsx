'use client';
import AnimatedSection from '../components/AnimatedSection';
import { personalData, experiences } from '../data/portfolio';
import { MapPin, Mail, ExternalLink } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-tight">
        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">02 — About</span>
            <div className="flex-1 h-px bg-surface-border max-w-xs" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Bio */}
          <div>
            <AnimatedSection>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Building the web
                <br />
                <span className="text-gradient">one pixel at a time.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-ink-300 leading-relaxed mb-4">
                I'm a Frontend & WordPress Developer based in Kyiv, Ukraine. With over 4 years in the field, I've helped startups, agencies, and established businesses build fast, beautiful, and high-converting websites.
              </p>
              <p className="text-ink-300 leading-relaxed mb-4">
                My background is cross-disciplinary — I have two master's degrees which sharpened my analytical thinking and client communication. In tech, I completed a rigorous Frontend bootcamp and have been building ever since.
              </p>
              <p className="text-ink-300 leading-relaxed mb-8">
                I work across the full frontend stack: from semantic HTML & CSS to React apps with TypeScript & Redux. On the CMS side, I build custom WordPress themes, WooCommerce shops, and multisite platforms.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-ink-300">
                  <MapPin size={14} className="text-accent" />
                  Kyiv, Ukraine — Open to Remote
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-300">
                  <Mail size={14} className="text-accent" />
                  {personalData.email}
                </div>
              </div>

              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors font-medium"
              >
                GitHub Portfolio <ExternalLink size={14} />
              </a>
            </AnimatedSection>
          </div>

          {/* Right: Experience timeline */}
          <div>
            <AnimatedSection delay={0.1}>
              <h3 className="font-display text-sm uppercase tracking-widest text-ink-400 mb-8">
                Work Experience
              </h3>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-3 top-2 bottom-0 w-px bg-surface-border" />

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <AnimatedSection key={i} delay={0.1 + i * 0.08}>
                    <div className="relative pl-10">
                      {/* Dot */}
                      <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-accent bg-surface flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>

                      <div className="glass rounded-2xl p-5 border border-surface-border hover:border-accent/20 transition-all">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <div className="font-semibold text-white text-sm">{exp.role}</div>
                            <div className="text-accent text-xs font-mono mt-0.5">{exp.company}</div>
                          </div>
                          <span className="text-xs text-ink-500 font-mono whitespace-nowrap">{exp.period}</span>
                        </div>
                        <ul className="space-y-1">
                          {exp.tasks.map((task, j) => (
                            <li key={j} className="text-xs text-ink-400 flex items-start gap-2">
                              <span className="text-accent mt-1">›</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
