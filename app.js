const pilots = [
  { name: "Crusader", aircraft: "F-4 Phantom II" },
  { name: "Warrior",  aircraft: "F-4 Phantom II" },
  { name: "Storm",    aircraft: "F-4 Phantom II" },
  { name: "Rocket",   aircraft: "F-16 Fighting Falcon" },
  { name: "Blade",    aircraft: "F-16 Fighting Falcon" }
];

const ranks = [
  "Newbie",
  "Green",
  "Average",
  "Skilled",
  "Veteran",
  "Ace"
];

const container = document.getElementById("pilotList");

pilots.forEach(pilot => {
  ranks.forEach(rank => {
    const card = document.createElement("div");
    card.className = `pilot-card rank-${rank}`;
    card.innerHTML = `
      <strong>${pilot.name}</strong> — ${rank}<br />
      <span class="small">${pilot.aircraft}</span>
    `;
    container.appendChild(card);
  });
});