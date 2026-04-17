import { Github, Linkedin, Send, Mail } from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border py-10">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-white font-display font-bold text-xs">
              AB
            </div>
            <span className="font-display font-semibold text-white text-sm">
              Armen<span className="text-accent">.</span>dev
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-ink-600 font-mono order-last md:order-none">
            © {year} Armen Barsehian · Kyiv, Ukraine
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: personalData.github },
              { Icon: Linkedin, href: personalData.linkedin },
              { Icon: Send, href: personalData.telegram },
              { Icon: Mail, href: `mailto:${personalData.email}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-ink-500 hover:text-white border border-surface-border hover:border-accent/30 transition-all text-xs"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
