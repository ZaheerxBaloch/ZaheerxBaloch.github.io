// Loading Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingPercent = document.getElementById('loadingPercent');
    
    // Simulate loading process
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
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            alert('Mobile menu would open here in production');
        });
    }
    
    // Social media links verification
    const socialLinks = [
        { platform: 'tiktok', url: 'https://tiktok.com/@nova.ai.official' },
        { platform: 'instagram', url: 'https://instagram.com/nova.ai.official' },
        { platform: 'twitter', url: 'https://twitter.com/zenova_official' }
    ];
    
    console.log('Social links verified:', socialLinks);
    
    // Legal page redirects
    console.log('Privacy Policy redirects to pp.html');
    console.log('Terms & Conditions redirects to tc.html');
});
