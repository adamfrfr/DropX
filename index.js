function joinTeam() {
  alert("Thanks for your interest in DropX! We'll reach out soon.");
}

function contactAlert() {
  alert("Message feature coming soon!");
}

// Player data
const players = {
  RXZ: {
    name: "RXZ",
    role: "Sniper",
    stats: {
      kills: 1250,
      deaths: 890,
      assists: 340,
      winRate: "68%"
    },
    favWeapon: "AWP"
  },
  Nova: {
    name: "Nova",
    role: "Support",
    stats: {
      kills: 980,
      deaths: 720,
      assists: 580,
      winRate: "72%"
    },
    favWeapon: "M4A1-S"
  },
  Blaze: {
    name: "Blaze",
    role: "Entry Fragger",
    stats: {
      kills: 1450,
      deaths: 950,
      assists: 280,
      winRate: "65%"
    },
    favWeapon: "AK-47"
  }
};

function showProfile(playerName) {
  const player = players[playerName];
  if (!player) return;

  const profileContent = document.getElementById('profileContent');
  profileContent.innerHTML = `
    <h2>${player.name}</h2>
    <p><strong>Role:</strong> ${player.role}</p>
    <h3>Stats</h3>
    <ul>
      <li>Kills: ${player.stats.kills}</li>
      <li>Deaths: ${player.stats.deaths}</li>
      <li>Assists: ${player.stats.assists}</li>
      <li>Win Rate: ${player.stats.winRate}</li>
    </ul>
    <p><strong>Favorite Weapon:</strong> ${player.favWeapon}</p>
  `;

  document.getElementById('profileModal').style.display = 'block';
}

function closeProfile() {
  document.getElementById('profileModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('profileModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}