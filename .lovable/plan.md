Propomos as seguintes melhorias para valorizar e destacar visualmente a seção da Metodologia **CUT4MORE™**:

1. **Design Conectado de Fluxo (Sequential Flow)**:
   - Em telas maiores (desktop), adicionaremos uma linha conectora sutil ligando as fases (01 → 02 → 03 → 04) para enfatizar o aspecto de processo/passo a passo estruturado.
   
2. **Estilização Premium dos Cards**:
   - Transformar a lista simples de cards em componentes interativos com:
     - Efeito de hover suave (elevação e borda iluminada em tom verde-esmeralda/dourado).
     - Fundo dos cards ligeiramente translúcido (`backdrop-blur-md`) com gradiente muito sutil para dar profundidade de "glassmorphism".
     - Adição de ícones delicados e conceituais para cada uma das quatro fases (ex: Lupa/Gráficos para Mapeamento, Alvo/Estratégia para Estratégia, Apertos de mão/Escudo para Negociação, Medalha/Check para Validação).

3. **Tipografia e Badges**:
   - Tornar o marcador de etapa ("01", "02", etc.) mais elegante, talvez com uma tipografia serifada sofisticada em tamanho maior e opacidade ajustada, funcionando quase como marca d'água no fundo do card.
   - Adicionar uma badge exclusiva com design refinado no início da seção para coroar a metodologia como propriedade intelectual/marca registrada exclusiva da Buy Group.

---

### Detalhes Técnicos

- **Arquivo a ser alterado**: `src/routes/index.tsx`
- **Componentes**: Utilizar ícones da biblioteca `lucide-react` (já importada no projeto, ex: `TrendingUp`, `Compass`, `Handshake`, `CheckCircle2` ou similares).
- **CSS / Tailwind**: Uso de classes utilitárias modernas do Tailwind v4 (`bg-navy/80`, `border-white/10`, `hover:border-green/30`, etc.) garantindo responsividade perfeita para mobile.
