// ===== DATA =====
const SPOTS = [
  {
    id: 1,
    name: "Açude Cedro",
    type: "acude",
    lat: -6.5498, lng: -39.0517,
    region: "Quixadá - CE",
    status: "hot",
    confirmations: 14,
    fish: [
      { name: "Tilápia", season: "Ano todo" },
      { name: "Tucunaré", season: "Nov - Mar" },
      { name: "Traíra", season: "Out - Fev" },
    ],
    description: "Um dos maiores açudes do Ceará, ótimo para tilápia e tucunaré. Acesso fácil pela CE-060.",
    posts: [1, 2],
  },
  {
    id: 2,
    name: "Rio São Francisco - Sobradinho",
    type: "rio",
    lat: -9.4485, lng: -40.8320,
    region: "Sobradinho - BA",
    status: "hot",
    confirmations: 31,
    fish: [
      { name: "Surubim", season: "Abr - Set" },
      { name: "Dourado", season: "Jul - Nov" },
      { name: "Pescada", season: "Ano todo" },
    ],
    description: "Trecho do Rio São Francisco com boa pesca de surubim e dourado. Barcos disponíveis na marina.",
    posts: [3],
  },
  {
    id: 3,
    name: "Lagoa dos Patos",
    type: "lago",
    lat: -31.0000, lng: -51.3500,
    region: "RS",
    status: "hot",
    confirmations: 8,
    fish: [
      { name: "Corvina", season: "Out - Mar" },
      { name: "Bagre", season: "Ano todo" },
      { name: "Tainha", season: "Mai - Jul" },
    ],
    description: "Maior lagoa do Brasil, excelente para corvina e tainha na temporada.",
    posts: [4],
  },
  {
    id: 4,
    name: "Paraty - Ponta Negra",
    type: "mar",
    lat: -23.2119, lng: -44.7156,
    region: "Paraty - RJ",
    status: "cold",
    confirmations: 2,
    fish: [
      { name: "Robalo", season: "Nov - Mar" },
      { name: "Garoupa", season: "Ago - Dez" },
    ],
    description: "Pesca oceânica com barcos charter. Robalo em abundância entre novembro e março.",
    posts: [],
  },
  {
    id: 5,
    name: "Açude Orós",
    type: "acude",
    lat: -6.2476, lng: -38.9140,
    region: "Orós - CE",
    status: "hot",
    confirmations: 19,
    fish: [
      { name: "Tilápia", season: "Ano todo" },
      { name: "Curimatã", season: "Jan - Jun" },
      { name: "Piaba", season: "Ano todo" },
    ],
    description: "Segundo maior açude do Ceará. Tilápia abundante, fácil acesso por barco.",
    posts: [5],
  },
  {
    id: 6,
    name: "Rio Pantanal - Porto Jofre",
    type: "rio",
    lat: -17.3469, lng: -56.8358,
    region: "Mato Grosso",
    status: "hot",
    confirmations: 47,
    fish: [
      { name: "Pintado", season: "Abr - Out" },
      { name: "Dourado", season: "Ago - Nov" },
      { name: "Pacu", season: "Ano todo" },
    ],
    description: "Paraíso da pesca esportiva no Pantanal. Pintado e dourado em quantidade.",
    posts: [6],
  },
  {
    id: 7,
    name: "Represa de Furnas",
    type: "lago",
    lat: -20.6833, lng: -46.3167,
    region: "Alpinópolis - MG",
    status: "hot",
    confirmations: 38,
    fish: [
      { name: "Tucunaré", season: "Out - Mar" },
      { name: "Tilápia", season: "Ano todo" },
      { name: "Piau", season: "Nov - Fev" },
    ],
    description: "Um dos maiores lagos artificiais do Brasil. Pesca de tucunaré é destaque, especialmente nas enseadas com macrófitas.",
    posts: [7],
  },
  {
    id: 8,
    name: "Rio Araguaia - Ilha do Bananal",
    type: "rio",
    lat: -11.3167, lng: -50.4833,
    region: "Tocantins",
    status: "hot",
    confirmations: 62,
    fish: [
      { name: "Pintado", season: "Abr - Set" },
      { name: "Piraputanga", season: "Ano todo" },
      { name: "Cachara", season: "Mai - Out" },
      { name: "Dourado", season: "Jul - Nov" },
    ],
    description: "Um dos rios mais famosos para pesca esportiva do Brasil. Temporada de pesca concentrada entre abril e setembro.",
    posts: [8, 9],
  },
  {
    id: 9,
    name: "Praia de Itaipava - Pesca de Praia",
    type: "mar",
    lat: -15.6833, lng: -38.9833,
    region: "Itacaré - BA",
    status: "hot",
    confirmations: 11,
    fish: [
      { name: "Robalo", season: "Nov - Mar" },
      { name: "Badejo", season: "Ago - Jan" },
      { name: "Cavala", season: "Set - Fev" },
    ],
    description: "Costa baiana com pesca de praia e embarcada. Robalo e cavala são os principais alvos na temporada quente.",
    posts: [],
  },
  {
    id: 10,
    name: "Represa Billings",
    type: "lago",
    lat: -23.7667, lng: -46.6167,
    region: "São Bernardo do Campo - SP",
    status: "cold",
    confirmations: 4,
    fish: [
      { name: "Tilápia", season: "Ano todo" },
      { name: "Bagre", season: "Ano todo" },
    ],
    description: "Represa na Grande São Paulo. Pesca moderada de tilápia e bagre. Verifique permissões locais antes de pescar.",
    posts: [],
  },
  {
    id: 11,
    name: "Rio Negro - Barcelos",
    type: "rio",
    lat: -0.9783, lng: -62.9258,
    region: "Barcelos - AM",
    status: "hot",
    confirmations: 55,
    fish: [
      { name: "Tucunaré Açu", season: "Set - Mar" },
      { name: "Bicuda", season: "Out - Fev" },
      { name: "Pavão", season: "Set - Jan" },
    ],
    description: "Capital mundial da pesca de tucunaré. Águas pretas do Rio Negro produzem os maiores exemplares do Brasil. Pesca e soltura obrigatória.",
    posts: [10],
  },
  {
    id: 12,
    name: "Açude Boqueirão",
    type: "acude",
    lat: -7.4833, lng: -36.1333,
    region: "Campina Grande - PB",
    status: "cold",
    confirmations: 3,
    fish: [
      { name: "Tilápia", season: "Ano todo" },
      { name: "Traíra", season: "Out - Mar" },
    ],
    description: "Principal reservatório da Paraíba. Nível variável ao longo do ano impacta a pesca. Melhor na época das chuvas.",
    posts: [],
  },
  {
    id: 13,
    name: "Lagoa Rodrigo de Freitas",
    type: "lago",
    lat: -22.9711, lng: -43.1878,
    region: "Rio de Janeiro - RJ",
    status: "cold",
    confirmations: 2,
    fish: [
      { name: "Tilápia", season: "Ano todo" },
      { name: "Tainha", season: "Mai - Jul" },
    ],
    description: "Lagoa urbana no coração do Rio. Pesca recreativa de tilápia. Acesso fácil e gratuito pela orla.",
    posts: [],
  },
  {
    id: 14,
    name: "Rio Tocantins - Imperatriz",
    type: "rio",
    lat: -5.5167, lng: -47.4833,
    region: "Imperatriz - MA",
    status: "hot",
    confirmations: 29,
    fish: [
      { name: "Filhote", season: "Abr - Out" },
      { name: "Surubim", season: "Mai - Set" },
      { name: "Matrinxã", season: "Ano todo" },
    ],
    description: "Trecho produtivo do Rio Tocantins antes do reservatório de Tucuruí. Surubim e filhote de grande porte.",
    posts: [11],
  },
  {
    id: 15,
    name: "Costa dos Coqueiros - Offshore",
    type: "mar",
    lat: -12.5667, lng: -37.9833,
    region: "Mata de São João - BA",
    status: "hot",
    confirmations: 17,
    fish: [
      { name: "Atum", season: "Nov - Mar" },
      { name: "Marlim", season: "Dez - Abr" },
      { name: "Dourado", season: "Out - Fev" },
    ],
    description: "Pesca oceânica a 20-40 milhas da costa baiana. Espécies pelágicas de alto porte. Requer embarcação adequada.",
    posts: [],
  },
  {
    id: 16,
    name: "Represa de Ilha Solteira",
    type: "lago",
    lat: -20.4167, lng: -51.3333,
    region: "Ilha Solteira - SP",
    status: "hot",
    confirmations: 44,
    fish: [
      { name: "Tucunaré", season: "Out - Mar" },
      { name: "Pintado", season: "Abr - Set" },
      { name: "Pacu", season: "Ano todo" },
      { name: "Dourado", season: "Jul - Nov" },
    ],
    description: "Um dos melhores reservatórios para pesca esportiva do Sudeste. Estrutura completa com ranchos e barcos disponíveis.",
    posts: [12],
  },
  {
    id: 17,
    name: "Rio Iguaçu - União da Vitória",
    type: "rio",
    lat: -26.2333, lng: -51.0833,
    region: "União da Vitória - PR",
    status: "hot",
    confirmations: 21,
    fish: [
      { name: "Dourado", season: "Set - Mar" },
      { name: "Cascudo", season: "Ano todo" },
      { name: "Piapara", season: "Out - Fev" },
    ],
    description: "Rio Iguaçu no Paraná com ótima pesca de dourado na primavera e verão. Corredeiras e remansos ao longo do trecho.",
    posts: [],
  },
  {
    id: 18,
    name: "Litoral de Florianópolis - Pesca Embarcada",
    type: "mar",
    lat: -27.5954, lng: -48.5480,
    region: "Florianópolis - SC",
    status: "hot",
    confirmations: 33,
    fish: [
      { name: "Anchova", season: "Abr - Jul" },
      { name: "Linguado", season: "Ano todo" },
      { name: "Tainha", season: "Mai - Jul" },
      { name: "Robalo", season: "Out - Mar" },
    ],
    description: "Costa catarinense rica em espécies. Tainha é o destaque nos meses frios. Pesca embarcada com guias experientes disponíveis.",
    posts: [13],
  },
  {
    id: 19,
    name: "Açude Acarape do Meio",
    type: "acude",
    lat: -4.2167, lng: -38.7000,
    region: "Redenção - CE",
    status: "hot",
    confirmations: 16,
    fish: [
      { name: "Tilápia", season: "Ano todo" },
      { name: "Curimatã", season: "Jan - Jun" },
      { name: "Traíra", season: "Out - Mar" },
    ],
    description: "Açude médio no Ceará com boa produtividade de tilápia. Acesso pela CE-354, estrutura simples próxima.",
    posts: [],
  },
  {
    id: 20,
    name: "Rio Paraná - Porto Rico",
    type: "rio",
    lat: -22.7667, lng: -53.2667,
    region: "Porto Rico - PR",
    status: "hot",
    confirmations: 58,
    fish: [
      { name: "Dourado", season: "Set - Mar" },
      { name: "Pintado", season: "Abr - Out" },
      { name: "Pacu", season: "Ano todo" },
      { name: "Jaú", season: "Abr - Set" },
    ],
    description: "Um dos trechos mais famosos do Rio Paraná. Porto Rico é referência nacional para pesca esportiva de dourado e pintado.",
    posts: [14, 15],
  },
];

const POSTS = [
  {
    id: 1,
    author: "Marcos Pescador",
    spotId: 1,
    text: "Tilápia dando muito hoje de manhã cedo! Usei isca artificial perto das pedras e pegou bastante. Recomendo chegar antes das 6h.",
    date: "2026-04-02",
    likes: 12,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 2,
    author: "Ana Lima",
    spotId: 1,
    text: "Fui ontem à tarde, tucunaré não quis aparecer muito mas a tilápia compensou. Água limpa, bom acesso.",
    date: "2026-04-01",
    likes: 5,
    confirmed: true,
    hasImage: false,
  },
  {
    id: 3,
    author: "Carlos do Rio",
    spotId: 2,
    text: "Surubim de 4kg hoje! Pesca de fundo com lambari como isca. Maré estava ótima.",
    date: "2026-03-30",
    likes: 27,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 4,
    author: "Gaúcho Pescador",
    spotId: 3,
    text: "Corvina em quantidade! Temporada começando forte. Trouxe 6kg hoje.",
    date: "2026-04-01",
    likes: 9,
    confirmed: true,
    hasImage: false,
  },
  {
    id: 5,
    author: "Pedro Cearense",
    spotId: 5,
    text: "Açude cheio depois das chuvas. Tilápia explodindo! Melhor época do ano.",
    date: "2026-04-02",
    likes: 18,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 6,
    author: "Mateus Pantaneiro",
    spotId: 6,
    text: "Pintado de 8kg capturado e solto. Pantanal é outro mundo para quem ama pescar.",
    date: "2026-03-28",
    likes: 41,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 7,
    author: "Rodrigo Mineiro",
    spotId: 7,
    text: "Tucunaré em quantidade na Represa de Furnas! Peguei 4 exemplares de manhã, maior com quase 2kg. Isca artificial funcionou bem.",
    date: "2026-04-01",
    likes: 22,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 8,
    author: "Leandro Araguaia",
    spotId: 8,
    text: "Temporada incrível no Araguaia. Pintado de 12kg ontem à noite, pesca de fundo com isca natural. Guia local recomendadíssimo.",
    date: "2026-03-29",
    likes: 35,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 9,
    author: "Fernanda Toledo",
    spotId: 8,
    text: "Primeira vez no Araguaia e não me decepcionei. Rio limpo, estrutura boa no acampamento e muito peixe!",
    date: "2026-03-31",
    likes: 14,
    confirmed: true,
    hasImage: false,
  },
  {
    id: 10,
    author: "Amazonas Fish",
    spotId: 11,
    text: "Tucunaré Açu de 6kg no Rio Negro! Pesca e soltura, foto e de volta ao rio. Aigues escuras do Negro são outro nível.",
    date: "2026-04-02",
    likes: 67,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 11,
    author: "Welison Tocantins",
    spotId: 14,
    text: "Filhote de quase 20kg capturado e solto! Pesca noturna com lambari. Rio Tocantins continua produtivo.",
    date: "2026-03-27",
    likes: 48,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 12,
    author: "Tiago SP",
    spotId: 16,
    text: "Ilha Solteira entregando demais! 3 tucunarés, 2 pacus e um pintado de 6kg em um único dia. Rancho bem estruturado.",
    date: "2026-04-01",
    likes: 31,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 13,
    author: "Catarinense Pesca",
    spotId: 18,
    text: "Tainha na costa de Floripa! Temporada chegando forte, já pegamos bastante hoje de manhã cedinho.",
    date: "2026-03-30",
    likes: 19,
    confirmed: true,
    hasImage: false,
  },
  {
    id: 14,
    author: "Paraná Esportivo",
    spotId: 20,
    text: "Porto Rico nunca decepciona. Dourado de 8kg na superfície com isca artificial. Rio Paraná em ótimo nível.",
    date: "2026-04-02",
    likes: 53,
    confirmed: true,
    hasImage: true,
  },
  {
    id: 15,
    author: "Marcelo Peixe",
    spotId: 20,
    text: "Pintado de 15kg capturado e solto. Pesca de fundo à meia noite. Experiência inesquecível no Paraná.",
    date: "2026-04-01",
    likes: 44,
    confirmed: true,
    hasImage: true,
  },
];

// ===== SVG ICONS =====
const ICON = {
  pin: `<svg viewBox="0 0 20 20" fill="none"><path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 10 5a1.5 1.5 0 0 1 0 3.5z" fill="currentColor"/></svg>`,
  fish: `<svg viewBox="0 0 20 20" fill="none"><path d="M3 10s3-5 8-5c2.5 0 4 1.5 5 3l2-2v5h-5l2-2c-1-1.5-2.5-2-4-2C7 7 5 10 5 10l-2 0z" fill="currentColor"/><path d="M5 10s2 4 7 4c2.5 0 4-1.5 5-3" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>`,
  heart: `<svg viewBox="0 0 20 20" fill="none"><path d="M10 16s-7-4.35-7-8.5A4.5 4.5 0 0 1 10 5.128 4.5 4.5 0 0 1 17 7.5C17 11.65 10 16 10 16z" stroke="currentColor" stroke-width="1.5"/></svg>`,
  map: `<svg viewBox="0 0 20 20" fill="none"><path d="M2 4l5 2 6-2 5 2v12l-5-2-6 2-5-2V4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 6v12M13 4v12" stroke="currentColor" stroke-width="1.5"/></svg>`,
  check: `<svg viewBox="0 0 20 20" fill="none"><path d="M4 10l5 5 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  checkCircle: `<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M6 10l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  photo: `<svg viewBox="0 0 20 20" fill="none"><path d="M4 16l4-4 3 3 4-5 5 6H4z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>`,
  users: `<svg viewBox="0 0 20 20" fill="none"><path d="M13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 17a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
};

// ===== STATE =====
let currentUser = null;
let activeFilter = "all";
let likedPosts = new Set();
let userConfirmations = new Set();
let map;
let markers = [];
let localPosts = [...POSTS];
let spotConfirmations = {};
SPOTS.forEach(s => { spotConfirmations[s.id] = s.confirmations; });

// ===== MAP INIT =====
function initMap() {
  map = L.map("map", { zoomControl: false }).setView([-14, -51], 4);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  L.control.zoom({ position: "topright" }).addTo(map);
  renderMarkers();
}

function makeIcon(spot) {
  const cls = spot.status === "cold" ? "cold" : "hot";
  return L.divIcon({
    className: "",
    html: `<div class="fs-marker ${cls}">${ICON.fish}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

function renderMarkers() {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const filtered = activeFilter === "all" ? SPOTS : SPOTS.filter(s => s.type === activeFilter);

  filtered.forEach(spot => {
    const marker = L.marker([spot.lat, spot.lng], { icon: makeIcon(spot) }).addTo(map);
    marker.bindTooltip(spot.name, { direction: "top", offset: [0, -32], className: "fs-tooltip" });
    marker.on("click", () => openSpotPanel(spot));
    markers.push(marker);
  });
}

// ===== SPOT PANEL =====
function openSpotPanel(spot) {
  const panel = document.getElementById("spotPanel");
  const content = document.getElementById("spotContent");
  const confirmed = userConfirmations.has(spot.id);
  const confirmCount = spotConfirmations[spot.id];

  const statusLabel = spot.status === "hot" ? "Peixe dando" : "Inativo";
  const statusClass = spot.status === "hot" ? "hot" : "cold";
  const typeLabels = { lago: "Lago", rio: "Rio", acude: "Açude", mar: "Mar" };

  const fishHTML = spot.fish.map(f =>
    `<div class="fish-tag">
      <span class="fish-name">${f.name}</span>
      <span class="fish-season">${f.season}</span>
    </div>`
  ).join("");

  const spotPosts = localPosts.filter(p => p.spotId === spot.id).slice(0, 3);
  const postsHTML = spotPosts.length
    ? spotPosts.map(p =>
        `<div class="mini-post">
          <div class="mini-post-header">
            <span class="mini-post-author">${p.author}</span>
            <span class="mini-post-date">${formatDate(p.date)}</span>
          </div>
          <p class="mini-post-text">${p.text}</p>
        </div>`
      ).join("")
    : `<p style="font-size:13px;color:var(--text-sm)">Nenhum relato ainda. Seja o primeiro!</p>`;

  content.innerHTML = `
    <div class="spot-title">${spot.name}</div>
    <div class="spot-meta">
      <span class="spot-meta-item">
        ${ICON.pin}
        ${typeLabels[spot.type] || spot.type} &middot; ${spot.region}
      </span>
      <span class="spot-badge ${statusClass}">
        <span class="badge-dot"></span>
        ${statusLabel}
      </span>
    </div>
    <p class="spot-description">${spot.description}</p>

    <div class="section-label">Espécies neste ponto</div>
    <div class="fish-list">${fishHTML}</div>

    <div class="confirmation-bar">
      <div class="confirm-icon-wrap">${ICON.checkCircle}</div>
      <div class="confirm-text-wrap">
        <div class="confirm-label">Confirmações da comunidade</div>
        <div class="confirm-count" id="confirmCount-${spot.id}">${confirmCount}</div>
      </div>
      <button class="btn-confirm" id="confirmBtn-${spot.id}"
        ${confirmed ? "disabled" : ""}
        onclick="confirmSpot(${spot.id})">
        ${confirmed ? "Confirmado" : "Confirmar"}
      </button>
    </div>

    <div class="section-label">Relatos recentes</div>
    ${postsHTML}
  `;

  panel.classList.remove("hidden");
}

function confirmSpot(spotId) {
  if (!currentUser) {
    openLoginModal();
    return;
  }
  if (userConfirmations.has(spotId)) return;
  userConfirmations.add(spotId);
  spotConfirmations[spotId]++;
  document.getElementById(`confirmCount-${spotId}`).textContent = spotConfirmations[spotId];
  const btn = document.getElementById(`confirmBtn-${spotId}`);
  btn.textContent = "Confirmado";
  btn.disabled = true;
}

// ===== FEED =====
function renderFeed() {
  const list = document.getElementById("feedList");
  list.innerHTML = "";

  [...localPosts].reverse().forEach((post, i) => {
    const spot = SPOTS.find(s => s.id === post.spotId);
    const spotName = spot ? spot.name : "Ponto desconhecido";
    const liked = likedPosts.has(post.id);
    const initials = post.author.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();

    const card = document.createElement("div");
    card.className = "post-card";
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="post-header">
        <div class="post-avatar">${initials}</div>
        <div class="post-author-info">
          <div class="post-author">${post.author}</div>
          <div class="post-spot">
            ${ICON.pin}
            ${spotName}
          </div>
        </div>
        <span class="post-date">${formatDate(post.date)}</span>
      </div>
      <p class="post-text">${post.text}</p>
      ${post.hasImage ? `<div class="post-img-placeholder">${ICON.photo}</div>` : ""}
      <div class="post-footer">
        <button class="post-action ${liked ? "liked" : ""}" onclick="toggleLike(${post.id}, this)">
          ${ICON.heart}
          <span id="likes-${post.id}">${post.likes}</span>
        </button>
        <button class="post-action" onclick="openSpotFromFeed(${post.spotId})">
          ${ICON.map}
          Ver no mapa
        </button>
        ${post.confirmed ? `<span class="confirmed-badge">${ICON.checkCircle} Confirmado</span>` : ""}
      </div>
    `;
    list.appendChild(card);
  });
}

function toggleLike(postId, btn) {
  const post = localPosts.find(p => p.id === postId);
  if (!post) return;
  if (likedPosts.has(postId)) {
    likedPosts.delete(postId);
    post.likes--;
    btn.classList.remove("liked");
  } else {
    likedPosts.add(postId);
    post.likes++;
    btn.classList.add("liked");
  }
  document.getElementById(`likes-${postId}`).textContent = post.likes;
}

function openSpotFromFeed(spotId) {
  switchView("map");
  const spot = SPOTS.find(s => s.id === spotId);
  if (spot) {
    map.setView([spot.lat, spot.lng], 12);
    openSpotPanel(spot);
  }
}

// ===== NEW POST =====
function openPostModal() {
  if (!currentUser) { openLoginModal(); return; }
  const select = document.getElementById("postSpot");
  select.innerHTML = SPOTS.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
  document.getElementById("postText").value = "";
  document.getElementById("postConfirm").checked = false;
  document.getElementById("uploadLabel").innerHTML = `
    <svg viewBox="0 0 20 20" fill="none"><path d="M4 16l4-4 3 3 4-5 5 6H4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>
    Adicionar foto
    <input type="file" accept="image/*" id="postPhoto" />
  `;
  document.getElementById("postModal").classList.remove("hidden");
  bindPhotoInput();
}

function bindPhotoInput() {
  const input = document.getElementById("postPhoto");
  if (input) {
    input.addEventListener("change", () => {
      document.getElementById("uploadLabel").textContent = "Foto selecionada";
    });
  }
}

function submitPost() {
  const spotId = parseInt(document.getElementById("postSpot").value);
  const text = document.getElementById("postText").value.trim();
  const confirmed = document.getElementById("postConfirm").checked;

  if (!text) { alert("Escreva algo sobre o ponto!"); return; }

  const newPost = {
    id: localPosts.length + 1,
    author: currentUser.name,
    spotId,
    text,
    date: new Date().toISOString().split("T")[0],
    likes: 0,
    confirmed,
    hasImage: false,
  };

  localPosts.push(newPost);

  if (confirmed && !userConfirmations.has(spotId)) {
    userConfirmations.add(spotId);
    spotConfirmations[spotId]++;
  }

  document.getElementById("postModal").classList.add("hidden");
  renderFeed();
  updateProfileStats();
  switchView("feed");
}

// ===== AUTH =====
function openLoginModal() {
  document.getElementById("loginModal").classList.remove("hidden");
}

function login() {
  const name = document.getElementById("inputName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  if (!name || !email) { alert("Preencha nome e e-mail!"); return; }

  currentUser = { name, email };

  const label = document.getElementById("btnLoginLabel");
  label.textContent = name.split(" ")[0];

  document.getElementById("profileName").textContent = name;
  document.getElementById("profileBio").textContent = email;
  document.getElementById("loginModal").classList.add("hidden");
  updateProfileStats();
}

function updateProfileStats() {
  if (!currentUser) return;
  document.getElementById("statVisited").textContent = userConfirmations.size;
  document.getElementById("statConfirm").textContent = userConfirmations.size;
  document.getElementById("statPhotos").textContent = localPosts.filter(p => p.author === currentUser.name && p.hasImage).length;

  const userPostsEl = document.getElementById("userPosts");
  const myPosts = localPosts.filter(p => p.author === currentUser.name);

  if (myPosts.length === 0) {
    userPostsEl.innerHTML = `
      <div class="empty-state">
        ${ICON.fish}
        <p>Nenhuma postagem ainda.<br>Compartilhe sua pescaria!</p>
      </div>`;
    return;
  }

  userPostsEl.innerHTML = [...myPosts].reverse().map(p => {
    const spot = SPOTS.find(s => s.id === p.spotId);
    return `<div class="mini-post">
      <div class="mini-post-header">
        <span class="mini-post-author">${spot ? spot.name : "Ponto"}</span>
        <span class="mini-post-date">${formatDate(p.date)}</span>
      </div>
      <p class="mini-post-text">${p.text}</p>
    </div>`;
  }).join("");
}

// ===== NAVIGATION =====
function switchView(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  document.getElementById(`view-${view}`).classList.remove("hidden");
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.view === view);
  });

  const footer = document.getElementById("appFooter");
  if (view === "map") {
    footer.classList.remove("visible");
    setTimeout(() => map.invalidateSize(), 100);
  } else {
    footer.classList.add("visible");
  }

  if (view === "feed") renderFeed();
  if (view === "profile") updateProfileStats();
}

// ===== FILTER =====
function applyFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".chip").forEach(c => {
    c.classList.toggle("active", c.dataset.filter === filter);
  });
  renderMarkers();
}

// ===== SEARCH =====
function handleSearch(query) {
  if (!query.trim()) { renderMarkers(); return; }
  const q = query.toLowerCase();
  const results = SPOTS.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.region.toLowerCase().includes(q) ||
    s.fish.some(f => f.name.toLowerCase().includes(q))
  );
  markers.forEach(m => map.removeLayer(m));
  markers = [];
  results.forEach(spot => {
    const marker = L.marker([spot.lat, spot.lng], { icon: makeIcon(spot) }).addTo(map);
    marker.bindTooltip(spot.name, { direction: "top", offset: [0, -32] });
    marker.on("click", () => openSpotPanel(spot));
    markers.push(marker);
  });
  if (results.length === 1) map.setView([results[0].lat, results[0].lng], 12);
}

// ===== LOCATE =====
function locateUser() {
  if (!navigator.geolocation) { alert("Geolocalização não disponível."); return; }
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    map.setView([latitude, longitude], 10);
    L.marker([latitude, longitude], {
      icon: L.divIcon({
        className: "",
        html: `<div style="background:#0A4174;width:14px;height:14px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 5px rgba(10,65,116,.25)"></div>`,
        iconSize: [14, 14], iconAnchor: [7, 7],
      }),
    }).addTo(map).bindPopup("Você está aqui").openPopup();
  }, () => alert("Não foi possível obter sua localização."));
}

// ===== UTILS =====
function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

// ===== EVENTS =====
document.addEventListener("DOMContentLoaded", () => {
  initMap();

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => switchView(btn.dataset.view));
  });

  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => applyFilter(chip.dataset.filter));
  });

  document.getElementById("panelClose").addEventListener("click", () => {
    document.getElementById("spotPanel").classList.add("hidden");
  });

  document.getElementById("btnLogin").addEventListener("click", openLoginModal);

  document.getElementById("modalClose").addEventListener("click", () => {
    document.getElementById("loginModal").classList.add("hidden");
  });

  document.getElementById("loginBackdrop").addEventListener("click", () => {
    document.getElementById("loginModal").classList.add("hidden");
  });

  document.getElementById("btnConfirmLogin").addEventListener("click", login);

  document.getElementById("btnNewPost").addEventListener("click", openPostModal);

  document.getElementById("postModalClose").addEventListener("click", () => {
    document.getElementById("postModal").classList.add("hidden");
  });

  document.getElementById("postBackdrop").addEventListener("click", () => {
    document.getElementById("postModal").classList.add("hidden");
  });

  document.getElementById("btnSubmitPost").addEventListener("click", submitPost);

  document.getElementById("btnLocate").addEventListener("click", locateUser);

  document.getElementById("searchInput").addEventListener("input", e => handleSearch(e.target.value));

  bindPhotoInput();
});
