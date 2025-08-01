// Set target launch date (YYYY-MM-DD HH:MM:SS format, UTC)
const launchDate = new Date("2025-09-01T00:00:00Z"); // apni launch date yahan set karo

function updateCountdown(elementId) {
  const now = new Date();
  let diff = Math.max(0, Math.floor((launchDate - now) / 1000)); // seconds left
  // Format: DD:HH:MM:SS
  const days = Math.floor(diff / (3600*24));
  const hours = Math.floor((diff % (3600*24)) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;
  const display =
    `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:` +
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById(elementId).textContent = display;
}

function animateCountdowns() {
  [
    "countdown-nova1",
    "countdown-hypernova1",
    "countdown-novaN9-1",
    "countdown-elite1",
    "countdown-ringlite",
    "countdown-ringstandard",
    "countdown-ringglow",
    "countdown-ringelite"
  ].forEach(id => {
    if (document.getElementById(id)) updateCountdown(id);
  });
  setTimeout(animateCountdowns, 1000);
}

document.addEventListener("DOMContentLoaded", animateCountdowns);
