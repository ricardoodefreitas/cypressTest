# Cypress Project

Este projeto tem a finalidade de acessar o site da amazon, realizar a busca de um livro e adicionar ao carrinho.

## Project Structure

```
cypress-bdd-project
├── cypress
|   ├──e2e
|   |   └── tests.cy.js
│   ├── fixtures
|   |    └── example.json
│   ├── plugins
│   ├── screenshots
│   ├── support
│       ├── commands.js
│       └── index.js
├── cypress.json
├── package.json
└── README.md
```

## Setup Instructions

0. **Pré-requisitos**:
   ```
   Instale o node js
   instale o cypress - npm install cypress --save-dev
   ```

1. **Clone o repositorio**:
   ```
   git clone <repository-url>
   cd cypress-bdd-project
   ```

2. **Instale as dependencias**:
   ```
   npm install
   ```

3. **Run Cypress**:
   ```
   npx cypress open
   ```

4. **Sobre evidencias**:
   ```
   Ao finalizar um cenario com sucesso um video será adicionado a pasta videos
   Ao finalizar um cenario com erro uma imagem será adicionada a pasta screenshots
   ```