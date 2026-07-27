import type { Product } from '@/data/site';

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noreferrer"
      className={[
        'group card-vcard block p-6 md:p-7 transition-all duration-300',
        'hover:border-brand/30 hover:shadow-[0_12px_40px_-12px_rgba(155,93,229,0.12)]',
        product.featured ? 'ring-1 ring-brand/20 bg-white' : '',
      ].join(' ')}
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="font-mono text-xs text-slate/60">{num}</span>
        <div className="flex-1 flex items-center justify-between gap-3">
          <div
            className="w-11 h-11 rounded-lg border border-cream bg-white p-1.5 flex items-center justify-center shrink-0"
          >
            <img
              src={product.logo}
              alt=""
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate/50 text-right">
            {product.category}
          </span>
        </div>
      </div>

      <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-brand transition-colors">
        {product.name}
        {product.locale === 'en' && (
          <span className="ml-2 font-mono text-[9px] uppercase text-slate/40 align-middle">EN</span>
        )}
      </h3>
      <p className="text-sm text-brand/90 font-medium mb-2">{product.tagline}</p>

      {product.highlight && (
        <p className="text-xs font-mono text-slate/70 mb-2">◆ {product.highlight}</p>
      )}

      <p className="text-sm text-slate leading-relaxed">{product.description}</p>

      <p className="mt-4 font-mono text-xs text-slate/50 group-hover:text-brand transition-colors">
        Abrir produto ↗
      </p>
    </a>
  );
}
