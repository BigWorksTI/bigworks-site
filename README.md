# BigWorks Site

Site institucional da BigWorks. HTML, CSS e JS puros: sem framework, sem
build, sem `node_modules`. Abre com `index.html` e funciona.

**Produção:** https://site.bigworks.com.br, servido pela Stage (container
`bigworks_site_web`, rota `bigworks-site-web` no Traefik). Deploy:

```bash
cd /root/bigworks-site && git pull && docker compose -p bigworks-site up -d --build
```

## Estrutura

```
index.html          markup (sem <style>/<script> inline)
assets/styles.css   todo o CSS; design tokens em :root
assets/app.js       reveal on scroll, filtro de produtos, relógio e log do painel
assets/logos/       logos dos produtos
assets/brand/       marca, og.png (1200x630)
docs/wireframe.txt  wireframe tipado: contrato entre regiões e classes CSS
```

Cada região do wireframe (`nav`, `hero`, `board`, `card`, `card2`...) é uma
classe CSS com o mesmo nome. Para mexer em uma seção, ache a região no
wireframe e a classe correspondente.

## Editar produtos

Os cards estão escritos direto no `index.html` (seção `products`). Cada card
tem `data-cat` para o filtro (`gastronomia`, `ia`, `varejo`, `criadores`,
`servicos`). O painel de status do hero (`board`) lista os mesmos produtos;
ao adicionar ou remover um, atualize os dois e o número em "Nove produtos".

## Rodar local

Qualquer servidor estático serve:

```bash
python3 -m http.server 8080
```

Ou o mesmo container nginx do deploy (porta 3000).

## Screenshot de conferência

```bash
docker run --rm -v "$PWD":/site:ro -v /tmp/out:/out mcr.microsoft.com/playwright:v1.48.0-jammy \
  npx -y playwright@1.48.0 screenshot --viewport-size=1440,900 --full-page file:///site/index.html /out/site.png
```

## Vercel

`vercel.json` fica no repo (framework "Other", sem build) caso o site volte
para a Vercel; hoje o DNS aponta para a Stage.
