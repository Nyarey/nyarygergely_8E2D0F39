// Átigazolások adatai
const transfers = [
  {
    player: "Kylian Mbappé",
    from: "PSG",
    to: "Real Madrid",
    fee: 180000000,
    desc: "Mbappé 2025-ben végül a Real Madridhoz igazolt, ahol gyermekkori álma vált valóra. A francia sztár rekordösszegért érkezett és azonnal a támadósor középpontja lett.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Kylian_Mbapp%C3%A9_2019.jpg"
  },
  {
    player: "Harry Kane",
    from: "Tottenham",
    to: "Bayern München",
    fee: 100000000,
    desc: "Harry Kane Németországba igazolt, hogy trófeákat nyerjen. Az első idényében már 30 gólt szerzett a Bundesligában, ezzel új rekordot döntött.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Harry_Kane_2023.jpg"
  },
  {
    player: "Kevin De Bruyne",
    from: "Manchester City",
    to: "Al Nassr",
    fee: 80000000,
    desc: "A belga középpályás új kihívásokat keresett, és Szaúd-Arábiába igazolt, ahol Cristiano Ronaldo csapattársa lett.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Kevin_De_Bruyne_2021.jpg"
  }
];

// Játékos statisztikák
const players = [
  {
    name: "Erling Haaland",
    club: "Manchester City",
    goals: 36,
    assists: 8,
    matches: 38,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Erling_Haaland_2023.jpg"
  },
  {
    name: "Vinícius Jr.",
    club: "Real Madrid",
    goals: 22,
    assists: 15,
    matches: 40,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Vinicius_Junior_2022.jpg"
  },
  {
    name: "Mohamed Salah",
    club: "Liverpool",
    goals: 28,
    assists: 10,
    matches: 42,
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Mohamed_Salah_2021.jpg"
  }
];

// Átigazolások megjelenítése
function renderTransfers() {
  const list = document.getElementById("transferList");
  if (!list) return;
  list.innerHTML = "";

  for (const t of transfers) {
    const div = document.createElement("div");
    div.className = "transfer-item";
    div.innerHTML = `
      <div class="transfer-header">
        <strong>${t.player}</strong>
        <span>${t.from} → ${t.to}</span>
      </div>
      <div class="transfer-details">
        <p><strong>Átigazolási díj:</strong> €${(t.fee / 1_000_000).toFixed(1)} millió</p>
        <p>${t.desc}</p>
        <img src="${t.img}" alt="${t.player}" />
      </div>
    `;
    list.appendChild(div);
  }
}

// Játékos statisztikák megjelenítése
function renderStats() {
  const list = document.getElementById("statsList");
  if (!list) return;
  list.innerHTML = "";

  for (const p of players) {
    const avg = (p.goals / p.matches).toFixed(2);
    const div = document.createElement("div");
    div.className = "player-card";
    div.innerHTML = `
      <div class="player-header">
        <strong>${p.name}</strong>
        <span>${p.club}</span>
      </div>
      <div class="player-details">
        <p><strong>Gólok:</strong> ${p.goals}</p>
        <p><strong>Gólpasszok:</strong> ${p.assists}</p>
        <p><strong>Mérkőzések:</strong> ${p.matches}</p>
        <p><strong>Gólátlag/mérkőzés:</strong> ${avg}</p>
        <img src="${p.img}" alt="${p.name}" />
      </div>
    `;
    list.appendChild(div);
  }
}

// Keresés játékosnév alapján
function searchPlayer(name) {
  const filtered = players.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  renderFilteredStats(filtered);
}

// Segédfüggvény a szűrt listához
function renderFilteredStats(list) {
  const box = document.getElementById("statsList");
  box.innerHTML = "";
  for (const p of list) {
    const avg = (p.goals / p.matches).toFixed(2);
    const div = document.createElement("div");
    div.className = "player-card";
    div.innerHTML = `
      <div class="player-header">
        <strong>${p.name}</strong>
        <span>${p.club}</span>
      </div>
      <div class="player-details">
        <p><strong>Gólok:</strong> ${p.goals}</p>
        <p><strong>Gólpasszok:</strong> ${p.assists}</p>
        <p><strong>Mérkőzések:</strong> ${p.matches}</p>
        <p><strong>Gólátlag/mérkőzés:</strong> ${avg}</p>
        <img src="${p.img}" alt="${p.name}" />
      </div>
    `;
    box.appendChild(div);
  }
}

// Oldal betöltéskor
document.addEventListener("DOMContentLoaded", () => {
  renderTransfers();
  renderStats();
});
