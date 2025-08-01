// === Countdown Timer (for coming soon launch) === const countdown = () => { const launchDate = new Date("2025-12-01T00:00:00Z").getTime(); // adjust as needed const now = new Date().getTime(); const diff = launchDate - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24)); const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); const seconds = Math.floor((diff % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = ${days}d ${hours}h ${minutes}m ${seconds}s;

if (diff < 0) { document.getElementById("countdown").innerHTML = "We're Live!"; } }; setInterval(countdown, 1000);

// === Smooth Scroll === document.querySelectorAll('a[href^="#"]').forEach(anchor => { anchor.addEventListener("click", function (e) { e.preventDefault(); document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" }); }); });

// === Interactive Model Cards (hover animation or alert) === const modelCards = document.querySelectorAll(".model-card"); modelCards.forEach(card => { card.addEventListener("click", () => { alert("Feature details coming soon!"); }); });

// === Hologram Effect Placeholder (future update) === // You can add WebGL / canvas / holographic effect later using Three.js or CSS animation

// === Email auto-link (optional utility) === const mailLink = document.getElementById("emailLink"); if (mailLink) { mailLink.addEventListener("click", () => { window.location.href = "mailto:gokuren878@gmail.com"; }); }

