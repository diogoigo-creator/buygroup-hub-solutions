O site da Buy Group está sólido e alinhado ao tom de consultoria premium para CEOs/CFOs. Para eliminar o aspecto excessivamente estático, propomos adicionar uma camada de movimento sutil, focada em micro-interações de alta classe e animações que preservam a foto de fundo.

Abaixo estão as 3 opções de direção de movimento para sua escolha:

---

### Opção 1 — Executive Motion Refinement (Refinamento Cirúrgico)
Foco em polimento sutil, focado nos detalhes e botões.
*   **Foto de fundo do Hero:** Pequeno zoom suave ao carregar a página (102% para 100% em 2.5s) criando uma sensação inicial de assentamento.
*   **CTAs Primários:** Botão "Agendar executive briefing" ganha um reflexo de luz sutil e discreto (shimmer effect) que passa pela superfície a cada 6 segundos, além de elevação de profundidade sutil no hover.
*   **Transição de Elementos:** Revelação suave (fade-in + elevação de 15px) para títulos, cards e estatísticas conforme o usuário rola a página, de forma fluida e rápida (300ms), sem "saltar".

---

### Opção 2 — Executive Cinematic Hero (Impacto Cinemático)
Foco em prender a atenção de forma elegante nos primeiros segundos.
*   **Foto de fundo do Hero:** Movimento contínuo e quase imperceptível de zoom lento (Ken Burns Effect de 100% a 103% em ciclos de 20s) combinado com uma variação sutil na iluminação (os gradientes no escuro se movem de forma orgânica).
*   **Métricas e Números:** A métrica principal ("R$ 1,4 bi") e estatísticas se revelam com um contador progressivo rápido e elegante ao carregar (0.8s), destacando a grandiosidade dos números.
*   **Entrada Editorial:** O título principal do Hero é revelado por blocos de palavras com transições de opacidade sequenciais, simulando uma entrada editorial de revista de luxo.

---

### Opção 3 — Executive Kinetic Depth (Profundidade e Interação)
Foco em profundidade tátil e comportamento reativo ao mouse.
*   **Cards Interativos:** Os cards de metodologia e diferenciais reagem sutilmente à direção do cursor (efeito tilt 3D ultra-leve e sombras que se afastam proporcionalmente para criar sensação de flutuação).
*   **Foto de fundo do Hero:** Parallax sutil controlado pelo movimento do mouse (a imagem se move de ±1% a ±2% de forma amortecida), gerando uma percepção de profundidade tridimensional em relação aos textos.
*   **Linhas de Conexão:** As linhas finas de divisão e a linha verde ao lado dos títulos se desenham suavemente à medida que surgem na tela (scale-x ou scale-y progressivo).

---

### Detalhes Técnicos (Implementação)
*   **Sem Bibliotecas Pesadas:** Utilizaremos Tailwind v4 nativo com transições otimizadas de CSS (`will-change`, transições aceleradas por hardware) ou animações customizadas simples em CSS para garantir performance perfeita tanto no desktop quanto no mobile, sem afetar o tempo de carregamento da página.
*   **Segurança Visual:** Todas as animações terão suporte para a preferência de acessibilidade `prefers-reduced-motion` e serão projetadas para não causar distração na leitura das informações.

**Por favor, nos informe qual das direções você prefere (Opção 1, 2 ou 3) para iniciarmos a implementação!**