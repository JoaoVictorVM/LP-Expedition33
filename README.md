# LP Expedition 33

Landing page inspirada em _Clair Obscur: Expedition 33_, desenvolvida com HTML, CSS e JavaScript puros, com foco em direcao visual, animacoes e construcao de interface sem frameworks.

[Demonstracao online](https://joaovictorvm.github.io/LP-Expedition33/)

## Sobre o projeto

Este projeto recria, em formato de landing page, a atmosfera estetica de _Clair Obscur: Expedition 33_. A proposta combina uma apresentacao visual imersiva com secoes promocionais, destaques de novidades, depoimentos, bloco institucional e animacoes de entrada e scroll.

Alem do carater criativo e de homenagem ao universo do jogo, o projeto tambem funciona como exercicio pratico de fundamentos de front-end, organizacao de arquivos estaticos e composicao de experiencias visuais com JavaScript e GSAP.

O objetivo principal nao foi construir um produto escalavel ou uma aplicacao complexa, mas sim desenvolver uma entrega caprichada, tecnicamente coerente e bem documentada, respeitando o escopo de um projeto estatico de estudo.

## Objetivos

- Praticar HTML semantico, CSS e JavaScript em um projeto real.
- Construir uma interface visualmente marcante sem uso de frameworks.
- Explorar animacoes de entrada, scroll e pre-carregamento com GSAP.
- Organizar assets, estilos e scripts de forma simples e reutilizavel.

## Funcionalidades

- Hero section com chamada principal e CTA externo.
- Animacoes de entrada na abertura da pagina.
- Scroll suave e efeitos de movimento com GSAP.
- Animacoes de texto com `SplitText`.
- Cards de novidades com apelo visual.
- Bloco de depoimentos e logos de parceiros.
- Rodape tematico com links institucionais e elementos graficos.
- Estrutura estatica, leve e sem etapa de build.

## Decisoes tecnicas

- Uso de HTML, CSS e JavaScript puros para exercitar fundamentos sem abstrair comportamento com frameworks.
- Carregamento de bibliotecas de animacao via CDN para simplificar a execucao do projeto.
- Separacao direta entre estrutura (`index.html`), estilos (`src/styles/style.css`) e comportamento (`src/scripts/script.js`).
- Organizacao de assets em subpastas para imagens e fontes, facilitando manutencao e leitura do repositorio.
- Escopo deliberadamente enxuto, priorizando acabamento visual, clareza de estrutura e demonstracao de base tecnica.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- GSAP via CDN (`gsap`, `ScrollTrigger`, `ScrollSmoother`, `SplitText`)

## Estrutura do projeto

```text
LP-Expedition33/
|-- index.html
|-- favicon.png
|-- LICENSE
|-- README.md
`-- src/
    |-- assets/
    |   |-- fonts/
    |   `-- images/
    |       |-- imagens/
    |       `-- projeto imagens/
    |-- scripts/
    |   `-- script.js
    `-- styles/
        `-- style.css
```

## Como executar localmente

Como o projeto e estatico, basta abrir o `index.html` no navegador. Para uma experiencia melhor de desenvolvimento, o ideal e servir os arquivos com uma extensao como Live Server no VS Code.

### Opcao 1: abrir diretamente

1. Clone o repositorio:

```bash
git clone https://github.com/JoaoVictorVM/LP-Expedition33.git
```

2. Acesse a pasta do projeto:

```bash
cd LP-Expedition33
```

3. Abra o arquivo `index.html` no navegador.

### Opcao 2: usar Live Server

1. Abra o projeto no VS Code.
2. Instale a extensao Live Server.
3. Execute a opcao "Open with Live Server" no arquivo `index.html`.

## Estrutura da interface

Atualmente a landing page esta organizada em blocos principais:

- `Header` com identificacao visual da proposta.
- `Hero` com imagem de destaque, titulo e chamada principal.
- `Ultimas novidades` com cards de noticias.
- `Depoimentos` com trechos e logos.
- `Agradecimentos` com lista de premiacoes e reconhecimento.
- `Footer` com redes, bloco institucional e elementos de marca.

## Destaques tecnicos observados no projeto

- Separacao simples entre estrutura, estilos e comportamento.
- Uso de assets locais para identidade visual da pagina.
- Integracao direta com bibliotecas de animacao por CDN.
- Responsividade inicial com media queries para telas menores.
- Projeto sem dependencias de build, bundlers ou frameworks.

## Desafios tecnicos

- Traduzir uma referencia estetica forte do universo do jogo para uma interface web estatica sem perder identidade visual.
- Trabalhar animacoes de entrada e scroll de forma complementar, evitando excesso de ruido visual.
- Manter a estrutura do projeto simples, mas ainda assim organizada o suficiente para leitura e manutencao.
- Equilibrar impacto visual com uma base de front-end enxuta, sem apoio de framework ou pipeline de build.

## Aprendizados

- Consolidacao de fundamentos de HTML, CSS e JavaScript em um projeto com proposta visual clara.
- Pratica de separacao de responsabilidades entre markup, estilo e comportamento.
- Uso de GSAP para criar transicoes e animacoes orientadas a scroll em uma pagina estatica.
- Importancia de documentar o projeto com clareza para comunicar intencao, escopo e decisoes tecnicas.

## Status do projeto

Projeto concluido como landing page estatica de estudo e homenagem. Nao ha planejamento de expansao funcional, o que torna este repositorio uma entrega fechada de portfolio e pratica tecnica.

## Aviso

Este e um projeto de estudo e homenagem, sem vinculacao oficial com _Clair Obscur: Expedition 33_, Sandfall Interactive ou marcas relacionadas. Todos os direitos sobre a obra original pertencem aos seus respectivos titulares.

## Licenca

Este projeto esta sob a licenca MIT. Veja o arquivo [LICENSE](LICENSE).
