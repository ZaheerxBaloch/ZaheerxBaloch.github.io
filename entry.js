// entry.js
document.addEventListener('DOMContentLoaded', () => {
    const launchBtn = document.getElementById('launchBtn');
    
    // Button click handler
    launchBtn.addEventListener('click', () => {
        // Add click animation
        launchBtn.style.transform = 'scale(0.95)';
        launchBtn.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
        
        // Fade out animation
        document.querySelector('.entry-container').style.opacity = '0';
        document.querySelector('.entry-container').style.transform = 'translateY(-20px)';
        document.querySelector('.entry-container').style.transition = 'all 0.5s ease-out';
        
        // Redirect after animation completes
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 500);
    });
    
    // Preload all resources
    const preloadResources = () => {
        const resources = [
            'home.css', 'dashboard.css', 'product.css', 'auth.css',
            'home.js', 'dashboard.js', 'product.js', 'auth.js',
            'home.html', 'dashboard.html', 'product.html', 'auth.html'
        ];
        
        resources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    };
    
    // Start preloading after initial animation
    setTimeout(preloadResources, 1500);
});
