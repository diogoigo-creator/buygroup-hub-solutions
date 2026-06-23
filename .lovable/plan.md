Na seção "Quem conduz os engajamentos" em `src/routes/sobre.tsx`, ajustar a faixa de 3 cards (2013 · Belo Horizonte · 14 setores) para:

- Centralizar verticalmente o conteúdo de cada card (`items-center` já está) e garantir alinhamento horizontal consistente do ícone + texto.
- Centralizar o bloco inteiro de cada card horizontalmente dentro da célula (`justify-center`), para que os 3 itens fiquem visualmente alinhados no eixo central da faixa.
- Corrigir o card "Belo Horizonte · MG" que quebra em duas linhas e sobrepõe o label "SEDE": reduzir o tamanho da fonte nesse card (de `text-3xl` para algo como `text-2xl`) e/ou usar `whitespace-nowrap`/`leading-tight` para evitar a sobreposição.
- Manter ícone à esquerda, número/label à direita, mas com o conjunto centralizado dentro de cada célula.

Sem alterações em outras seções, dados ou estilos globais.
