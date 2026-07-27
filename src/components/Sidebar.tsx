'use client';

import { site } from '@/data/site';

export function Sidebar() {
  return (
    <>
      {/* Desktop sidebar — uCard style */}
      <aside
        className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-[var(--sidebar-width)] flex-col bg-ink text-paper"
      >
        <div className="flex flex-col flex-1 p-8">
          <div className="mb-10">
            <div
              className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center mb-6 bg-white/5"
              aria-hidden="true"
            >
              <span className="font-display font-extrabold text-2xl tracking-tighter text-rust">BW</span>
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight leading-none">
              BigWorks
            </h1>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mt-2">
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
                <span className="font-mono text-[10px] text-rust/80 group-hover:text-rust">
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
              className="block hover:text-rust transition-colors break-all"
            >
              {site.email}
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="block hover:text-rust transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <div className="px-8 py-4 border-t border-white/5 font-mono text-[10px] text-white/20">
          © {new Date().getFullYear()} BigWorks
        </div>
      </aside>

      {/* Mobile header */}
      <header
        className="lg:hidden fixed top-0 inset-x-0 z-40 bg-ink text-paper border-b border-white/10 px-4 py-3 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg">BigWorks</span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 hidden sm:inline">
            {site.tagline}
          </span>
        </div>
        <nav className="flex gap-3 text-xs font-mono text-white/50" aria-label="Seções mobile">
          {site.sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-rust transition-colors">
              {s.num}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
