// Toggle hologram activation
const hologramBtn = document.querySelector('.hologram-controls .cyber-btn');
hologramBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        this.innerHTML = '<i class="fas fa-stop"></i> Deactivate';
    } else {
        this.innerHTML = '<i class="fas fa-play"></i> Activate';
    }
});

// Emergency SOS button
const sosBtn = document.querySelector('.sos-btn');
sosBtn.addEventListener('click', function() {
    if (confirm('Activate emergency satellite SOS?')) {
        this.innerHTML = '<i class="fas fa-satellite-dish"></i> SOS ACTIVATED';
        this.style.background = 'rgba(255, 42, 109, 0.5)';
        
        // Simulate emergency signal
        const pulse = document.createElement('div');
        pulse.style.position = 'fixed';
        pulse.style.top = '0';
        pulse.style.left = '0';
        pulse.style.width = '100%';
        pulse.style.height = '100%';
        pulse.style.background = 'radial-gradient(circle, rgba(255,42,109,0.3) 0%, transparent 70%)';
        pulse.style.zIndex = '1000';
        pulse.style.pointerEvents = 'none';
        pulse.style.animation = 'sosPulse 1.5s infinite';
        document.body.appendChild(pulse);
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sosPulse {
                0% { transform: scale(1); opacity: 1; }
                100% { transform: scale(1.5); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            pulse.remove();
            style.remove();
        }, 5000);
    }
});

// Animate stats cards on load
document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.stat-card');
    stats.forEach((stat, index) => {
        setTimeout(() => {
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
