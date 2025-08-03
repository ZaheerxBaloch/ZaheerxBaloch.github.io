// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded'); // Debug log
    
    const launchBtn = document.getElementById('launchBtn');
    
    if (!launchBtn) {
        console.error('Launch button not found!');
        return;
    }
    
    console.log('Launch button found'); // Debug log
    
    launchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Launch button clicked'); // Debug log
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        this.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8)';
        
        // Fade out animation
        const container = document.querySelector('.entry-container');
        if (container) {
            container.style.opacity = '0';
            container.style.transform = 'translateY(-20px)';
            container.style.transition = 'all 0.5s ease-out';
        }
        
        // Redirect after animation completes
        setTimeout(function() {
            console.log('Redirecting to home.html'); // Debug log
            window.location.href = 'home.html';
        }, 500);
    });
    
    // Preload all resources
    function preloadResources() {
        console.log('Preloading resources'); // Debug log
        const resources = [
            'home.css', 'dashboard.css', 'product.css', 'auth.css',
            'home.js', 'dashboard.js', 'product.js', 'auth.js',
            'home.html', 'dashboard.html', 'product.html', 'auth.html'
        ];
        
        resources.forEach(function(resource) {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
    
    // Start preloading after initial animation
    setTimeout(preloadResources, 1500);
});
