// Hide loading screen after delay
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
    
    // Create optimized space particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 5000), 50);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 2 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 15 + 15;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.animation = `float ${duration}s ease-in-out infinite`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add optimized ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove previous ripples
            const oldRipples = this.querySelectorAll('.ripple');
            oldRipples.forEach(ripple => ripple.remove());
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Prevent zooming
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
    
    // Handle resize
    window.addEventListener('resize', function() {
        document.body.style.height = `${window.innerHeight}px`;
    });
    
    // Set initial height
    document.body.style.height = `${window.innerHeight}px`;
});
