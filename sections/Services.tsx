'use client';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { services } from '../data/portfolio';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-tight">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">05 — Services</span>
            <div className="flex-1 h-px bg-surface-border max-w-xs" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              What I can
              <br />
              <span className="text-gradient">do for you.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-ink-300 leading-relaxed text-lg">
              From a simple landing page to a full e-commerce system — I deliver clean, fast, and scalable web solutions tailored to your business goals.
            </p>
          </AnimatedSection>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-7 border border-surface-border hover:border-accent/25 transition-all duration-300 group h-full"
              >
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-gradient transition-all">
                  {service.title}
                </h3>
                <p className="text-ink-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-ink-300">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-accent" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA banner */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div className="relative glass rounded-2xl p-8 md:p-12 border border-surface-border overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-radial from-accent/10 via-transparent to-transparent" />
            <div className="relative z-10">
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to start a project?
              </div>
              <p className="text-ink-400 mb-8 max-w-md mx-auto">
                Let's talk about your goals and how I can help you achieve them.
              </p>
              <a
                href="#contact"
                className="inline-flex px-8 py-3.5 rounded-2xl bg-accent hover:bg-accent-light text-white font-medium text-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/30"
              >
                Get in touch
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
