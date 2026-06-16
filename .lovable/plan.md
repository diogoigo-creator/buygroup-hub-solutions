# Remover a lista de serviços acima dos banners

A barra fixa logo abaixo do header das páginas de serviço mostra hoje todos os serviços em pílulas (Otimização de Custos, Inteligência de Gastos, BPO de Compras, etc.). Vou remover esse seletor.

## Mudança

`src/components/site/Breadcrumb.tsx`
- Apagar o bloco `{currentSlug ? <nav aria-label="Trocar de serviço"> ... </nav> : null}` que renderiza as pílulas com todos os serviços.
- Manter apenas a trilha "Serviços › {currentLabel}".
- Manter a barra sticky abaixo do header (sem alterar comportamento de scroll).
- A prop `currentSlug` continua aceita (para não quebrar as páginas que já a passam), mas deixa de ser usada.

Nada mais é alterado: páginas de serviço, links, âncoras, cursos e contato seguem iguais.
