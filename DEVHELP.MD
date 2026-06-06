# 🛠️ Guia de Desenvolvimento e Fluxo Git

Este documento estabelece o padrão de trabalho da equipe. Seguir essas regras garante que não teremos conflitos graves de código e que o nosso repositório se manterá estável para a apresentação final.

---

## 🌳 Arquitetura de Branches

Nosso repositório utiliza um modelo otimizado para agilidade e segurança:

* **`main` (Cofre Final):** Totalmente bloqueada contra pushes diretos. Representa a versão de entrega do projeto. Aceita exclusivamente Pull Requests originados da branch `dev` e **exige aprovação (review)** do grupo antes do merge.
* **`dev` (Ambiente de Integração):** Onde o código de todos se encontra diariamente. Aceita apenas Pull Requests, mas **não exige aprovação**. A integração aqui é livre e rápida para não criar gargalos no desenvolvimento.
* **Branches de Trabalho (Features):** Onde você vai de fato programar. Devem sempre ser criadas a partir da branch `dev` atualizada.

---

## 🏷️ Nomenclatura de Branches

Nunca crie branches com nomes genéricos (ex: `teste`, `minha-tela`). Use os prefixos abaixo seguidos de um descritivo curto em minúsculas, separado por hifens:

* `feat/` - Para novas páginas, componentes ou funcionalidades (ex: `feat/catalogo-pedidos`).
* `fix/` - Para correção de bugs (ex: `fix/alinhamento-header`).
* `refactor/` - Para melhorias na estrutura do código sem alterar a funcionalidade visual.

---

## 🔄 Fluxo de Trabalho Passo a Passo

Siga exatamente este fluxo ao começar a trabalhar na sua página/tarefa:

### 1. Atualize sua máquina
Antes de começar qualquer coisa, garanta que você tem o código mais recente da equipe.
```bash
git checkout dev
git pull origin dev
```

### 2. Atualize sua máquina
Crie uma branch isolada para a sua tarefa.
```bash
git checkout -b feat/nome-da-sua-tarefa
```

### 3. Desenvolva
Programe a sua parte e salve o progresso regularmente com mensagens claras.
```bash
git add .
git commit -m "feat: cria estrutura do card de doacao"
```
### 4. Sincronize (Crucial)
Como a equipe está subindo código na dev o tempo todo, puxe as atualizações antes de tentar enviar o seu código.
```bash
git pull origin dev
```
### 5. Envie e faça o PR
Suba a sua branch para o GitHub
```bash
git push origin feat/nome-da-sua-tarefa
```
Vá até a interface do GitHub e abra um Pull Request apontando da sua branch para a dev. Como não bloqueamos a dev com aprovações, você mesmo pode realizar o merge se o código estiver funcionando corretamente.