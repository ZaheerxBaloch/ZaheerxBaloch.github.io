// Loading animation
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 2000);
});

// Button hover effects
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
    });
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});
