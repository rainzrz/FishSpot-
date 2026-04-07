## Engenharia de Software: Implementação e Testes

FishSpot é um app para pescadores que mostra no mapa os melhores pontos de pesca próximos, com listagem de peixes por região e época ideal para pescar. A comunidade de usuários confirma se o peixe está dando em cada ponto e posta fotos, mantendo os dados sempre atualizados.

> Atualizar sempre que o time alinhar mudanças.
> 

---

## Time

| Membro | GitHub / Contato |
| --- | --- |
| Raian Rodrigues Guimarães | https://github.com/rainzrz |
| João Pedro Beilke da Costa |  |
| Everton Leonel Rodrigues dos Santos | https://github.com/Everton302Rodrigues |

---

## Sobre o Projeto

FishSpot é um app para pescadores que exibe no mapa os melhores pontos de pesca próximos ao usuário, com listagem de peixes por região e época ideal para pescar. A comunidade de usuários alimenta os dados confirmando se o peixe está dando em cada ponto e postando fotos.

---

## 1. Momentos de Alinhamento (Síncrono)

| Cerimônia | Frequência | Duração | Objetivo |
| --- | --- | --- | --- |
| Daily | Toda semana | 15 min | O que fiz, o que vou fazer, impedimentos |
| Planning | Início de cada sprint | 1h | Priorizar e distribuir tarefas da sprint |
| Review | Final de cada sprint | 1h | Revisar entregas e melhorar o processo |

---

## 2. Comunicação Assíncrona

**Ferramenta:** WhatsApp (grupo do time)

**Regras:**

- Prazo esperado para resposta: até 24h em dias úteis
- Decisões importantes devem ser registradas
- Para dúvidas técnicas, abrir uma discussão no grupo marcando quem precisa responder
- Avisos de ausência devem ser comunicados com antecedência mínima de 1 dia

---

## 3. Board

| Coluna | Descrição |
| --- | --- |
| Backlog | Tarefas identificadas |
| Em andamento | Tarefas em execução |
| Concluído | Entregues e validadas |

**Regras de interação:**

- Cada pessoa move seus próprios cards
- Ao iniciar uma tarefa, atribuir o responsável no card
- Cards devem ser revisados em até 48h

---

## 4. Estratégia de Priorização

Utilizamos a **matriz Urgência × Impacto**:

- **Alta urgência + alto impacto** → entra no topo da sprint
- **Baixa urgência + alto impacto** → backlog prioritário
- **Alta urgência + baixo impacto** → resolver rápido ou delegar
- **Baixa urgência + baixo impacto** → fundo do backlog

A priorização é feita coletivamente, com votação simples em caso de empate.

---

## 5. Métricas de Acompanhamento

| Métrica | Como medir | Frequência |
| --- | --- | --- |
| Tarefas concluídas | Cards movidos para "Concluído" | Por sprint |
| Tarefas em atraso | Cards "Em andamento" após prazo | Na Review |
| Impedimentos recorrentes | Registro | Por sprint |
| Velocidade do time | Média de tarefas concluídas por sprint | Acumulado |

---

## 6. Documentação de Arquitetura

### 6.1 Modelo C4 (níveis 1 a 3)

A documentação de arquitetura segue o modelo C4:

- **Nível 1 - Contexto do sistema:** app FishSpot usado por pescadores, integrado a APIs de mapa e banco de dados de pontos de pesca
- **Nível 2 - Containers:** frontend do app, backend/API, banco de dados (pontos de pesca + peixes + usuários)
- **Nível 3 - Componentes:** estrutura interna de cada container (a definir)

> Diagramas serão feitos no draw.io
> 

---

### 6.2 ADRs (Architecture Decision Records)

Toda decisão arquitetural relevante deve ser registrada como ADR.

**Template:**

```
# ADR-XXX: [Título da Decisão]

## Status
[Proposta | Aceita | Obsoleta | Substituída por ADR-XXX]

## Contexto
[Qual problema estávamos tentando resolver? Quais eram as restrições?]

## Decisão
[O que decidimos fazer?]

## Consequências
[O que muda com essa decisão? Quais são os trade-offs?]
```

---

### ADR-001: Uso do Leaflet.js para mapas

**Status:** Aceita

**Contexto:** O app precisa exibir pontos de pesca num mapa interativo. A solução precisa ser gratuita e permitir adicionar marcadores customizados com informações ao clicar.

**Decisão:** Utilizar Leaflet.js como biblioteca de mapas.

**Consequências:** Solução gratuita e bem documentada. Ao clicar em um ponto, exibe a listagem de peixes daquele local.

---

### ADR-002: Estratégia de dados iniciais

**Status:** Aceita

**Contexto:** Lançar o app com poucos pontos cadastrados faria o usuário abrir, não encontrar nada perto e desinstalar. Escalar o Brasil inteiro de cara seria lento demais.

**Decisão:** Começar com dados locais, açudes e pontos de pesca conhecidos da região, coletando informações de páginas próprias e redes sociais dos locais.

**Consequências:** Base de dados menor, porém mais densa e confiável na região de lançamento. Escala gradual para outras regiões após validação.

---

### ADR-003: Modelo de autenticação

**Status:** Em discussão (pendente decisão do time)

**Contexto:** A funcionalidade de comunidade exige que o usuário tenha cadastro para postar fotos e confirmar pontos.

**Decisão:** A definir

**Consequências:** A preencher após decisão

---

## 7. Fluxo de Contribuição (Git)

### Proteção da branch `main`

A branch `main` está protegida — **push direto não é permitido**. Todo código entra via Pull Request.

**Regras ativas (GitHub Ruleset `protect-main`):**
- PR obrigatório antes de fazer merge
- Todos os jobs do CI precisam passar: Validar HTML, Validar CSS, Validar JavaScript, Testes Unitários, Build

### Como contribuir

```bash
# 1. Criar uma branch para sua feature ou correção
git checkout -b feature/nome-da-feature

# 2. Fazer as alterações e commitar
git add .
git commit -m "feat: descrição do que fez"

# 3. Subir a branch
git push origin feature/nome-da-feature

# 4. Abrir Pull Request no GitHub apontando para main
# O CI roda automaticamente — merge só liberado com CI verde
```

### Convenção de nomes de branch

| Prefixo | Quando usar |
| --- | --- |
| `feature/` | Nova funcionalidade |
| `fix/` | Correção de bug |
| `chore/` | Configuração, dependências, CI |
| `docs/` | Documentação |

---

## 8. Roadmap

| Mês | Entrega | Risco |
| --- | --- | --- |
| Abril | Mapa com pontos de pesca + listagem de peixes por região | Base de dados inicial pequena mitigar cadastrando pontos manualmente antes do lançamento |
| Maio | Comunidade: fotos, confirmações de pesca por ponto | Depende do sistema de login estar funcionando bem desde Abril |
| Junho | Análise de dados, feedback de usuários, planejamento do próximo trimestre | Atrasos nos meses anteriores podem consumir esse tempo |