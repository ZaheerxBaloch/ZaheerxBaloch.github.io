// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Join Beta / Pre-registration alert
document.getElementById('joinBetaBtn')?.addEventListener('click', () => {
  alert("✅ Pre-registration received! We'll contact you soon.");
});

// Countdown placeholder (future use)
const countdownElement = document.getElementById("countdown");
if (countdownElement) {
  countdownElement.innerText = "00:00:00";
}

// Animated logo on load
window.addEventListener("load", () => {
  const logo = document.querySelector(".zenova-logo");
  if (logo) {
    logo.classList.add("logo-animation");
  }
});

// Email registration handling (for student form)
const studentForm = document.getElementById("studentForm");
if (studentForm) {
  studentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎓 Thank you for registering as a student. You'll be contacted shortly!");
    studentForm.reset();
  });
}
