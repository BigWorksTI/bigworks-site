import { Sidebar } from '@/components/Sidebar';
import { ProductCard } from '@/components/ProductCard';
import { principles, products, site, whatsappUrl } from '@/data/site';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Sidebar />

      <main className="lg:pl-[var(--sidebar-width)] pt-14 lg:pt-0">
        <section id="intro" className="relative px-6 md:px-12 lg:px-16 py-16 md:py-24 min-h-[70vh] flex flex-col justify-center">
          <div className="max-w-3xl stagger">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-6">
              {site.sections[0].num} · Estúdio de software
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Software que{' '}
              <span className="text-cyan">roda</span>
              <br />
              em produção.
            </h2>
            <p className="text-lg md:text-xl text-slate leading-relaxed max-w-2xl">
              {site.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-brand transition-colors"
              >
                Ver produtos
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-cream px-6 py-3 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div
            className="absolute bottom-8 right-6 md:right-12 lg:right-16 font-mono text-[10px] text-slate/40 max-w-[140px] text-right leading-relaxed hidden md:block"
          >
            Laravel · Next.js · Docker
            <br />
            Traefik · PostgreSQL · IA aplicada
          </div>
        </section>

        <section id="products" className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-t border-cream bg-cream/30">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-3">
              {site.sections[1].num}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Produtos ao vivo
            </h2>
            <p className="text-slate mt-3 max-w-xl">
              Oito SaaS em produção, da gastronomia ao varejo, do WhatsApp ao BI conversacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 stagger">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>

        <section id="craft" className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-t border-cream">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-3">
              {site.sections[2].num}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Como fazemos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger">
            {principles.map((p) => (
              <div key={p.title} className="border-l-2 border-brand pl-6">
                <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="px-6 md:px-12 lg:px-16 py-16 md:py-24 border-t border-cream bg-ink text-paper">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand mb-3">
              {site.sections[3].num}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Vamos conversar?
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Produto novo, integração com um dos nossos SaaS ou consultoria em stack. Chama {site.contactName} no WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-mono text-lg md:text-xl text-brand hover:text-white transition-colors border-b border-brand/40 pb-1"
            >
              {site.whatsappDisplay}
            </a>
            <p className="mt-3 text-sm text-white/35">WhatsApp · {site.contactName}</p>
            <p className="mt-12 font-mono text-[10px] text-white/20 uppercase tracking-widest">
              BigWorks · {site.location}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
