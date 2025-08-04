// Quantum Loading Sequence
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingPercent = document.querySelector('.loading-percent');
    
    let percent = 0;
    const interval = setInterval(() => {
        percent += Math.floor(Math.random() * 5) + 1;
        if (percent >= 100) {
            percent = 100;
            clearInterval(interval);
            loadingPercent.textContent = `${percent}%`;
            
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 300);
        } else {
            loadingPercent.textContent = `${percent}%`;
        }
    }, 100);
    
    // Button Hover Effects
    const buttons = document.querySelectorAll('.cyber-button');
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            button.style.setProperty('--mouse-x', `${x}px`);
            button.style.setProperty('--mouse-y', `${y}px`);
        });
        
        button.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
    
    // Prevent Zooming on Mobile
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
    
    // Force Viewport Height
    function setHeight() {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    }
    window.addEventListener('resize', setHeight);
    setHeight();
});
