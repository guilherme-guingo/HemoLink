# 🩸 HemoLink - Sistema Integrado de Doação de Sangue

## 📋 Sobre o Projeto
O **HemoLink** é uma plataforma web desenvolvida para conectar doadores de sangue a hospitais e pacientes que necessitam de doações com urgência. O sistema possui uma interface dupla: atende tanto cidadãos que desejam se cadastrar, visualizar pedidos e favoritar solicitações, quanto hospitais que precisam gerenciar o próprio estoque de sangue e emitir alertas de baixa.

Este projeto foi construído como requisito acadêmico da disciplina de desenvolviment multiplataformas para a residencia em TIC do Serratec, aplicando conceitos fundamentais e avançados de desenvolvimento Front-end utilizando o ecossistema React.

---

## 🚀 Tecnologias e Ferramentas

O ecossistema do projeto foi construído utilizando as seguintes tecnologias:

* **React.js (via Vite):** Biblioteca principal para construção da interface.
* **React Router DOM:** Gerenciamento de rotas e navegação SPA (Single Page Application).
* **Styled-components:** Estilização componentizada com suporte a temas globais (Dark/Light mode) e propriedades dinâmicas.
* **Axios:** Cliente HTTP para consumo de APIs externas e instâncias centralizadas.
* **Context API:** Gerenciamento de estados globais (Usuário logado e lista de Favoritos).

---

## 🗺️ Arquitetura de Rotas

A aplicação é dividida em 6 rotas principais, garantindo separação de responsabilidades:

1. **`/` (Home):** Landing page institucional que apresenta a importância da doação de sangue e o impacto da plataforma.
2. **`/catalogo` (Catálogo):** Listagem de todos os pedidos ativos de doação, com renderização de componentes de card e filtros de estado por tipo sanguíneo.
3. **`/pedido/:id` (Detalhes Dinâmicos):** Rota com parâmetro dinâmico que renderiza os dados específicos, histórico e nível de urgência de um único pedido.
4. **`/solicitar` (Formulário de Pedido):** Interface para cadastro de novas solicitações de doação de sangue.
5. **`/perfil` (Painel do Doador):** Área logada que consome a Context API para exibir dados do usuário e seus pedidos favoritados.
6. **`/painel-hospital` (Dashboard Administrativa):** Interface focada na gestão do hospital, com lógicas visuais para exibir o status do estoque de bolsas de sangue.

---

## 🔌 APIs Consumidas

O sistema é alimentado por dados reais e simulados através de requisições HTTP:

* **API do IBGE (Localidades):** Consumida nos formulários para garantir dados reais na seleção em cascata de Estados (UF) e Municípios.
* **MockAPI:** Back-end simulado para persistir e resgatar os dados JSON dos pedidos de doação, simulando o banco de dados principal do sistema.

---

## 🔒 Fluxo de Trabalho e Git

Este repositório utiliza regras estritas de proteção de branch para garantir a integridade do código:

* **Main Protegida:** A branch `main` não aceita *pushes* diretos sob nenhuma circunstância.
* **GitHub Actions:** Há uma *pipeline* configurada que rejeita automaticamente qualquer *Pull Request* que não tenha origem estrita na branch `dev`.
* **Regra de Ouro:** Todo o desenvolvimento deve ser feito em branches auxiliares, mergeado na `dev`, testado e apenas então submetido via PR para a `main`.

---

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1. Clone este repositório:
   ```bash
   git clone [https://github.com/guilherme-guingo/HemoLink.git](https://github.com/guilherme-guingo/HemoLink.git)
2. Clone este repositório:
   ```bash
   cd HemoLink
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 👥 Equipe Desenvolvedora (GR5)

Projeto desenvolvido colaborativamente pelo Grupo 5:

- Pedro Augusto Bastos Dayer

- Icaro de Assis Pinheiro

- Guilherme Fernandes Guingo

- Nícolas de Carvalho Oliveira

- João Victor do Nascimento Salgueiro

- Luiz Felipe Vieira de Oliveira Ribeiro
