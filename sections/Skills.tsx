'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../components/AnimatedSection';
import { skills, skillTags } from '../data/portfolio';

function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-ink-200 font-medium">{name}</span>
        <span className="text-xs text-ink-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface-card rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: level >= 90
              ? 'linear-gradient(90deg, #7C6AF5, #C8F135)'
              : level >= 80
              ? 'linear-gradient(90deg, #7C6AF5, #A99BF8)'
              : 'linear-gradient(90deg, #484860, #7C6AF5)',
          }}
        />
      </div>
    </div>
  );
}

const categories = [
  { key: 'core', label: 'Core Technologies', color: 'text-accent' },
  { key: 'cms', label: 'CMS & Backend', color: 'text-lime' },
  { key: 'tools', label: 'Tools & Workflow', color: 'text-pink-400' },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-tight">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-16">
            <span className="font-mono text-xs text-accent uppercase tracking-widest">03 — Skills</span>
            <div className="flex-1 h-px bg-surface-border max-w-xs" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-16">
          <div>
            <AnimatedSection>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Technologies I
                <br />
                <span className="text-gradient">work with daily.</span>
              </h2>
              <p className="text-ink-300 text-lg">
                My stack is built for modern, fast, maintainable websites. I pick the right tool for every job.
              </p>
            </AnimatedSection>

            {/* Tag cloud */}
            <AnimatedSection delay={0.1} className="mt-10">
              <div className="flex flex-wrap gap-2">
                {skillTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 rounded-lg glass text-xs text-ink-300 border border-surface-border hover:border-accent/30 hover:text-white cursor-default transition-all"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Skill bars */}
          <div className="space-y-10">
            {categories.map((cat) => (
              <AnimatedSection key={cat.key} delay={0.1}>
                <div>
                  <div className={`text-xs uppercase tracking-widest font-mono mb-5 ${cat.color}`}>
                    {cat.label}
                  </div>
                  <div className="space-y-4">
                    {skills
                      .filter((s) => s.category === cat.key)
                      .map((skill, i) => (
                        <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
                      ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <AnimatedSection delay={0.2}>
          <div className="relative overflow-hidden py-4 border-y border-surface-border">
            <div className="flex animate-marquee whitespace-nowrap gap-8">
              {[...skillTags, ...skillTags].map((tag, i) => (
                <span key={i} className="text-sm text-ink-600 font-mono inline-flex items-center gap-3">
                  {tag}
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
