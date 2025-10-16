# Dashboard de Investimentos

Um projeto pessoal em React + Tailwind CSS que simula um painel (dashboard) para investidores. Foi desenvolvido a partir de uma necessidade real e serve como ambiente de estudo e consolidação de conhecimentos em React, Tailwind e Chart.js. Este projeto não é destinado à produção.

> Observação: o design, layout e código foram idealizados e implementados por mim.

## Status
- Em desenvolvimento.
- Primeira etapa concluída: aba principal com gráficos e dados consolidados do portfólio do usuário.
- Próximas abas planejadas: Transações e Análise do Portfólio com auxílio de IA.

## Tecnologias
- React
- Tailwind CSS
- Chart.js
- Vite (ou Create React App, conforme o boilerplate)
- JavaScript / TypeScript (conforme o setup)

## O que já foi implementado
- Página principal (Dashboard) com:
  - Gráficos de linha, pizza e barras para visualização de desempenho e composição do portfólio.
  - Cards de resumo com valores investidos, rentabilidade e alocação por classe de ativo.
- Componentes reutilizáveis para gráficos e cards.
- Layout responsivo com Tailwind (pontos de quebra e ajustes finos podem ser necessários).

## Observação sobre o propósito do repositório
Este repositório é de uso pessoal e não está aberto para contribuições externas.

## Roadmap
- Aba de Transações: cadastro, edição e listagem de entradas/saídas.
- Aba de Análise do Portfólio com IA: insights automáticos, sugestões e projeções.
- Persistência de dados (localStorage / backend simples).
- Melhorias de UX e acessibilidade.
- Testes unitários e de integração.
- Otimizações para performance e build.

## Como rodar localmente

Pré-requisitos:
- Node.js (recomendado >= 14)
- npm ou yarn

Passos:
1. Clone o repositório
   git clone https://github.com/Victor-Avilla/Dashboard-de-Investimentos.git
2. Entre na pasta do projeto
   cd Dashboard-de-Investimentos
3. Instale dependências
   npm install
   # ou
   yarn
4. Rode o servidor de desenvolvimento
   npm run dev
   # ou
   yarn dev
5. Abra o navegador em http://localhost:3000 (ou a porta indicada pelo bundler)

Nota: se o projeto usar Create React App, use `npm start` / `yarn start` conforme o package.json.

## Estrutura sugerida (exemplo)
- src/
  - components/       # Componentes reutilizáveis (Cards, Charts, Tables)
  - pages/            # Páginas (Dashboard, Transactions, Analysis)
  - hooks/            # Hooks personalizados
  - services/         # Lógica de acesso a dados (simulação / API)
  - styles/           # Configurações do Tailwind / css global
  - utils/            # Funções utilitárias

## Observações sobre gráficos
- Os componentes de gráficos usam Chart.js e normalmente ficam em `src/components/charts`.
- Passe os dados por props e mantenha a lógica de transformação de dados em serviços/hooks.
- Para customizações, consulte: https://www.chartjs.org/

## Tailwind
- Configure o arquivo `tailwind.config.js` e importe os estilos em `src/index.css` (ou equivalente).
- Use classes utilitárias para composição rápida do layout e responsividade.

## Licença
MIT (ajuste conforme preferência)

## Contato
Desenvolvido por Victor Avilla. Para dúvidas ou observações, abra uma issue no repositório.