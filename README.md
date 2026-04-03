<p align="center">
  <b>FishSpot - Encontre os melhores pontos de pesca do Brasil</b>
</p>

<img width="1918" height="950" alt="image" src="https://github.com/user-attachments/assets/6c3d660a-23e8-4542-b190-dba3bbd1394c" />

<p align="center">
  App para pescadores que exibe no mapa os melhores pontos de pesca próximos, com listagem de peixes por região e época ideal para pescar. A comunidade confirma se o peixe está dando e posta relatos.
</p>


<div align="center">
  <img src="https://img.shields.io/badge/CI-GitHub_Actions-0A4174?style=for-the-badge&logo=githubactions&logoColor=white" alt="CI" />
  <img src="https://img.shields.io/badge/Mapa-Leaflet.js-0A4174?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet" />
  <img src="https://img.shields.io/badge/Testes-Jest-0A4174?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
  <img src="https://img.shields.io/badge/Lint-ESLint_+_Stylelint-0A4174?style=for-the-badge&logo=eslint&logoColor=white" alt="Lint" />
</div>


<br>

## <img src="https://api.iconify.design/lucide/fish.svg?color=%230A4174" width="24" height="24" style="vertical-align: middle;"> Sobre o Projeto

<img width="1919" height="945" alt="image" src="https://github.com/user-attachments/assets/062660a5-a74f-4320-aa04-c0189f964a56" />

FishSpot é um app para pescadores que exibe no mapa os melhores pontos de pesca próximos ao usuário, com listagem de peixes por região e época ideal para pescar. A comunidade de usuários alimenta os dados confirmando se o peixe está dando em cada ponto e postando fotos.

- <img src="https://api.iconify.design/lucide/map-pin.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Mapa interativo:** Pontos de pesca em todo o Brasil com marcadores por status
- <img src="https://api.iconify.design/lucide/filter.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Filtros:** Por tipo de ponto - Lagos, Rios, Açudes e Mar
- <img src="https://api.iconify.design/lucide/users.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Comunidade:** Pescadores postam relatos e confirmam se o peixe está dando
- <img src="https://api.iconify.design/lucide/search.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Busca:** Por nome do ponto, região ou espécie de peixe

<br>

## <img src="https://api.iconify.design/lucide/users.svg?color=%230A4174" width="24" height="24" style="vertical-align: middle;"> Time

| Membro | GitHub |
| --- | --- |
| Raian Rodrigues Guimarães | [@rainzrz](https://github.com/rainzrz) |
| João Pedro Beilke da Costa | - |
| Everton Leonel Rodrigues dos Santos | [@Everton302Rodrigues](https://github.com/Everton302Rodrigues) |

<br>

## <img src="https://api.iconify.design/lucide/git-branch.svg?color=%230A4174" width="24" height="24" style="vertical-align: middle;"> Como Contribuir

A branch `main` está protegida. Todo código entra via Pull Request com CI obrigatório.

```bash
# 1. Clone o repositório
git clone https://github.com/rainzrz/FishSpot-.git

# 2. Instale as dependências
npm install

# 3. Crie uma branch para sua feature
git checkout -b feature/nome-da-feature

# 4. Faça suas alterações e commite
git add .
git commit -m "feat: descricao do que fez"

# 5. Suba a branch e abra um Pull Request
git push origin feature/nome-da-feature
```

| Prefixo | Quando usar |
| --- | --- |
| `feature/` | Nova funcionalidade |
| `fix/` | Correção de bug |
| `chore/` | Configuração, dependências, CI |
| `docs/` | Documentação |

<br>

## <img src="https://api.iconify.design/lucide/check-circle.svg?color=%230A4174" width="24" height="24" style="vertical-align: middle;"> Pipeline de CI

Utilizamos **GitHub Actions** com 5 jobs que rodam automaticamente em todo Pull Request para `main`.

- <img src="https://api.iconify.design/lucide/code.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Validar HTML:** HTMLHint verifica a estrutura do `index.html`
- <img src="https://api.iconify.design/lucide/paintbrush.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Validar CSS:** Stylelint verifica o `style.css`
- <img src="https://api.iconify.design/lucide/braces.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Validar JavaScript:** ESLint verifica o `app.js`
- <img src="https://api.iconify.design/lucide/flask-conical.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Testes Unitários:** Jest com 22 testes cobrindo filtros, busca e dados
- <img src="https://api.iconify.design/lucide/package.svg?color=%230A4174" width="16" height="16" style="vertical-align: middle;"> **Build:** Gera o artefato em `dist/` - só roda se todos os anteriores passarem

Para rodar localmente:

```bash
npm run lint    # Valida HTML, CSS e JS
npm test        # Roda os testes
npm run build   # Gera o build em dist/
```

<br>

## <img src="https://api.iconify.design/lucide/folder-open.svg?color=%230A4174" width="24" height="24" style="vertical-align: middle;"> Estrutura do Projeto

```
FishSpot-/
├── .github/workflows/ci.yml   # Pipeline de CI
├── scripts/build.js            # Script de build
├── src/
│   ├── css/style.css           # Estilos
│   ├── js/app.js               # Lógica da aplicação
│   └── index.html              # Página principal
├── tests/fishspot.test.js      # Testes unitários
├── .eslintrc.json
├── .htmlhintrc
├── .stylelintrc.json
└── package.json
```

<br>

## <img src="https://api.iconify.design/lucide/map.svg?color=%230A4174" width="24" height="24" style="vertical-align: middle;"> Roadmap

| Mês | Entrega | Risco |
| --- | --- | --- |
| Abril | Mapa com pontos de pesca + listagem de peixes por região | Base de dados inicial pequena - mitigar cadastrando pontos manualmente |
| Maio | Comunidade: fotos, confirmações de pesca por ponto | Depende do sistema de login estar funcionando desde Abril |
| Junho | Análise de dados, feedback de usuários, planejamento do próximo trimestre | Atrasos nos meses anteriores podem consumir esse tempo |

<br>

<p align="center">
  <sub>Feito com <img src="https://api.iconify.design/lucide/heart.svg?color=%230A4174" width="12" height="12" style="vertical-align: middle;"> para a comunidade brasileira de pescadores.</sub>
</p>
