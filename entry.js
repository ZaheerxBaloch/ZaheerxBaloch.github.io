function showAuth() {
  const modal = document.getElementById('authModal');
  modal.classList.remove('hidden');
  playSound();
}

function closeAuth() {
  const modal = document.getElementById('authModal');
  modal.classList.add('hidden');
}

function redirectToSignup() {
  playSound();
  window.location.href = 'signup.html'; // Placeholder for your sign-up page
}

function playSound() {
  const audio = new Audio('assets/entry-sound.mp3'); // Only if sound file exists
  audio.play();
}
