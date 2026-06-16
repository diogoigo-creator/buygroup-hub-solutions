# Plano — Página /second-opinion-comercial

## 1. Nova rota `src/routes/second-opinion-comercial.tsx`
Estrutura visual idêntica a `/bpo-de-compras` (mesmo `SiteLayout`, tipografia, paleta navy/green, cards com bordas suaves, ícones lucide, seções com `max-w-7xl`, espaçamento e watermarks). Conteúdo:

1. **Hero** — eyebrow "Validação independente · Pré-fechamento"; título "Sua equipe negociou. Antes de fechar, deixe um especialista revisar."; subtítulo conforme briefing; CTA primário "Solicitar revisão de proposta" → `/contato?interesse=second-opinion`; CTA secundário "Como funciona" → `#como-funciona`; badges "SOB NDA · RETORNO EM 48H · FEE SOBRE SAVING CAPTURADO".
2. **O que esse serviço resolve** — bloco de contexto (sem heading visível), texto único do briefing.
3. **Como funciona** (`id="como-funciona"`) — 4 etapas em grid horizontal (1 col mobile, 4 cols desktop) com número, título, prazo e descrição.
4. **O que está incluído na revisão** — grid de 8 cards com ícone + texto.
5. **Para quem é indicado** — lista com bullets/ícones de check.
6. **O que esse serviço NÃO é** — bloco destacado (borda discreta, fundo `bg-secondary/40`), tom direto.
7. **Modelo comercial** — 3 cards lado a lado + nota inferior sobre pacote mensal.
8. **Por que funciona** — 3 blocos com ícone + título + corpo.
9. **Estudo de caso compacto** — bloco com fundo diferenciado, badge "Confidencial · Setor: Infraestrutura".
10. **CTA final** — título, subtítulo, botão primário `/contato?interesse=second-opinion`, botão secundário WhatsApp (reutilizar número já usado em outras páginas), badge NDA.

`head()` com title/description/og próprios e canonical `/second-opinion-comercial`.

## 2. Integração no site
- **`src/routes/servicos.tsx`**: adicionar `"/second-opinion-comercial"` em `EntryRoute` e novo item em `portfolio` com `badge: "Novo"`, título "Second Opinion Comercial", descrição "Revisão independente de propostas já negociadas pelo seu time. Fee apenas sobre saving capturado. Retorno em 48h.", `fit` curto, ícone (ex.: `FileSearch` ou `ScanSearch`), `to: "/second-opinion-comercial"`. Renderizar a `badge` "Novo" visualmente destacada (pill verde) no card.
- **`src/components/site/Footer.tsx`**: adicionar `<Link to="/second-opinion-comercial">Second Opinion Comercial</Link>` na lista da seção Serviços.
- **Header**: o header atual **não tem dropdown de Serviços** — é só um link para `/servicos`. Não vou introduzir um dropdown novo (mudança de arquitetura de navegação fora do escopo do pedido). A descoberta acontece via card "Novo" em `/servicos` e link no footer. Se quiser que eu construa um dropdown real no header, me avise e faço em seguida.

## Detalhes técnicos
- Arquivo segue o mesmo padrão de `bpo-de-compras.tsx`: `createFileRoute("/second-opinion-comercial")`, arrays de dados no topo, componente principal abaixo, `Link` do `@tanstack/react-router` para CTAs internos, `<a href="https://wa.me/...">` para WhatsApp.
- Sem mudanças em backend nem em `routeTree.gen.ts` (auto-gerado).
