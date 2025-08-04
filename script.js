// Background particles animation
document.addEventListener('DOMContentLoaded', function() {
    // Create dynamic space particles
    const spaceParticles = document.querySelector('.space-particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        spaceParticles.appendChild(particle);
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.cyber-btn');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
