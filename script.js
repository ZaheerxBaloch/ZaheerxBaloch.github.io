// Loading animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    // Simulate loading process
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2500);

    // Button hover effects
    const buttons = document.querySelectorAll('.cyber-btn');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            button.style.setProperty('--x', `${e.clientX - rect.left}px`);
            button.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });
});
