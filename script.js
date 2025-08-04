// Quantum Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingPercent = document.getElementById('loadingPercent');
    
    // Simulate loading progress
    let percent = 0;
    const interval = setInterval(() => {
        percent += Math.floor(Math.random() * 5) + 1;
        if (percent >= 100) {
            percent = 100;
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 300);
        }
        loadingPercent.textContent = `${percent}%`;
    }, 100);
    
    // Button ripple effects
    const buttons = document.querySelectorAll('.cyber-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = this.querySelector('.btn-ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.animation = 'none';
            void ripple.offsetWidth; // Trigger reflow
            ripple.style.animation = 'ripple 1s linear';
        });
    });
    
    // Create floating particles
    const particleField = document.querySelector('.particle-field');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: white;
            border-radius: 50%;
            opacity: ${Math.random() * 0.3 + 0.1};
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${Math.random() * 20 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particleField.appendChild(particle);
    }
    
    // Add floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
            100% { transform: translate(0, 0); }
        }
    `;
    document.head.appendChild(style);
});
