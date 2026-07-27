'use client';

import { site } from '@/data/site';

export function Sidebar() {
  return (
    <>
      <aside
        className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-[var(--sidebar-width)] flex-col bg-ink text-paper"
      >
        <div className="flex flex-col flex-1 p-8">
          <div className="mb-10">
            <a href="#intro" className="block mb-6">
              <img
                src="/brand/logo-dark.png"
                alt="BigWorks — TI e desenvolvimento de software"
                className="w-full max-w-[210px] h-auto"
              />
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35 leading-relaxed">
              {site.tagline}
            </p>
          </div>

          <nav className="flex-1 space-y-1" aria-label="Seções">
            {site.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center gap-3 py-2.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <span className="font-mono text-[10px] text-cyan/80 group-hover:text-cyan">
                  {section.num}
                </span>
                <span className="group-hover:translate-x-0.5 transition-transform">
                  {section.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-white/10 space-y-3 text-sm text-white/45">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/25">Local</p>
            <p>{site.location}</p>
            <a
              href={`mailto:${site.email}`}
              className="block hover:text-cyan transition-colors break-all"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-cyan transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="px-8 py-4 border-t border-white/5 font-mono text-[10px] text-white/20">
          © {new Date().getFullYear()} BigWorks
        </div>
      </aside>

      <header
        className="lg:hidden fixed top-0 inset-x-0 z-40 bg-ink text-paper border-b border-white/10 px-4 py-2.5 flex items-center justify-between gap-3"
      >
        <a href="#intro" className="shrink-0">
          <img
            src="/brand/logo-dark.png"
            alt="BigWorks"
            className="h-10 w-auto max-w-[140px] object-contain object-left"
          />
        </a>
        <nav className="flex gap-3 text-xs font-mono text-white/50 shrink-0" aria-label="Seções mobile">
          {site.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-cyan transition-colors">
              {s.num}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
