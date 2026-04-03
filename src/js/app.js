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
      { name: "Tilápia", emoji: "🐟", season: "Ano todo" },
      { name: "Tucunaré", emoji: "🐠", season: "Nov – Mar" },
      { name: "Traíra", emoji: "🐡", season: "Out – Fev" },
    ],
    description: "Um dos maiores açudes do Ceará, ótimo para tilápia e tucunaré. Acesso fácil pela CE-060.",
    posts: [1, 2],
  },
  {
    id: 2,
    name: "Rio São Francisco – Sobradinho",
    type: "rio",
    lat: -9.4485, lng: -40.8320,
    region: "Sobradinho - BA",
    status: "hot",
    confirmations: 31,
    fish: [
      { name: "Surubim", emoji: "🐟", season: "Abr – Set" },
      { name: "Dourado", emoji: "🐠", season: "Jul – Nov" },
      { name: "Pescada", emoji: "🐡", season: "Ano todo" },
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
      { name: "Corvina", emoji: "🐟", season: "Out – Mar" },
      { name: "Bagre", emoji: "🐠", season: "Ano todo" },
      { name: "Tainha", emoji: "🐡", season: "Mai – Jul" },
    ],
    description: "Maior lagoa do Brasil, excelente para corvina e tainha na temporada.",
    posts: [4],
  },
  {
    id: 4,
    name: "Paraty – Ponta Negra",
    type: "mar",
    lat: -23.2119, lng: -44.7156,
    region: "Paraty - RJ",
    status: "cold",
    confirmations: 2,
    fish: [
      { name: "Robalo", emoji: "🐟", season: "Nov – Mar" },
      { name: "Garoupa", emoji: "🐠", season: "Ago – Dez" },
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
      { name: "Tilápia", emoji: "🐟", season: "Ano todo" },
      { name: "Curimatã", emoji: "🐠", season: "Jan – Jun" },
      { name: "Piaba", emoji: "🐡", season: "Ano todo" },
    ],
    description: "Segundo maior açude do Ceará. Tilápia abundante, fácil acesso por barco.",
    posts: [5],
  },
  {
    id: 6,
    name: "Rio Pantanal – Porto Jofre",
    type: "rio",
    lat: -17.3469, lng: -56.8358,
    region: "Mato Grosso",
    status: "hot",
    confirmations: 47,
    fish: [
      { name: "Pintado", emoji: "🐟", season: "Abr – Out" },
      { name: "Dourado", emoji: "🐠", season: "Ago – Nov" },
      { name: "Pacu", emoji: "🐡", season: "Ano todo" },
    ],
    description: "Paraíso da pesca esportiva no Pantanal. Pintado e dourado em quantidade.",
    posts: [6],
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
];

// ===== STATE =====
let currentUser = null;
let activeFilter = "all";
let likedPosts = new Set();
let userConfirmations = new Set();
let map;
let markers = [];
let localPosts = [...POSTS];
let spotConfirmations = {};
SPOTS.forEach(s => spotConfirmations[s.id] = s.confirmations);

// ===== MAP INIT =====
function initMap() {
  map = L.map("map", { zoomControl: false }).setView([-14, -51], 4);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);

  L.control.zoom({ position: "topright" }).addTo(map);

  renderMarkers();
}

function makeIcon(spot) {
  const colorClass = spot.status === "hot" ? "marker-hot" : spot.status === "cold" ? "marker-cold" : "";
  return L.divIcon({
    className: "",
    html: `<div class="custom-marker ${colorClass}"><span>🎣</span></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });
}

function renderMarkers() {
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const filtered = activeFilter === "all" ? SPOTS : SPOTS.filter(s => s.type === activeFilter);

  filtered.forEach(spot => {
    const marker = L.marker([spot.lat, spot.lng], { icon: makeIcon(spot) }).addTo(map);
    marker.bindTooltip(spot.name, { direction: "top", offset: [0, -28] });
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

  const statusLabel = spot.status === "hot" ? "🔥 Peixe dando" : "❄️ Inativo";
  const statusClass = spot.status === "hot" ? "hot" : "cold";

  const fishHTML = spot.fish.map(f =>
    `<div class="fish-tag">
      <span style="font-size:20px">${f.emoji}</span>
      <span class="fish-name">${f.name}</span>
      <span class="fish-season">${f.season}</span>
    </div>`
  ).join("");

  const spotPosts = localPosts.filter(p => p.spotId === spot.id).slice(0, 3);
  const postsHTML = spotPosts.length
    ? spotPosts.map(p =>
        `<div class="mini-post">
          <div class="mini-post-header">
            <span class="mini-post-author">👤 ${p.author}</span>
            <span class="mini-post-date">${formatDate(p.date)}</span>
          </div>
          <div>${p.text}</div>
        </div>`
      ).join("")
    : `<p style="color:var(--text-muted);font-size:13px">Nenhum relato ainda. Seja o primeiro!</p>`;

  const typeLabels = { lago: "Lago", rio: "Rio", acude: "Açude", mar: "Mar" };

  content.innerHTML = `
    <div class="spot-title">${spot.name}</div>
    <div class="spot-meta">
      <span>${typeLabels[spot.type] || spot.type}</span>
      <span>📍 ${spot.region}</span>
      <span class="spot-badge ${statusClass}">${statusLabel}</span>
    </div>
    <p style="font-size:14px;color:var(--text-muted);line-height:1.5">${spot.description}</p>

    <div class="spot-section-title">Peixes neste ponto</div>
    <div class="fish-list">${fishHTML}</div>

    <div class="confirmation-bar">
      <span class="confirm-icon">✅</span>
      <span class="confirm-text">Confirmações da comunidade</span>
      <span class="confirm-count" id="confirmCount-${spot.id}">${confirmCount}</span>
      <button class="btn-confirm" id="confirmBtn-${spot.id}" ${confirmed ? "disabled" : ""}
        onclick="confirmSpot(${spot.id})">
        ${confirmed ? "Confirmado" : "Confirmar"}
      </button>
    </div>

    <div class="spot-section-title">Relatos recentes</div>
    <div class="spot-posts">${postsHTML}</div>
  `;

  panel.classList.remove("hidden");
}

function confirmSpot(spotId) {
  if (!currentUser) {
    alert("Faça login para confirmar pontos de pesca!");
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

  [...localPosts].reverse().forEach(post => {
    const spot = SPOTS.find(s => s.id === post.spotId);
    const spotName = spot ? spot.name : "Ponto desconhecido";
    const liked = likedPosts.has(post.id);

    const card = document.createElement("div");
    card.className = "post-card";
    card.innerHTML = `
      <div class="post-header">
        <div class="post-avatar">🎣</div>
        <div class="post-author-info">
          <div class="post-author">${post.author}</div>
          <div class="post-spot">📍 ${spotName}</div>
        </div>
        <span class="post-date">${formatDate(post.date)}</span>
      </div>
      <p class="post-text">${post.text}</p>
      ${post.hasImage ? `<div class="post-img-placeholder">📸</div>` : ""}
      <div class="post-footer">
        <button class="post-action ${liked ? "liked" : ""}" data-post="${post.id}" onclick="toggleLike(${post.id}, this)">
          ❤️ <span id="likes-${post.id}">${post.likes + (liked ? 0 : 0)}</span>
        </button>
        <button class="post-action" onclick="openSpotFromFeed(${post.spotId})">🗺 Ver no mapa</button>
        ${post.confirmed ? `<span class="confirmed-badge">✅ Confirmado</span>` : ""}
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
  if (!currentUser) {
    alert("Faça login para postar na comunidade!");
    return;
  }
  const select = document.getElementById("postSpot");
  select.innerHTML = SPOTS.map(s => `<option value="${s.id}">${s.name}</option>`).join("");
  document.getElementById("postText").value = "";
  document.getElementById("postConfirm").checked = false;
  document.getElementById("postModal").classList.remove("hidden");
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
function login() {
  const name = document.getElementById("inputName").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  if (!name || !email) { alert("Preencha nome e e-mail!"); return; }

  currentUser = { name, email };
  document.getElementById("btnLogin").textContent = name.split(" ")[0];
  document.getElementById("profileName").textContent = name;
  document.getElementById("profileBio").textContent = email;
  document.getElementById("loginModal").classList.add("hidden");
  updateProfileStats();
}

function updateProfileStats() {
  if (!currentUser) return;
  const visited = userConfirmations.size;
  const confirmCount = userConfirmations.size;
  const photos = localPosts.filter(p => p.author === currentUser.name && p.hasImage).length;
  const stats = document.querySelectorAll(".stat-val");
  if (stats[0]) stats[0].textContent = visited;
  if (stats[1]) stats[1].textContent = confirmCount;
  if (stats[2]) stats[2].textContent = photos;

  const userPostsEl = document.getElementById("userPosts");
  const myPosts = localPosts.filter(p => p.author === currentUser.name);
  if (myPosts.length === 0) {
    userPostsEl.innerHTML = `<div class="user-posts-empty">Nenhum post ainda.</div>`;
  } else {
    userPostsEl.innerHTML = myPosts.reverse().map(p => {
      const spot = SPOTS.find(s => s.id === p.spotId);
      return `<div class="mini-post">
        <div class="mini-post-header">
          <span class="mini-post-author">📍 ${spot ? spot.name : "Ponto"}</span>
          <span class="mini-post-date">${formatDate(p.date)}</span>
        </div>
        <div>${p.text}</div>
      </div>`;
    }).join("");
  }
}

// ===== NAVIGATION =====
function switchView(view) {
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  document.getElementById(`view-${view}`).classList.remove("hidden");
  document.querySelectorAll(".nav-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.view === view);
  });
  if (view === "feed") renderFeed();
  if (view === "map") setTimeout(() => map.invalidateSize(), 100);
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
    marker.bindTooltip(spot.name, { direction: "top", offset: [0, -28] });
    marker.on("click", () => openSpotPanel(spot));
    markers.push(marker);
  });
  if (results.length === 1) {
    map.setView([results[0].lat, results[0].lng], 12);
  }
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
        html: `<div style="background:#e74c3c;width:14px;height:14px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 4px rgba(231,76,60,0.3)"></div>`,
        iconSize: [14, 14], iconAnchor: [7, 7],
      })
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

  document.getElementById("btnLogin").addEventListener("click", () => {
    document.getElementById("loginModal").classList.remove("hidden");
  });

  document.getElementById("modalClose").addEventListener("click", () => {
    document.getElementById("loginModal").classList.add("hidden");
  });

  document.getElementById("btnConfirmLogin").addEventListener("click", login);

  document.getElementById("btnNewPost").addEventListener("click", openPostModal);
  document.getElementById("postModalClose").addEventListener("click", () => {
    document.getElementById("postModal").classList.add("hidden");
  });
  document.getElementById("btnSubmitPost").addEventListener("click", submitPost);

  document.getElementById("btnLocate").addEventListener("click", locateUser);

  document.getElementById("searchInput").addEventListener("input", e => handleSearch(e.target.value));

  document.getElementById("postPhoto").addEventListener("change", () => {
    document.querySelector(".upload-label").textContent = "📷 Foto adicionada ✓";
  });
});
