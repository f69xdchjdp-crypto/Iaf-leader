const pilots = [
  {
    name: "Viper",
    aircraft: "F-16",
    rank: "Green",
    cool: 3,
    speed: "Fast",
    ata: 0,
    atg: 0,
    stressTable: [
      { range: "0–2", status: "OK", speed: "Fast", ata: 0, atg: 0 },
      { range: "3–5", status: "Shaken", speed: "Slow", ata: -1, atg: -1 }
    ]
  },
  {
    name: "Falcon",
    aircraft: "F-15",
    rank: "Average",
    cool: 4,
    speed: "Fast",
    ata: 1,
    atg: 0,
    stressTable: [
      { range: "0–3", status: "OK", speed: "Fast", ata: 0, atg: 0 },
      { range: "4–6", status: "Shaken", speed: "Slow", ata: -1, atg: -1 }
    ]
  }
];

const campaignScreen = document.getElementById("campaignScreen");
const squadronScreen = document.getElementById("squadronScreen");
const continueBtn = document.getElementById("continueToSquadron");

continueBtn.onclick = () => {
  campaignScreen.classList.add("hidden");
  squadronScreen.classList.remove("hidden");
};

function renderPilots() {
  const list = document.getElementById("pilotList");
  list.innerHTML = "";

  pilots.forEach(p => {
    const card = document.createElement("div");
    card.className = "pilot-card";

    card.innerHTML = `
      <div class="silhouette">${p.aircraft}</div>
      <div>
        <strong>${p.name}</strong> (${p.aircraft})<br/>
        Rank: ${p.rank} | Cool: ${p.cool}<br/>
        Base Speed: ${p.speed} | ATA: ${p.ata} | ATG: ${p.atg}

        <table class="stress-table">
          <tr>
            <th>Stress</th>
            <th>Status</th>
            <th>Speed</th>
            <th>ATA</th>
            <th>ATG</th>
          </tr>
          ${p.stressTable.map(r => `
            <tr>
              <td>${r.range}</td>
              <td>${r.status}</td>
              <td>${r.speed}</td>
              <td>${r.ata}</td>
              <td>${r.atg}</td>
            </tr>
          `).join("")}
        </table>
      </div>
    `;

    list.appendChild(card);
  });
}

renderPilots();