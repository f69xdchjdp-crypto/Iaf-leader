const campaign = {
  day: 1,
  maxDays: 3,
  pilots: [],
  aircraft: [],
  missionStarted: false
};

// --- DATA ---
const pilotPool = [
  "Viper", "Falcon", "Razor", "Ghost",
  "Cougar", "Ace", "Nova", "Hawk"
].map((name, i) => ({
  id: i,
  name,
  skill: "Green",
  stress: 0,
  xp: 0,
  status: "Okay",
  selected: false
}));

const aircraftPool = [
  {
    id: "f16",
    name: "F-16 Fighting Falcon",
    hardpoints: 6,
    year: 1991,
    selected: false
  }
];

// --- UI LOGIC ---
function showScreen(screen) {
  const title = document.getElementById("screen-title");
  const content = document.getElementById("screen-content");

  if (screen === "pilots") {
    title.textContent = "Select 8 Pilots";
    content.innerHTML = "";

    pilotPool.forEach(p => {
      const div = document.createElement("div");
      div.className = "card" + (p.selected ? " selected" : "");
      div.innerHTML = `
        <strong>${p.name}</strong><br>
        Skill: ${p.skill} | Stress: ${p.stress}
      `;
      div.onclick = () => togglePilot(p.id);
      content.appendChild(div);
    });
  }

  if (screen === "aircraft") {
    title.textContent = "Select Aircraft";
    content.innerHTML = "";

    aircraftPool.forEach(a => {
      const div = document.createElement("div");
      div.className = "card" + (a.selected ? " selected" : "");
      div.innerHTML = `
        <strong>${a.name}</strong><br>
        Hardpoints: ${a.hardpoints}
      `;
      div.onclick = () => toggleAircraft(a.id);
      content.appendChild(div);
    });
  }
}

function togglePilot(id) {
  const selectedCount = pilotPool.filter(p => p.selected).length;
  const pilot = pilotPool.find(p => p.id === id);

  if (!pilot.selected && selectedCount >= 8) return;

  pilot.selected = !pilot.selected;
  showScreen("pilots");
}

function toggleAircraft(id) {
  const aircraft = aircraftPool.find(a => a.id === id);
  aircraft.selected = !aircraft.selected;
  showScreen("aircraft");
}

function startMission() {
  const selectedPilots = pilotPool.filter(p => p.selected);
  const selectedAircraft = aircraftPool.filter(a => a.selected);

  if (selectedPilots.length !== 8) {
    alert("You must select exactly 8 pilots.");
    return;
  }

  if (selectedAircraft.length === 0) {
    alert("Select at least one aircraft.");
    return;
  }

  campaign.pilots = selectedPilots;
  campaign.aircraft = selectedAircraft;
  campaign.missionStarted = true;

  document.getElementById("screen-title").textContent = "Mission Started";
  document.getElementById("screen-content").innerHTML = `
    <p>Day ${campaign.day} of ${campaign.maxDays}</p>
    <p>Mission is now active.</p>
  `;
}
