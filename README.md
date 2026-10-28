# BigWorks Site

Site institucional da BigWorks. HTML, CSS e JS puros: sem framework, sem
build, sem `node_modules`. Abre com `index.html` e funciona.

**Produção:** https://site.bigworks.com.br, servido pela Stage (container
`bigworks_site_web` na rede externa `traefik`, rota `bigworks-site-web`).
O nginx do container escuta na porta **3000** (a que o Traefik da Stage
espera). Deploy no host da Stage, no diretório do clone do projeto:

```bash
git pull
docker compose -p bigworks-site up -d --build
```

O caminho do clone no host e o arquivo dynamic do Traefik ficam na
configuração do ambiente (não fixe IP, hostname de provedor nem nome de VPS
neste README).

## Estrutura

```
index.html          markup (sem <style>/<script> inline)
assets/styles.css   todo o CSS; design tokens em :root
assets/app.js       reveal on scroll, filtro de produtos, relógio e log do painel
assets/logos/       logos dos produtos
assets/brand/       marca, og.png (1200x630)
docs/wireframe.txt  wireframe tipado: contrato entre regiões e classes CSS
Dockerfile          nginx:alpine servindo o estático
nginx.conf          listen 3000; rewrite /logos|/brand → /assets/...
compose.yml  build + rede externa traefik + healthcheck
vercel.json         fallback Vercel (framework Other); rewrites /logos e /brand
```

Cada região do wireframe (`nav`, `hero`, `board`, `card`, `card2`...) é uma
classe CSS com o mesmo nome. Para mexer em uma seção, ache a região no
wireframe e a classe correspondente.

## Editar produtos

Os cards estão escritos direto no `index.html` (seção `products`). Cada card
tem `data-cat` para o filtro (`gastronomia`, `ia`, `varejo`, `criadores`,
`servicos`). O painel de status do hero (`board`) lista os mesmos produtos;
ao adicionar ou remover um, atualize os dois e o número em "Nove produtos".

## Caminhos legados `/logos` e `/brand`

O site antigo servia esses paths na raiz. `nginx.conf` e `vercel.json`
reescrevem `/logos/*` e `/brand/*` para `/assets/...`, porque outros sites
ainda apontam para as URLs antigas.

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

## Decisões vigentes

- **2026-09-20:** sai o Next.js/Tailwind; o site passa a HTML/CSS/JS estático
  servido por nginx na Stage (DNS de `site.bigworks.com.br` aponta para a
  Stage; `vercel.json` fica só como fallback).
- **2026-10:** nginx na porta 3000 (contrato com o Traefik da Stage) e
  rewrites de `/logos` e `/brand` para `/assets`.

## Imagem de compartilhamento

`assets/brand/og.png` (1200x630) é a prévia que WhatsApp, LinkedIn e afins
mostram ao compartilhar o link. A fonte é `assets/og/og.html`, no mesmo padrão
da imagem do BigWorks Labs; texto ou produtos novos pedem regerar a imagem
renderizando esse HTML em 1200x630 (Chromium headless em container, por exemplo
`zenika/alpine-chrome:with-puppeteer`). Ao trocar a imagem, mude o `?v=` da URL
em `og:image` no `index.html` para o WhatsApp não reaproveitar a prévia antiga.
