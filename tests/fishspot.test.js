/**
 * FishSpot – Testes Unitários
 * Cobertura: funções puras de dados e utilitários do app.js
 */

// ===== DADOS DE TESTE (espelho dos dados reais) =====
const SPOTS = [
  {
    id: 1, name: "Açude Cedro", type: "acude",
    lat: -6.5498, lng: -39.0517, region: "Quixadá - CE",
    status: "hot", confirmations: 14,
    fish: [
      { name: "Tilápia", emoji: "🐟", season: "Ano todo" },
      { name: "Tucunaré", emoji: "🐠", season: "Nov – Mar" },
    ],
    description: "Açude no CE.", posts: [1, 2],
  },
  {
    id: 2, name: "Rio São Francisco", type: "rio",
    lat: -9.4485, lng: -40.8320, region: "Sobradinho - BA",
    status: "hot", confirmations: 31,
    fish: [{ name: "Surubim", emoji: "🐟", season: "Abr – Set" }],
    description: "Rio no BA.", posts: [3],
  },
  {
    id: 3, name: "Ponta Negra", type: "mar",
    lat: -23.2119, lng: -44.7156, region: "Paraty - RJ",
    status: "cold", confirmations: 2,
    fish: [{ name: "Robalo", emoji: "🐟", season: "Nov – Mar" }],
    description: "Mar no RJ.", posts: [],
  },
];

const POSTS = [
  { id: 1, author: "Marcos", spotId: 1, text: "Tilápia dando!", date: "2026-04-02", likes: 12, confirmed: true, hasImage: true },
  { id: 2, author: "Ana", spotId: 1, text: "Bom acesso.", date: "2026-04-01", likes: 5, confirmed: false, hasImage: false },
  { id: 3, author: "Carlos", spotId: 2, text: "Surubim de 4kg!", date: "2026-03-30", likes: 27, confirmed: true, hasImage: false },
];

// ===== FUNÇÕES UTILITÁRIAS (extraídas do app.js para teste isolado) =====

function formatDate(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

function filterSpotsByType(spots, type) {
  if (type === "all") return spots;
  return spots.filter(s => s.type === type);
}

function searchSpots(spots, query) {
  if (!query.trim()) return spots;
  const q = query.toLowerCase();
  return spots.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.region.toLowerCase().includes(q) ||
    s.fish.some(f => f.name.toLowerCase().includes(q))
  );
}

function getPostsBySpot(posts, spotId) {
  return posts.filter(p => p.spotId === spotId);
}

function getSpotStatus(confirmations) {
  if (confirmations >= 10) return "hot";
  if (confirmations >= 1) return "active";
  return "cold";
}

// ===== TESTES =====

describe("formatDate()", () => {
  test("formata data no padrão pt-BR", () => {
    const result = formatDate("2026-04-02");
    expect(result).toMatch(/02/);
  });

  test("retorna string não vazia para data válida", () => {
    expect(formatDate("2026-01-15")).toBeTruthy();
  });
});

describe("filterSpotsByType()", () => {
  test("retorna todos os pontos quando filtro é 'all'", () => {
    expect(filterSpotsByType(SPOTS, "all")).toHaveLength(3);
  });

  test("filtra corretamente por tipo 'acude'", () => {
    const result = filterSpotsByType(SPOTS, "acude");
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Açude Cedro");
  });

  test("filtra corretamente por tipo 'mar'", () => {
    const result = filterSpotsByType(SPOTS, "mar");
    expect(result).toHaveLength(1);
    expect(result[0].region).toBe("Paraty - RJ");
  });

  test("retorna array vazio para tipo inexistente", () => {
    expect(filterSpotsByType(SPOTS, "lago")).toHaveLength(0);
  });
});

describe("searchSpots()", () => {
  test("retorna todos quando query está vazia", () => {
    expect(searchSpots(SPOTS, "")).toHaveLength(3);
    expect(searchSpots(SPOTS, "   ")).toHaveLength(3);
  });

  test("busca por nome do ponto (case insensitive)", () => {
    const result = searchSpots(SPOTS, "cedro");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });

  test("busca por região", () => {
    const result = searchSpots(SPOTS, "bahia");
    // BA está no nome da região
    const resultBA = searchSpots(SPOTS, "Sobradinho");
    expect(resultBA).toHaveLength(1);
    expect(resultBA[0].name).toBe("Rio São Francisco");
  });

  test("busca por espécie de peixe", () => {
    const result = searchSpots(SPOTS, "surubim");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  test("retorna array vazio para termo sem resultado", () => {
    expect(searchSpots(SPOTS, "xyz123inexistente")).toHaveLength(0);
  });
});

describe("getPostsBySpot()", () => {
  test("retorna posts do ponto correto", () => {
    const result = getPostsBySpot(POSTS, 1);
    expect(result).toHaveLength(2);
    result.forEach(p => expect(p.spotId).toBe(1));
  });

  test("retorna array vazio para ponto sem posts", () => {
    expect(getPostsBySpot(POSTS, 3)).toHaveLength(0);
  });

  test("conta posts confirmados corretamente", () => {
    const posts = getPostsBySpot(POSTS, 1);
    const confirmed = posts.filter(p => p.confirmed);
    expect(confirmed).toHaveLength(1);
  });
});

describe("getSpotStatus()", () => {
  test("status 'hot' para muitas confirmações", () => {
    expect(getSpotStatus(14)).toBe("hot");
    expect(getSpotStatus(31)).toBe("hot");
  });

  test("status 'active' para algumas confirmações", () => {
    expect(getSpotStatus(5)).toBe("active");
  });

  test("status 'cold' para zero confirmações", () => {
    expect(getSpotStatus(0)).toBe("cold");
  });
});

describe("Dados dos pontos de pesca (SPOTS)", () => {
  test("todos os pontos têm campos obrigatórios", () => {
    SPOTS.forEach(spot => {
      expect(spot).toHaveProperty("id");
      expect(spot).toHaveProperty("name");
      expect(spot).toHaveProperty("type");
      expect(spot).toHaveProperty("lat");
      expect(spot).toHaveProperty("lng");
      expect(spot).toHaveProperty("fish");
      expect(Array.isArray(spot.fish)).toBe(true);
    });
  });

  test("coordenadas são números válidos", () => {
    SPOTS.forEach(spot => {
      expect(typeof spot.lat).toBe("number");
      expect(typeof spot.lng).toBe("number");
      expect(spot.lat).toBeGreaterThan(-35);
      expect(spot.lat).toBeLessThan(5);
      expect(spot.lng).toBeGreaterThan(-75);
      expect(spot.lng).toBeLessThan(-35);
    });
  });

  test("tipo dos pontos é válido", () => {
    const validTypes = ["lago", "rio", "acude", "mar"];
    SPOTS.forEach(spot => {
      expect(validTypes).toContain(spot.type);
    });
  });
});

describe("Dados dos posts (POSTS)", () => {
  test("todos os posts têm autor e texto", () => {
    POSTS.forEach(post => {
      expect(post.author).toBeTruthy();
      expect(post.text).toBeTruthy();
      expect(typeof post.likes).toBe("number");
    });
  });

  test("spotId de cada post corresponde a um ponto existente", () => {
    const spotIds = SPOTS.map(s => s.id);
    POSTS.forEach(post => {
      expect(spotIds).toContain(post.spotId);
    });
  });
});
