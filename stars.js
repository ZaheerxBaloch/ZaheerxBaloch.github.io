// Countdown (for hero or coming soon section)
const countdown = () => {
  const endDate = new Date("2025-12-01T00:00:00").getTime(); // Change if needed
  const timer = document.getElementById("countdown");

  if (!timer) return;

  setInterval(() => {
    const now = new Date().getTime();
    const gap = endDate - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    timer.innerHTML = `
      <div><strong>${days}</strong> Days</div>
      <div><strong>${hours}</strong> Hrs</div>
      <div><strong>${minutes}</strong> Min</div>
      <div><strong>${seconds}</strong> Sec</div>
    `;
  }, 1000);
};

countdown();


// Smooth Scroll for buttons
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Simple card effect (Nova models)
const cards = document.querySelectorAll(".model-card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.classList.add("active");
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("active");
  });
});


// Email Trigger (when form is submitted)
const form = document.querySelector("#student-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;

    // Send using mailto (for demo only, real projects should use backend/API)
    window.location.href = `mailto:gokuren878@gmail.com?subject=Nova Student Beta&body=Name: ${name}%0D%0AEmail: ${email}`;

    alert("Registration submitted successfully!");
    form.reset();
  });
}
